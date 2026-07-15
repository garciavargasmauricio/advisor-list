const API_URL = process.env.NEXT_PUBLIC_AVAILABILITY_API;

/**
 * Fetches the real-time availability status for a specific advisor by their ID.
 *
 * @param {number} id - The unique identifier of the advisor.
 * @returns {Promise<any>} A promise resolving to the advisor's live status object.
 * @throws {Error} If the network request fails or returns a non-200 status.
 */

export async function getAdvisorAvailability(id: number) {
  const response = await fetch(`${API_URL}/id=${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch availability");
  }

  return response.json();
}
