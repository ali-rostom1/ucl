"use client";

import { useParams } from "next/navigation";
import { useStore } from "@/stores/matchstore";
import { MatchDetails } from "@/components/match-details";

export default function MatchDetailPage() {
  const params = useParams();
  const { matches } = useStore();
  const match = matches.find((m) => m.id == Number(params.slug));

  if (!match) return <div className="text-center p-6">Match not found</div>;

  return <MatchDetails match={match} />;
}