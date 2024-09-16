import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  IGetUserResponse,
  ILoginUserPayload,
  ILoginUserResponse,
} from "../API/types";
import { baseUrl } from "../../utils/constants";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
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
