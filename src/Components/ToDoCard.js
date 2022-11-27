import React from "react";

const ToDoCard = (props) => {
  const { toDo, urlEndpoint, setShouldRefetch } = props;

const handleSetToDoComplete = async () => {
  setShouldRefetch(true)
const response = await fetch(`${urlEndpoint}/todos/update-one/${toDo.id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    isComplete: !toDo.isComplete
  })
})
setShouldRefetch(false)
}

const handleDeleteToDo = async () => {
  setShouldRefetch(true)
  const response = await fetch(`${urlEndpoint}/todos/delete-one/${toDo.id}`, {
    method: "DELETE"
  })
  setShouldRefetch(false)
}

  return (
    <div>
      <h2>${toDo.title}</h2>
      <p>ID: ${toDo.id}</p>
      <p>Description: ${toDo.description}</p>
      <p>Priority: ${toDo.priority}</p>
      if (toDo.isComplete) {<p>Is Complete: Yes</p>} else{" "}
      {<p>Is Complete: No</p>}
      <p>Creation Date: ${toDo.creationDate.toString()}</p>
      <p>Last Modified ${toDo.lastModified.toString()}</p>
      if (toDO.completeDated !== null) {<p>Completed Date: ${toDo.completedDate}</p>}
<button onClick={()=> {
handleSetToDoComplete()
}}>Toggle Complete</button>
<button onClick={()=>{
  handleDeleteToDo();
}}>Delete ToDo</button>
    </div>
  );
};

export default ToDoCard;
