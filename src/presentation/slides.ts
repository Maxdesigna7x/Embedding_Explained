import type { ComponentType } from "react";
import { Slide00Question } from "../slides/Slide00Question";
import { Slide01Title } from "../slides/Slide01Title";
import { Slide02TraditionalProblem } from "../slides/Slide02TraditionalProblem";
import { Slide03FewExamplesProblem } from "../slides/Slide03FewExamplesProblem";
import { Slide04WhatIsEmbedding } from "../slides/Slide04WhatIsEmbedding";
import { Slide05TrainingEmbeddings } from "../slides/Slide05TrainingEmbeddings";
import { Slide05EmbeddingSpace } from "../slides/Slide05EmbeddingSpace";
import { Slide06DistanceAndClusters } from "../slides/Slide06DistanceAndClusters";
import { Slide08UsesOfEmbeddings } from "../slides/Slide08UsesOfEmbeddings";
import { Slide09MLPSoftmax } from "../slides/Slide09MLPSoftmax";
import { Slide10SimilarityClassification } from "../slides/Slide10SimilarityClassification";
import { Slide11OneShotFewShot } from "../slides/Slide11OneShotFewShot";
import { Slide12MLPvsSimilarity } from "../slides/Slide12MLPvsSimilarity";
import { Slide13WhenToUseEach } from "../slides/Slide13WhenToUseEach";

export type SlideDefinition = {
  id: string;
  Component: ComponentType;
  scale?: number;
  innerScale?: number;
};

export const slides: SlideDefinition[] = [
  { id: "question", Component: Slide00Question, scale: 1.35 },
  { id: "title", Component: Slide01Title, scale: 1.3 },
  { id: "traditional-problem", Component: Slide02TraditionalProblem, scale: 1.3 },
  { id: "few-examples", Component: Slide03FewExamplesProblem, scale: 1.35 },
  { id: "embedding", Component: Slide04WhatIsEmbedding, scale: 1.35 },
  { id: "training-embeddings", Component: Slide05TrainingEmbeddings, scale: 1.15 },
  { id: "embedding-space", Component: Slide05EmbeddingSpace, scale: 1.35 },
  { id: "distance", Component: Slide06DistanceAndClusters, scale: 1, innerScale: 1.25 },
  { id: "uses", Component: Slide08UsesOfEmbeddings, scale: 1.35 },
  { id: "mlp", Component: Slide09MLPSoftmax, scale: 1, innerScale: 1.25 },
  { id: "similarity", Component: Slide10SimilarityClassification, scale: 1, innerScale: 1.25 },
  { id: "one-shot", Component: Slide11OneShotFewShot, scale: 1.35 },
  { id: "comparison", Component: Slide12MLPvsSimilarity, scale: 1.35 },
  { id: "when", Component: Slide13WhenToUseEach, scale: 1 },
];
