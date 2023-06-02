import { createSlice } from "@reduxjs/toolkit";
import { todosApi } from "../../services/todos";

export interface Todo {
  name: string;
  city: string;
}

interface IAuthInitialState {
  todos: Todo[] | null;
}

const initialState: IAuthInitialState = {
  todos: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    cleanTodos: (state: IAuthInitialState) => {
      state.todos = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        todosApi.endpoints.getAllTodos.matchFulfilled,
        (state, { payload }) => {
          state.todos = payload;
        }
      )
      .addMatcher(todosApi.endpoints.getAllTodos.matchRejected, (state) => {
        state.todos = null;
      });
  },
});

export const { cleanTodos } = slice.actions;

export default slice.reducer;
