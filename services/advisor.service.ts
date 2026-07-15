import { Advisor } from "@/types/advisor";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getAdvisors(): Promise<Advisor[]> {
  const url = API_URL ? `${API_URL}/advisor-listings` : "/mocks/advisors.json";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch advisors");
  }

  return response.json();
}
