export interface dataQuery {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  countries: { country: string }[];
  genres: { country: string }[];
  ratingKinopoisk: number;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface Response {
  data: { items: dataQuery[] };
}
export interface builderQuery {
  page: number;
  type: string;
  id?: number;
  keyword: string;
  countries: number;
  genreId: number;
  order: number;
  year: number;
}
