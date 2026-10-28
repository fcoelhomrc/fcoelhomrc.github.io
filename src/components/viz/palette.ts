// Dark categorical slots, validated against the card surface #1f1d2e
// (adjacent CVD ΔE >= 8.4, normal-vision ΔE >= 19.3, all >= 3:1 contrast).
// Hues are assigned in this order and follow the entity, never its rank.
export const SLOTS = ["#3987e5", "#d95926", "#199e70", "#c98500", "#d55181", "#008300"];

export const MODE_COLORS: Record<string, string> = {
  Dense: SLOTS[0],
  "Postgres ts_rank": SLOTS[1],
  BM25: SLOTS[2],
  "Hybrid (dense + ts_rank)": SLOTS[3],
  "Hybrid (dense + BM25)": SLOTS[4],
};

export const ARM_COLORS: Record<string, string> = {
  "Original query": SLOTS[0],
  "Decomposition + original": SLOTS[1],
  Decomposition: SLOTS[2],
  "Multi-query + original": SLOTS[3],
  "Multi-query": SLOTS[4],
  HyDE: SLOTS[5],
};

export const fmt = (v: number, digits = 3) => v.toFixed(digits);
