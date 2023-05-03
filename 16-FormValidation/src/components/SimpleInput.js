import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const enterednameIsInvalid = enteredName.trim().length === 0;
  const nameInputIsInvalid = enterednameIsInvalid && enteredNameIsTouched;

  let formIsValid = false;
  if (!enterednameIsInvalid) {
    formIsValid = true;
  }

  const inputHanlder = (event) => {
    setEnteredName(event.target.value);
  };

  const inputNameBlurHandler = (event) => {
    setEnteredNameIsTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);

    if (enterednameIsInvalid) {
      return;
    }

    console.log(enteredName);
    setEnteredNameIsTouched(false);
    setEnteredName("");
  };

  const inputNameClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputHanlder}
          onBlur={inputNameBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">enteredName must not be empty...</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
