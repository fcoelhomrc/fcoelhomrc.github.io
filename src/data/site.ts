export const profile = {
  name: "Felipe Coutinho",
  role: "AI Engineer",
  location: "Porto, Portugal",
  summary:
    "I help AI-native teams improve their product the way frontier labs do: benchmarks built from production data, harness tuning and model routing, and open models post-trained for their use case.",
  email: "fcoelho.mrc at gmail dot com",
  github: "https://github.com/fcoelhomrc",
  linkedin: "https://www.linkedin.com/in/fcoelhomrc/",
  image: "profile.jpg",
  cv: "felipe-coutinho-cv.pdf",
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
    name: "Personal AI Assistant",
    description:
      "A self-hosted AI assistant on my Kubernetes homelab that triages my email, drafts replies, and answers questions over my mail and notes through MCP tools, with local LLMs and every run traced and evaluated.",
    coverImage: "personal-ai-assistant.png",
    coverAlt: "Architecture of the self-hosted assistant: agent, MCP tool servers, local models and tracing on k3s",
    tags: [
      "Python",
      "LLM Agents",
      "Model Context Protocol (MCP)",
      "vLLM",
      "llama.cpp",
      "Kubernetes",
      "MLflow",
      "OpenTelemetry",
      "Model Evaluation",
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
    coverImage: "ml-model-serving.png",
    coverAlt: "Training, CI/CD and AWS serving flow: MLflow and S3 to an EC2 FastAPI container deployed by GitHub Actions and Ansible",
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
    name: "Chemotherapy Response Prediction from CT",
    description:
      "A vision transformer model that predicts how ovarian cancer patients will respond to chemotherapy from the CT scan taken before treatment, combined with clinical markers. Published in IJCARS 2026.",
    coverImage: "crs-prediction.png",
    coverAlt: "Imaging and clinical branches fused by an MLP head to predict chemotherapy response",
    tags: [
      "Python",
      "PyTorch",
      "Vision Transformers",
      "Hugging Face Transformers",
      "Medical Imaging",
      "Computer Vision",
      "Multimodal Learning",
      "Model Evaluation",
      "Weights & Biases",
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
