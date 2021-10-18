import { useState } from "react";

function AddUser(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState(+"");

  function handleEnteredName(event) {
    setEnteredName(event.target.value);
  }

  function handleEnteredAge(event) {
    setEnteredAge(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    if (enteredName.trim().length === 0 && enteredAge < 0) {
      return props.handleErrorMessage("name and age");
    } else if (enteredName.trim().length === 0) {
      return props.handleErrorMessage("name");
    } else if (enteredAge < 0) {
      return props.handleErrorMessage("age");
    }

    const object = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    props.addUserHandler(object);
    setEnteredAge("");
    setEnteredName("");
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Name </label>
      <input
        name="name"
        value={enteredName}
        onChange={handleEnteredName}
        type="text"
      />
      <br />
      <label htmlFor="age">Age </label>
      <input
        name="age"
        value={enteredAge}
        onChange={handleEnteredAge}
        type="number"
      />
      <br />
      <button>Add User</button>
    </form>
  );
}

export default AddUser;
