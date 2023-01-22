import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";

const cookies = new Cookies();
// define the single slice
export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/uhandle/",
    
    // with credentials (session ID cookie)
    prepareHeaders(headers) {
      headers.set("Content-Type","application/json");
      headers.set("X-CSRFToken", cookies.get("csrftoken"))
      return headers;
    },
    credentials: "include",
  }),
  // endpoints
  endpoints: (builder) => ({
    // check user authorization
    checkUser: builder.mutation({
      query: (body) => ({
        url: "/login/",
        method: "POST",
        body: body,
      }),
    }),
    logOut: builder.mutation({
      query: () => ({
        url: "/logout/",
      }),
    }),
    whoAmI: builder.mutation({
      query: () => ({
        url: "/whoami/",
      }),
    }),
  }),
});

// Export the auto-generated hooks
// Pattern is: "use" + endPointName + "Query"/"Mutation"
export const {
  useCheckUserMutation,
  useLogOutMutation,
  useWhoAmIMutation,
} = userApi;