import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Response, builderQuery } from "./types";

export const kinopoiskapi = createApi({
  reducerPath: "kinopoiskapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/api/",
    method: "GET",
    headers: {
      "X-API-KEY": "",
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    getMoviesTop: builder.query<Response, builderQuery>({
      query: ({ page, type }) =>
        `/v2.2/films/collections?type=${type}&page=${page}`,
    }),
    getMovies: builder.query<Response, builderQuery>({
      query: ({ countries, genreId, order, year, page, type, keyword }) =>
        `/v2.2/films?countries=${countries}&genres=${genreId}&order=${order}&type=${type}&ratingFrom=0&ratingTo=10&yearFrom=${year}&yearTo=${year}&page=${page}&keyword=${keyword}`,
    }),
    getNews: builder.query<Response, builderQuery>({
      query: ({ page }) => `/v1/media_posts?page=${page}`,
    }),
    getStaffMovies: builder.query<Response, builderQuery>({
      query: ({ id }) => `/v2.2/films/${id}`,
    }),
    getSequelsPrequelsMovies: builder.query<Response, builderQuery>({
      query: ({ id }) => `/v2.1/films/${id}/sequels_and_prequels`,
    }),
  }),
});

export const {
  useGetMoviesTopQuery,
  useGetMoviesQuery,
  useGetNewsQuery,
  useGetStaffMoviesQuery,
  useGetSequelsPrequelsMoviesQuery,
} = kinopoiskapi;
