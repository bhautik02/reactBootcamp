import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import Authcontext from "../../store/auth-context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(Authcontext);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    const newPassword = newPasswordInputRef.current.value;
    console.log(newPassword);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDyw_1GfZRIq62K2-nmUzq05u8AycVtEOY",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      history.replace("/");
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
