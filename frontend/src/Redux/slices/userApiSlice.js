import { apiSlice } from "./apiSlice";
const USER_URL = "/api/users";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    checkAuth: builder.mutation({
      query: () => ({
        url: `${USER_URL}/check`,
        method: "GET",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
    addtoWatchList: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/updateWatchList`,
        method: "PUT",
        body: data,
      }),
    }),
    removefromWatchList: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/removeWatchList`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useCheckAuthMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateProfileMutation,
  useAddtoWatchListMutation,
  useRemovefromWatchListMutation,
} = userApiSlice;
