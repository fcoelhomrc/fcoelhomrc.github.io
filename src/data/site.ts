export const profile = {
  name: "Felipe Coutinho",
  role: "AI Engineer",
  location: "Porto, Portugal",
  summary:
    "I build AI systems across the stack, backed by 5+ years in computer vision and far too many hours tweaking NixOS.",
  email: "fcoelho.mrc at gmail dot com",
  github: "https://github.com/fcoelhomrc",
  linkedin: "https://www.linkedin.com/in/fcoelhomrc/",
  image: "profile.jpg",
};

export const projects = [
  {
    name: "Project name",
    description:
      "A short description of the problem, the approach, and why the project matters.",
    repository: "https://github.com/fcoelhomrc",
    tags: ["Python", "Data", "Nix"],
    status: "active",
  },
  {
    name: "Another project",
    description:
      "Replace this card with a project that shows your work and the decisions behind it.",
    repository: "https://github.com/fcoelhomrc",
    tags: ["TypeScript", "Astro"],
    status: "completed",
  },
] satisfies Array<{
  name: string;
  description: string;
  repository: string;
  tags: string[];
  status: "active" | "completed";
}>;
