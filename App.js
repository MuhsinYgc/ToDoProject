import React, { useState, useRef, useEffect } from "react";
import { useTodoLayerValue } from "./context/toDoContext";
import ToDoList from "./components/ToDoList";
import "./App.css";
const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("");

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!content && content.length < 1) return;

    const newToDo = {
      id: Math.floor(Math.random() * 21321),
      content,
      isComplited: false,
    };

    dispatch({
      type: "ADD_TODO",
      payload: newToDo,
    });
    setContent("");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          className="todo-input"
          onChange={(event) => setContent(event.target.value)}
          value={content}
          ref={ref}
        />
        <button className="todo-button">Ekle</button>
      </form>

      {/* todolistesi */}
      <ToDoList todos={todos} />
    </div>
  );
};
export default App;
