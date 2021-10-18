function Modal(props) {
  let errorMessage = "";

  if (props.error === "name and age") {
    errorMessage = "Please enter a valid name and age";
  }

  if (props.error === "name") {
    errorMessage = "Please enter a valid name";
  }

  if (props.error === "age") {
    errorMessage = "Age must be 0 or more";
  }

  return (
    <div>
      {props.error ? (
        <div className="modal">
          <div className="modal__inner">
            <h1>Invalid Input</h1>
            <p>{errorMessage}</p>
            <button onClick={props.resetErrorMessage}>Okay</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
