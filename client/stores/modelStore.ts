import { ModelResponseDto } from "@/lib/api";
import { createStore } from "zustand";

interface ModelStore {
  models: ModelResponseDto[];
  setModels: (models: ModelResponseDto[]) => void;
  activeModel: ModelResponseDto | null;
  setActiveModel: (model: ModelResponseDto) => void;
}

export const useModelStore = createStore<ModelStore>()((set) => ({
  models: [],
  setModels: (models) => set({ models }),
  activeModel: null,
  setActiveModel: (model) => set({ activeModel: model }),
}));
