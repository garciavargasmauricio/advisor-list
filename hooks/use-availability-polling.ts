import { useQuery } from "@tanstack/react-query";
import { getAdvisorAvailability } from "@/services/availability.service";
import { Advisor } from "@/types/advisor";

/**
 * Custom hook to poll and synchronize real-time advisor availability status.
 * Merges updated live communication flags with the initial advisor profile data.
 *
 * @param {Advisor[]} initialData - The baseline array of advisors used for mapping and initial state.
 * @returns {UseQueryResult<Advisor[]>} The query result object containing the real-time updated advisors list.
 */
export function useAvailabilityPolling(initialData: Advisor[]) {
  return useQuery({
    queryKey: ["advisor-availability"],
    initialData,
    queryFn: async () => {
      const availability = await Promise.all(
        initialData.map((advisor) => getAdvisorAvailability(advisor.id)),
      );

      return initialData.map((advisor) => {
        const current = availability.find((item) => item.id === advisor.id);

        return current
          ? {
              ...advisor,
              callAvailable: current.callAvailable,
              chatAvailable: current.chatAvailable,
            }
          : advisor;
      });
    },
    refetchInterval: 30000,
    staleTime: 30000,
  });
}
