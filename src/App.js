import "./App.css";
import AddUser from "./AddUser/AddUser";
import { useState } from "react";
import DisplayUserItem from "./DisplayUsers/DisplayUserItem";
import Modal from "./UI/Modal";

function App() {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState("");

  function addUserFunction(userInput) {
    setUserList(() => {
      return [...userList, userInput];
    });
  }

  function errorMessage(errorMessage) {
    setError(errorMessage);
  }

  function resetErrorMessage() {
    setError("");
  }

  return (
    <div className="App">
      <AddUser
        addUserHandler={addUserFunction}
        handleErrorMessage={errorMessage}
      />
      <ul>
        {userList.map((user) => (
          <DisplayUserItem name={user.name} age={user.age} key={user.id} />
        ))}
      </ul>
      <Modal error={error} resetErrorMessage={resetErrorMessage} />
    </div>
  );
}

export default App;
