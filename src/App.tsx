import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import TodoApp from "./views/todo-app";

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
