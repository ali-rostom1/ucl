interface Player {
    name: string;
    position: string;
}

interface Match {
    id: number;
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
    manOfTheMatch: string;
    homeTeamLineup: Player[];
    awayTeamLineup: Player[];
    date: string;
}

interface AppState {
    matches: Match[];
    favorites: number[];
    toggleFavorite: (matchId: number) => void;
}