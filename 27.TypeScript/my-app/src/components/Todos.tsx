import React, { useContext } from "react";
import TodosItems from "./TodosItems";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodosItems
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeItems.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
