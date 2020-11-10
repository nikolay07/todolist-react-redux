import React from "react";
import TodoList from "./tasks/components/TodoList";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
