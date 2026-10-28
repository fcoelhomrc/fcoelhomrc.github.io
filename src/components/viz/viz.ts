// Shared hover layer for the blog charts. Charts are drawn at build time; this
// only adds tooltips, the line-chart crosshair and the view switcher.

type Row = { name: string; color: string; value: string };

function tooltipFor(figure: HTMLElement) {
  let tip = figure.querySelector<HTMLDivElement>(".viz-tip");
  if (!tip) {
    tip = document.createElement("div");
    tip.className = "viz-tip";
    tip.setAttribute("role", "status");
    figure.querySelector(".viz-plot")?.append(tip);
  }
  return tip;
}

function showTip(figure: HTMLElement, title: string, rows: Row[], x: number, y: number) {
  const tip = tooltipFor(figure);
  tip.replaceChildren();
  const head = document.createElement("div");
  head.className = "viz-tip-title";
  head.textContent = title;
  tip.append(head);
  for (const row of rows) {
    const line = document.createElement("div");
    line.className = "viz-tip-row";
    const key = document.createElement("span");
    key.className = "viz-tip-key";
    key.style.background = row.color;
    const value = document.createElement("strong");
    value.textContent = row.value;
    const name = document.createElement("span");
    name.textContent = row.name;
    line.append(key, value, name);
    tip.append(line);
  }
  const plot = figure.querySelector<HTMLElement>(".viz-plot")!;
  const box = plot.getBoundingClientRect();
  tip.style.display = "block";
  const w = tip.offsetWidth;
  const left = Math.min(Math.max(x - box.left + plot.scrollLeft + 14, 4), plot.scrollWidth - w - 4);
  tip.style.left = `${left}px`;
  tip.style.top = `${Math.max(y - box.top - 10, 0)}px`;
}

function hideTip(figure: HTMLElement) {
  const tip = figure.querySelector<HTMLElement>(".viz-tip");
  if (tip) tip.style.display = "none";
}

function setupMarks(figure: HTMLElement) {
  figure.querySelectorAll<SVGElement>("[data-tip]").forEach((mark) => {
    const show = (x: number, y: number) => {
      const data = JSON.parse(mark.dataset.tip!) as { title: string; rows: Row[] };
      figure.querySelectorAll(".is-hover").forEach((m) => m.classList.remove("is-hover"));
      mark.classList.add("is-hover");
      showTip(figure, data.title, data.rows, x, y);
    };
    mark.addEventListener("pointermove", (e) => show(e.clientX, e.clientY));
    mark.addEventListener("focus", () => {
      const r = mark.getBoundingClientRect();
      show(r.right, r.top);
    });
    const hide = () => {
      mark.classList.remove("is-hover");
      hideTip(figure);
    };
    mark.addEventListener("pointerleave", hide);
    mark.addEventListener("blur", hide);
  });
}

function setupCrosshair(figure: HTMLElement) {
  figure.querySelectorAll<SVGSVGElement>("svg[data-cross]").forEach((svg) => {
    const spec = JSON.parse(svg.dataset.cross!) as {
      xs: number[];
      labels: string[];
      top: number;
      bottom: number;
      views: { series: { name: string; color: string; values: string[]; ys: number[] }[] }[];
    };
    const rule = svg.querySelector<SVGLineElement>(".viz-cross")!;
    const dots = svg.querySelector<SVGGElement>(".viz-cross-dots")!;
    const view = () => Number(figure.dataset.view ?? 0);
    const move = (clientX: number, clientY: number) => {
      const pt = svg.createSVGPoint();
      pt.x = clientX;
      pt.y = clientY;
      const local = pt.matrixTransform(svg.getScreenCTM()!.inverse());
      let best = 0;
      spec.xs.forEach((x, i) => {
        if (Math.abs(x - local.x) < Math.abs(spec.xs[best] - local.x)) best = i;
      });
      const x = spec.xs[best];
      rule.setAttribute("x1", String(x));
      rule.setAttribute("x2", String(x));
      rule.style.display = "block";
      const series = spec.views[view()].series;
      dots.replaceChildren();
      for (const s of series) {
        const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        c.setAttribute("cx", String(x));
        c.setAttribute("cy", String(s.ys[best]));
        c.setAttribute("r", "4.5");
        c.setAttribute("fill", s.color);
        c.setAttribute("class", "viz-dot");
        dots.append(c);
      }
      const rows = series
        .map((s) => ({ name: s.name, color: s.color, value: s.values[best], sort: s.ys[best] }))
        .sort((a, b) => a.sort - b.sort);
      showTip(figure, spec.labels[best], rows, clientX, clientY);
    };
    const hit = svg.querySelector<SVGRectElement>(".viz-hit")!;
    hit.addEventListener("pointermove", (e) => move(e.clientX, e.clientY));
    hit.addEventListener("pointerleave", () => {
      rule.style.display = "none";
      dots.replaceChildren();
      hideTip(figure);
    });
  });
}

function setupViews(figure: HTMLElement) {
  const buttons = figure.querySelectorAll<HTMLButtonElement>(".viz-views button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const v = button.dataset.view!;
      figure.dataset.view = v;
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
      figure.querySelectorAll<SVGGElement>("[data-view-panel]").forEach((g) => {
        g.style.display = g.dataset.viewPanel === v ? "" : "none";
      });
    });
  });
}

document.querySelectorAll<HTMLElement>(".viz").forEach((figure) => {
  setupViews(figure);
  setupMarks(figure);
  setupCrosshair(figure);
});
