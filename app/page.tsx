"use client";

import { AdvisorList } from "@/components/ui/advisor/advisor-list";
import { useAdvisors } from "@/hooks/use-advisors";

export default function HomePage() {
  const { data, isLoading, error } = useAdvisors();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error loading advisors.</p>;

  return (
    <main className="mx-auto max-w-5xl p-8">
      <AdvisorList advisors={data ?? []} />
    </main>
  );
}
