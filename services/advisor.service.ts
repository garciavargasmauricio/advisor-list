import { Advisor } from "@/types/advisor";

const API_URL = process.env.NEXT_PUBLIC_ADVISOR_API;

/**
 * Fetches the list of advisors from the live API endpoint or falls back to a local mock file.
 *
 * @returns {Promise<Advisor[]>} A promise that resolves to the array of advisor listings.
 * @throws {Error} If the server response is not successful.
 */

export async function getAdvisors(): Promise<Advisor[]> {
  const url = API_URL ? `${API_URL}/advisor-listings` : "/mocks/advisors.json";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch advisors");
  }

  return response.json();
}
