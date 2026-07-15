import { Separator } from "../separator";
import { Skeleton } from "../skeleton";

/**
 * Loading skeleton fallback for the AdvisorCard component.
 */
export function AdvisorCardSkeleton() {
  return (
    <>
      <div className="flex items-center justify-between py-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-16 w-16 rounded-full" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-28" />
          <Skeleton className="h-10 w-28" />
        </div>
      </div>

      <Separator />
    </>
  );
}
