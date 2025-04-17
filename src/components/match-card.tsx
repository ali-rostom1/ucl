import { useStore } from "@/stores/matchstore";
import { Match } from "@/types";
import Link from "next/link";

export const MatchCard: React.FC<{ match: Match }> = ({ match }) => {
    const { favorites, toggleFavorite } = useStore();
    const isFavorite = favorites.includes(match.id);
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-700">
            {match.homeTeam} {match.homeScore} - {match.awayScore} {match.awayTeam}
          </h2>
          <button
            onClick={() => toggleFavorite(match.id)}
            className={`text-2xl ${isFavorite ? 'text-yellow-400' : 'text-gray-400'}`}
          >
            ★
          </button>
        </div>
        <p className="text-gray-600">Date: {match.date}</p>
        <Link href={`/match/${match.id}`}>
          <span className="text-blue-500 hover:underline">View Details</span>
        </Link>
      </div>
    );
  };