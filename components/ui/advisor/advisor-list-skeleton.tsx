import { AdvisorCardSkeleton } from "./advisor-card-skeleton";

/**
 * Loading state container that renders a list of advisor card skeletons.
 */
export function AdvisorListSkeleton() {
  return (
    <>
      <div className="min-w-xl">
        {Array.from({ length: 5 }).map((_, index) => (
          <AdvisorCardSkeleton key={index} />
        ))}
      </div>
    </>
  );
}
