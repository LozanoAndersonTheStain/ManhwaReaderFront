import { Genre, Manhwa, ManhwaListResponse, Status } from "~/types/manhwa";

const API_URL = process.env.API_URL || "http://localhost:5193";

export async function getAllManhwas(
  page: number = 1,
  pageSize: number = 10,
  searchTerm?: string,
  genre?: Genre,
  status?: Status
): Promise<ManhwaListResponse> {
  const params = new URLSearchParams({
    page: page.toString(),
    pageSize: pageSize.toString(),
    ...(searchTerm && { searchTerm }),
    ...(genre && { genre }),
    ...(status && { status }),
  });

  const response = await fetch(`${API_URL}/api/manhwas?${params}`);
  if (!response.ok) {
    throw new Error("Failed to fetch manhwas");
  }
  return response.json();
}

export async function getManhwaById(id: string): Promise<Manhwa> {
  const response = await fetch(`${API_URL}/api/manhwas/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch manhwa");
  }
  return response.json();
}

export async function getTopRatedManhwas(
  limit: number = 10
): Promise<Manhwa[]> {
  const response = await fetch(
    `${API_URL}/api/manhwas/top-rated?limit=${limit}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch top rated manhwas");
  }
  return response.json();
}

export async function getRecentlyUpdatedManhwas(
  limit: number = 10
): Promise<Manhwa[]> {
  const response = await fetch(
    `${API_URL}/api/manhwas/recently-updated?limit=${limit}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch recently updated manhwas");
  }
  return response.json();
}
