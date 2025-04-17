import { create } from "zustand";
import {Match} from "@/types"
import { AppState } from "@/types";

export const useStore = create<AppState>((set) => ({
    matches: [],
    favorites: [],
    setMatches: (matches: Match[]) => set({ matches }),
    toggleFavorite: (matchId) =>
      set((state) => ({
        favorites: state.favorites.includes(matchId)
          ? state.favorites.filter((id) => id !== matchId)
          : [...state.favorites, matchId],
      })),
  }));