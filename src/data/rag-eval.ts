// Numbers behind the RAG evaluation posts, all from fcoelhomrc/papers-please
// at 361ff06 (12 Sep 2026). Two kinds of source:
//  - exact tables copied from the issue comments and commit messages, cited inline;
//  - rag-eval-figures.json, read back out of the committed matplotlib SVGs under
//    assets/eval/svg/light/<encoder>/ (tick positions give the axis mapping).
//    Spot checks against the issue tables agree to the third decimal.
import figures from "./rag-eval-figures.json";

export { figures };

export const ENCODERS = ["bge-small", "bge-large", "arctic-m-v2", "qwen3-0.6b"] as const;
export const ENCODER_LABEL: Record<string, string> = {
  "bge-small": "bge-small",
  "bge-large": "bge-large",
  "arctic-m-v2": "Arctic Embed M v2",
  "qwen3-0.6b": "Qwen3 Embedding 0.6B",
};

// eval/testset files: seed pools, generated and curated sets. Questions that
// span two topics count under both, as in the v1 commit message (0e8490c).
export const topicSkew = {
  topics: ["agents", "efficiency", "evaluation", "retrieval", "alignment"],
  v1: { seed: [80, 80, 80, 80, 80], generated: [75, 35, 17, 15, 13], kept: [58, 23, 11, 13, 8] },
  v2: { seed: [80, 80, 80, 80, 80], generated: [31, 31, 31, 31, 31], kept: [20, 20, 20, 20, 20] },
};

// eval/testset/generated.jsonl and curated.jsonl (v2).
export const synthMix = [
  { label: "Single-hop specific", generated: 75, kept: 46 },
  { label: "Multi-hop specific", generated: 40, kept: 21 },
  { label: "Multi-hop abstract", generated: 40, kept: 33 },
];

// eval/testset/judged.jsonl: flags on the 34 questions the review pass
// dropped. A question can carry more than one flag.
export const dropFlags = [
  { label: "OCR artifact", n: 23 },
  { label: "Unsupported gold answer", n: 13 },
  { label: "Unrealistic length", n: 11 },
  { label: "Names its own answer", n: 10 },
  { label: "Floating “these”", n: 4 },
];

// Issue #48: mode=semantic (dense alone) and BM25, top_k=10, rerank off, n=100.
export const soloRetrievers = {
  columns: ["bge-small", "bge-large", "arctic-m-v2", "qwen3-0.6b", "BM25"],
  recall: [0.678, 0.732, 0.79, 0.767, 0.797],
  ndcg: [0.567, 0.586, 0.664, 0.589, 0.705],
  map: [0.496, 0.505, 0.58, 0.489, 0.626],
  rPrecision: [0.44, 0.425, 0.488, 0.38, 0.585],
  hitRate: [0.83, 0.85, 0.92, 0.9, 0.94],
  mrr: [0.593, 0.593, 0.704, 0.605, 0.773],
};

// Issue #49: hybrid_bm25 (dense + BM25 through RRF), top_k=10, rerank off.
export const fused = {
  "bge-small": { recall: 0.795, ndcg: 0.686, map: 0.607, rPrecision: 0.548, hitRate: 0.92, mrr: 0.737 },
  "bge-large": { recall: 0.825, ndcg: 0.714, map: 0.636, rPrecision: 0.572, hitRate: 0.95, mrr: 0.756 },
  "arctic-m-v2": { recall: 0.853, ndcg: 0.76, map: 0.683, rPrecision: 0.618, hitRate: 0.96, mrr: 0.817 },
  "qwen3-0.6b": { recall: 0.82, ndcg: 0.695, map: 0.606, rPrecision: 0.528, hitRate: 0.95, mrr: 0.744 },
};

// Issue #49: paired nDCG difference, hybrid_bm25 minus BM25 alone, same 100
// questions, mean ± 95% half-width.
export const pairedFusion = [
  { encoder: "bge-small", k10: [-0.019, 0.045], k50: [-0.018, 0.043] },
  { encoder: "bge-large", k10: [0.009, 0.044], k50: [0.002, 0.04] },
  { encoder: "arctic-m-v2", k10: [0.055, 0.043], k50: [0.041, 0.036] },
  { encoder: "qwen3-0.6b", k10: [-0.01, 0.045], k50: [-0.011, 0.041] },
];

// Issue #49: best nDCG with no reranker against best with the cross-encoder,
// over the whole ablation grid.
export const bestRerank = [
  { encoder: "bge-small", plain: 0.739, reranked: 0.654 },
  { encoder: "bge-large", plain: 0.741, reranked: 0.693 },
  { encoder: "arctic-m-v2", plain: 0.78, reranked: 0.686 },
  { encoder: "qwen3-0.6b", plain: 0.739, reranked: 0.672 },
];

// Issue #48: judged runs, mode=semantic (BM25 for the last column), top_k=10.
// bge-large's answer relevancy predates pinning the judge's embedder (de0ac35).
export const judged = {
  columns: ["bge-small", "bge-large", "arctic-m-v2", "qwen3-0.6b", "BM25"],
  faithfulness: [0.849, 0.843, 0.865, 0.886, 0.896],
  answerRelevancy: [0.848, 0.821, 0.875, 0.831, 0.866],
  contextRecall: [0.758, 0.787, 0.832, 0.809, 0.841],
  contextPrecision: [0.627, 0.588, 0.661, 0.632, 0.693],
  abstentions: [4, 3, 4, 3, 0],
};

// Commit 363e016: deepseek-v4-flash against 81 human-labelled statements.
export const kappa = {
  all: { n: 81, kappa: 0.828, accuracy: 0.914 },
  contestedDropped: { n: 77, kappa: 0.922, accuracy: 0.961 },
  tp: 35,
  tn: 39,
  fp: 7,
  fn: 0,
};

export const series = {
  title: "Evaluating a RAG system, end to end",
  parts: [
    { slug: "rag-eval-test-set", title: "Building a test set from your own papers" },
    { slug: "rag-eval-retrieval", title: "Scoring retrieval without calling a model" },
    { slug: "rag-eval-judge", title: "Checking the LLM judge before trusting it" },
  ],
};
