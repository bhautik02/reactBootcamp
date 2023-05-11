import React, { useState } from "react";
import Todo from "../models/Todo";
type contextTypeObj = {
  items: Todo[];
  addItems: (text: string) => void;
  removeItems: (id: string) => void;
};

export const TodosContext = React.createContext<contextTypeObj>({
  items: [],
  addItems: () => {},
  removeItems: (id: string) => {},
});

const TodosContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== id);
    });
  };

  const contextvalue: contextTypeObj = {
    items: todos,
    addItems: addNewTodoHandler,
    removeItems: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextvalue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
