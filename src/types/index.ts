export interface Player {
    name: string;
    position: string;
}

export interface Match {
    id: number;
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
    date: string;
}

export interface AppState {
    matches: Match[];
    favorites: number[];
    setMatches: (matches: Match[]) => void;
    toggleFavorite: (matchId: number) => void;
  }
  