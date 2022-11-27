import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import GlobalLayout from "./Layouts/GlobalLayout";
import HomePage from "./Pages/HomePage";
import { useEffect } from "react";
import { useState } from "react";
import ToDoFormPage from "./Pages/ToDoFormPage";

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

//////////////////////////////////////////////
/////////////////////////////////////////////

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [shouldRefetch, setShouldRefetch] = useState(false);

  ////////////

  useEffect(() => {
    const fetchToDos = async () => {
      const result = await fetch(`${urlEndpoint}/todos/all`);
      const fetchedToDos = await result.json();
      setToDoList(fetchedToDos.toDos);
    };
    fetchToDos();
  }, [shouldRefetch]);

  ////////////

  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayout />,
      children: [
        {
          index: true,
          element: (
            <HomePage
              toDoList={toDoList}
              urlEndpoint={urlEndpoint}
              setShouldRefetch={setShouldRefetch}
            />
          ),
        },
        {
          path: "/todo-form",
          element: (
            <ToDoFormPage
              urlEndpoint={urlEndpoint}
              setShouldRefetch={setShouldRefetch}
            />
          ),
        },
      ],
    },
  ]);

  ////////////

  return (
    <div className="App">
      <RouterProvider router={router} toDoList={toDoList} />
    </div>
  );
}

///////////////////////////////////////////////
///////////////////////////////////////////////

export default App;
