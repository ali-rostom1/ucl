'use client'
import { MatchCard } from "@/components/match-card";
import { useStore } from "@/stores/matchstore";
import { Match } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const { matches, favorites, setMatches } = useStore();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const matchesPerPage = 2;
  const totalPages = Math.ceil(matches.length / matchesPerPage);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://api.sofascore.com/api/v1/sport/football/scheduled-events/2025-04-16');
        if (!response.ok) {
          throw new Error('Failed to fetch matches');
        }

        const data = await response.json();
        console.log(data.events);
        var matches = data.events.filter((match : any) => match.season.name == "UEFA Champions League 24/25");
        console.log(matches);

        var matchess: Match[] = [];
        matches.map((match : any) =>{
          
          let date = new Date(match.startTimestamp * 1000).toLocaleDateString("en-EU");
          let tmp = {
            id:match.id,
            homeTeam: match.homeTeam.name,
            awayTeam: match.awayTeam.name,
            homeScore: match.homeScore.current,
            awayScore: match.awayScore.current,
            date: date
          }
          matchess.push(tmp);
        });
        
        setMatches(matchess);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [setMatches]);

  const paginatedMatches = matches.slice(
    (page - 1) * matchesPerPage,
    page * matchesPerPage
  );

  if (loading) {
    return <div className="text-center p-6">Loading matches...</div>;
  }

  if (error) {
    return <div className="text-center p-6 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Champions League 2024/2025 Quarter Finals
      </h1>
      <div className="max-w-4xl mx-auto">
        
        <div className="grid gap-4">
          {paginatedMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Previous
          </button>
          <span className="self-center">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
