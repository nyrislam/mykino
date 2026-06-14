import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fastapi = createApi({
  reducerPath: "fastapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    Hello: builder.query<any, void>({
      query: () => `/`,
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    autho: builder.mutation({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),
    }),
    getMovies: builder.query<any, void>({
      query: () => "/movies",
    }),
    createMovie: builder.mutation({
      query: (body) => ({ url: "/movies", method: "POST", body }),
    }),

    addWishlist: builder.mutation({
      query: (movie_id) => ({
        url: "/wishlists",
        method: "POST",
        body: {
          movie_id,
          dir: 1,
        },
      }),
    }),
    removeWishlist: builder.mutation({
      query: (movie_id) => ({
        url: "/wishlists",
        method: "POST",
        body: {
          movie_id,
          dir: 0,
        },
      }),
    }),
    getWishlist: builder.query({
      query: () => "/wishlists",
    }),
  }),
});

export const {
  useHelloQuery,
  useLoginMutation,
  useAuthoMutation,
  useGetMoviesQuery,
  useCreateMovieMutation,
  useAddWishlistMutation,
  useRemoveWishlistMutation,
  useGetWishlistQuery,
} = fastapi;
