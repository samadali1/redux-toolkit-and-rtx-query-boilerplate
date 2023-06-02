import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Todo } from "../store/slices/todos";

export const todosApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mocki.io/v1",
  }),

  endpoints: (builder) => ({
    getAllTodos: builder.mutation<Todo[], void>({
      query: () => "d4867d8b-b5d5-4a48-a4ab-79131b5809b8",
    }),
  }),
});

export const { useGetAllTodosMutation } = todosApi;
