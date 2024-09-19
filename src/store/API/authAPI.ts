import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  IGetUserResponse,
  ILoginUserPayload,
  ILoginUserResponse,
} from "../API/types";


export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://161.35.153.209:5430/api" }),
  endpoints: (builder) => ({
    getUser: builder.query<IGetUserResponse, string>({
      query: (user_id) => `/user?user_id=${user_id}`,
    }),
    loginUser: builder.mutation<ILoginUserResponse, ILoginUserPayload>({
      query: (loginData) => ({
        url: "/login",
        method: "POST",
        body: loginData,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useLoginUserMutation,
} = authApi;
