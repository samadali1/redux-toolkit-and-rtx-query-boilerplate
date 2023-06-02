import todos from "./slices/todos";
import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "../services/todos";

export interface RootState {
  todos: ReturnType<typeof todos>;
}

const store = configureStore({
  reducer: {
    todos,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

export default store;
