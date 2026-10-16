import { ModelResponseDto } from "@/lib/api";
import { create } from "zustand";

interface ModelStore {
  models: ModelResponseDto[];
  setModels: (models: ModelResponseDto[]) => void;
  activeModel: ModelResponseDto | null;
  setActiveModel: (model: ModelResponseDto) => void;
}

export const useModelStore = create<ModelStore>()((set) => ({
  models: [],
  setModels: (models) => set({ models }),
  activeModel: null,
  setActiveModel: (model) => {
    set({ activeModel: model });
    localStorage.setItem("selectedModel", JSON.stringify(model));
  },
}));
