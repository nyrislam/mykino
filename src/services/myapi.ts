import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fastapi = createApi({
  reducerPath: "fastapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/",
    method: "GET",
    headers: {
      accept: "application/json",
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
  }),
});

export const { useHelloQuery, useLoginMutation, useAuthoMutation } = fastapi;
