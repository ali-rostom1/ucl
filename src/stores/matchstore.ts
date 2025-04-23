import { create } from "zustand";
import {Match} from "@/types"
import { AppState } from "@/types";

export const useStore = create<AppState>((set) => ({
    matches: [],
    setMatches: (matches: Match[]) => set({ matches }),
  }));