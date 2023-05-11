import { FormEvent, useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredTodoText = todoInputRef.current!.value;
    if (enteredTodoText.trim().length === 0) {
      return;
    }

    todosCtx.addItems(enteredTodoText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="newTodo">Todo</label>
      <input type="text" id="newTodo" ref={todoInputRef}></input>
      <button>Add a new Todo</button>
    </form>
  );
};

export default NewTodo;
