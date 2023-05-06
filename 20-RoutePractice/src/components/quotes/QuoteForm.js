import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./../UI/Card";
import classes from "./QuoteForm.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteForm = (props) => {
  // const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const navigate = useNavigate();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    console.log(enteredAuthor);
    console.log(enteredText);

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
    navigate("/quotes");
  }

  const formFocusHandler = () => {
    // console.log("Focus!");
    // setIsEntering(true);
  };

  return (
    <>
      {/* <Prompt
        when={isEntering}
        message={() =>
          "Are you sure u want to leave? All your data will be lost!!!"
        }
      /> */}
      <Card>
        <form
          onFocus={formFocusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn" type="submit">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
