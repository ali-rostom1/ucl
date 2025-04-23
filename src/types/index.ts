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
    setMatches: (matches: Match[]) => void;
  }
  