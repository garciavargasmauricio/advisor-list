import { AdvisorList } from "@/components/ui/advisor/advisor-list";
import { getAdvisors } from "@/services/advisor.service";

export default async function HomePage() {
  const advisor = await getAdvisors();

  return (
    <main className="mx-auto max-w-5xl p-8">
      <AdvisorList advisors={advisor ?? []} />
    </main>
  );
}
