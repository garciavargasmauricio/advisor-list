import { getAdvisors } from "@/services/advisor.service";
import { useQuery } from "@tanstack/react-query";

export function useAdvisors() {
  return useQuery({
    queryKey: ["advisors"],
    queryFn: getAdvisors,
  });
}
