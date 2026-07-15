import { AdvisorListSkeleton } from "@/components/ui/advisor/advisor-list-skeleton";

export default function Loading() {
  return (
    <main className="container mx-auto py-8">
      <AdvisorListSkeleton />
    </main>
  );
}
