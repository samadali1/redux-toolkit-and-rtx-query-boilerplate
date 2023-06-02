import React, { useEffect } from "react";
import { useGetAllTodosMutation } from "../../services/todos";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const TodoApp = (): JSX.Element => {
  const [getAllTodos, { isLoading }] = useGetAllTodosMutation();
  const todos = useSelector((state: RootState) => state.todos.todos);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getAllTodos();
  };

  return (
    <div>
      <h1>TODO APP</h1>
      {isLoading && <p>Loading...</p>}
      <ul>
        {todos?.map((item, index): JSX.Element => {
          return (
            <li key={index}>
              {item.name} from {item.city}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoApp;
