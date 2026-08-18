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
    name: "Humanoid Robot Evaluation Suite",
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
    name: "Self-Hosted Media Stack",
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
  {
    name: "Scientific Paper Semantic Search",
    description:
      "A retrieval pipeline for scientific papers that automates PDF ingestion, OCR, document chunking, embedding, and semantic search.",
    repository: "https://github.com/fcoelhomrc/papers-please",
    coverImage: "papers-please.png",
    coverAlt: "Architecture of the scientific paper ingestion and semantic search pipeline",
    tags: [
      "Python",
      "Retrieval-Augmented Generation (RAG)",
      "Semantic Search",
      "NLP",
      "Embeddings",
      "Vector Databases",
      "Document AI / OCR",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    status: "completed",
  },
  {
    name: "Automated Product Tagging",
    description:
      "A prototype for extracting structured marketplace attributes from listing images and text, with dataset collection and labeling workflows plus local VLM experiments.",
    repository: "https://github.com/fcoelhomrc/autotagging",
    coverImage: "automated-product-tagging.png",
    coverAlt: "Dataset and local VLM workflows for automated marketplace product tagging",
    tags: [
      "Python",
      "Computer Vision",
      "Vision-Language Models",
      "Multimodal AI",
      "Structured Outputs",
      "PyTorch",
      "Hugging Face Transformers",
      "Data Pipelines",
      "Model Evaluation",
    ],
    status: "completed",
  },
  {
    name: "Image Classification Serving Pipeline",
    description:
      "An end-to-end pipeline for training, tracking, promoting, containerizing, and deploying image classification models behind an inference API on AWS.",
    repository: "https://github.com/fcoelhomrc/ml-model-serving",
    tags: [
      "Python",
      "PyTorch",
      "MLOps",
      "Model Serving",
      "MLflow",
      "FastAPI",
      "Docker",
      "AWS",
      "Terraform",
      "Ansible",
      "CI/CD",
    ],
    status: "completed",
  },
  {
    name: "Multimodal Survival Modeling Pipeline",
    description:
      "A multimodal model that combines MRI, pathology slides, and clinical records to predict patient outcomes over time. It placed 5th of 22 teams in the CHIMERA 2025 challenge.",
    repository: "https://github.com/fcoelhomrc/chimera",
    coverImage: "multimodal-survival-modeling.png",
    coverAlt: "Multimodal feature extraction and late-fusion architecture",
    tags: [
      "Python",
      "PyTorch",
      "Multimodal Learning",
      "Deep Learning",
      "Computer Vision",
      "Survival Analysis",
      "Medical Imaging",
      "Feature Fusion",
      "Hydra",
      "Weights & Biases",
      "Docker",
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
