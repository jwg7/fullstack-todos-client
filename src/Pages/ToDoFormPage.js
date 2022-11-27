import { useState } from "react";

const ToDoFormPage = (props) => {
  const { urlEndpoint } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const handleCreateToDo = async () => {
    const response = await fetch(`${urlEndpoint}/todos/create-one`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        priority,
      }),
    });
  };

  return (
    <div>
      <h1>Create ToDo Form</h1>

      <label>Title: </label>
      <input
        type="text"
        value={"title"}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      ></input>

      <label>Description: </label>
      <textarea
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      ></textarea>

      <label>Priority: </label>
      <select
        onChange={(event) => {
          setPriority(event.target.value);
        }}
      >
        <option></option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button onClick={()=>{
        handleCreateToDo()
      }}>Create ToDo</button>
    </div>
  );
};

export default ToDoFormPage;
