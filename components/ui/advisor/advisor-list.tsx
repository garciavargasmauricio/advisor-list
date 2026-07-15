import { Advisor } from "@/types/advisor";
import { AdvisorCard } from "./advisor-card";

interface Props {
  advisors: Advisor[];
}

export function AdvisorList({ advisors }: Props) {
  return (
    <div className="min-w-xl">
      <h1 className="text-center text-primary font-bold text-xl">
        Advisor Availability
      </h1>
      {advisors.map((advisor) => (
        <AdvisorCard key={advisor.id} advisor={advisor} />
      ))}
    </div>
  );
}
