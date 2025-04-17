import { Match } from "@/types";
import Link from "next/link";

export const MatchDetails: React.FC<{ match: Match }> = ({ match }) => {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          {match.homeTeam} {match.homeScore} - {match.awayScore} {match.awayTeam}
        </h1>
        <p className="text-gray-600 mb-2">Date: {match.date}</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">{match.homeTeam}</h3>
          </div>
          <div>
            <h3 className="font-semibold">{match.awayTeam}</h3>
          </div>
        </div>
        <Link href="/">
          <span className="text-blue-500 hover:underline mt-4 inline-block">Back to Matches</span>
        </Link>
      </div>
    );
  };