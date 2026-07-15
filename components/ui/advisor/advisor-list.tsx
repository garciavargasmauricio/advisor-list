"use client";

import { Advisor } from "@/types/advisor";
import { AdvisorCard } from "./advisor-card";
import { useAvailabilityPolling } from "@/hooks/use-availability-polling";

interface Props {
  advisors: Advisor[];
}

/**
 * List component that displays advisors and manages real-time availability updates via polling.
 *
 * @param {Props} props - The component properties.
 * @param {Advisor[]} props.advisors - The initial list of advisors to display and track.
 */
export function AdvisorList({ advisors }: Props) {
  const { data } = useAvailabilityPolling(advisors);
  return (
    <article aria-labelledby="advisor-list-title" className="min-w-xl">
      <h1
        id="advisor-list-title"
        className="text-center text-primary font-bold text-xl"
      >
        Advisor Availability
      </h1>
      {data.map((advisor) => (
        <AdvisorCard key={advisor.id} advisor={advisor} />
      ))}
    </article>
  );
}
