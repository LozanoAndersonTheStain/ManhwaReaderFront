export enum Genre {
  Action = "action",
  Adventure = "adventure",
  Comedy = "comedy",
  Drama = "drama",
  Fantasy = "fantasy",
  Horror = "horror",
  Mystery = "mystery",
  Romance = "romance",
  SciFi = "scifi",
  SliceOfLife = "sliceoflife",
  Sports = "sports",
  Supernatural = "supernatural",
  Psychological = "psychological",
  MartialArts = "martialarts",
}

export enum Status {
  Ongoing = "ongoing",
  Completed = "completed",
  Hiatus = "hiatus",
  Cancelled = "cancelled",
}

export interface Manhwa {
  id: string;
  title: string;
  description: string;
  author: string;
  coverUrl: string;
  genre: Genre;
  status: Status;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

export interface ManhwaListResponse {
  manhwas: Manhwa[];
  totalCount: number;
  page: number;
  pageSize: number;
}
