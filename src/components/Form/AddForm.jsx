import React from "react";
import useInput from "../../hooks/useInput";
import Modal from "../ui/Modal";
import { Button } from "react-bootstrap";
import "./AddForm.css";

const isNotEmpty = (value) => value.trim() !== "";
const emailIsNotEmpty = (value) => value.trim() !== "";

const AddForm = (props) => {
  const {
    value: enteredTitle,
    isValid: titleIsValid,
    hasError: titleInputHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resettitleInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemailInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredComment,
    isValid: commentIsValid,
    hasError: commentInputHasError,
    valueChangeHandler: commentChangeHandler,
    inputBlurHandler: commentBlurHandler,
    reset: resetcommentInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (titleIsValid && emailIsValid && commentIsValid) {
    formIsValid = true;
  }

  const titleStyle = titleInputHasError ? "formControlInvalid" : "formControl";
  const emailStyle = emailInputHasError ? "formControlInvalid" : "formControl";
  const commentStyle = commentInputHasError
    ? "formControlInvalid"
    : "formControl";

  const submitComment = async (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    //comment data
    let comment = {
      title: enteredTitle,
      email: enteredEmail,
      comment: enteredComment,
    };
  };
  return (
    <Modal>
      <div className="add_comment_container">
        <div className="x">
          <span onClick={props.onClose}>X</span>
        </div>
        <div className={titleStyle}>
          <label htmlFor="">Title</label>
          <input
            value={enteredTitle}
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
            type="text"
          />
          {titleInputHasError && <p className="error">Please enter a title.</p>}
        </div>
        <div className={emailStyle}>
          <label htmlFor="">Email</label>
          <input
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            type="text"
          />
          {emailInputHasError && (
            <p className="error">Please enter a valid email.</p>
          )}
        </div>
        <div className={commentStyle}>
          <label htmlFor="">Comment</label>
          <textarea
            type="text"
            value={enteredComment}
            onChange={commentChangeHandler}
            onBlur={commentBlurHandler}
          />
          {commentInputHasError && (
            <p className="error">Please enter a comment.</p>
          )}
        </div>

        <Button style={{ width: "10rem" }} className="m-4 btn-default">
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default AddForm;
