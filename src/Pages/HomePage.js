import ToDoCard from "../Components/ToDoCard";
import React from "react";

const HomePage = (props) => {
  const { toDoList } = props;
  const { urlEndpoint } = props;
  const { setShouldRefetch } = props;
  return (
    <div>
      <h1>Fullstack ToDo Application</h1>
      {toDoList.map((toDo, index) => {
        return ( 
        <ToDoCard toDo={toDo} key={index} urlEndpoint={urlEndpoint} setShouldRefetch={setShouldRefetch}/> 
        );
      })}
    </div>
  );
};

export default HomePage;
