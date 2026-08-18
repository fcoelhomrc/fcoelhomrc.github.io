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
    name: "Pocy Demo",
    description:
      "An evaluation suite for humanoid robots that uses vision-language models to automatically score task success and execution quality from video and sensor data.",
    coverImage: "pocy-demo.png",
    coverAlt: "Pocy Demo humanoid robot task evaluation interface",
    tags: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "Vision-Language Models",
      "LoRA / SFT",
      "GRPO",
      "MLOps",
      "Google Cloud (GCP)",
      "Docker",
    ],
    status: "active",
  },
  {
    name: "Jellyfin Media Server",
    description:
      "A Kubernetes-managed media server for my homelab, combining Jellyfin with an automated request, library management, and download stack.",
    repository: "https://github.com/fcoelhomrc/jellyfin-media-server",
    coverImage: "jellyfin-media-server.svg",
    coverAlt: "Application flow for the Kubernetes-managed Jellyfin media stack",
    tags: [
      "Kubernetes",
      "Docker",
      "Container Orchestration",
      "Infrastructure as Code",
      "Linux",
      "Networking",
      "DevOps",
    ],
    status: "completed",
  },
] satisfies Array<{
  name: string;
  description: string;
  repository?: string;
  coverImage?: string;
  coverAlt?: string;
  tags: string[];
  status: "active" | "completed";
}>;
