import React, { useState } from "react";
import "./App.css";

const INITIAL_STATE = [
  { id: 1, title: "", completed: false },
  { id: 2, title: "", completed: false },
];

function App() {
  const [list, setList] = useState(INITIAL_STATE);
  const [newTitle, setNewTitle] = useState("");

    const addNew = (title) => {
      if (title === "") {
        alert("Array is empty, write something");
      } else {
        setList([
          ...list,
          { id: Date.now(), title: title, completed: false },
        ]);
        setNewTitle("");
      }
    };

  const markCompleted = (id) => {
    setList(
      list.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
  };

  const clearCompleted = () => {
    setList(list.filter((item) => !item.completed));
  };

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>To Do List</h1>
      <div className="add_form">
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          type="text"
          placeholder="Add a Todo"
        />
        <button onClick={() => addNew(newTitle)}>Add</button>
      </div>
      <div className="list">
        {list.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              markCompleted(item.id);
            }}
            className={item.completed ? "complete" : ""}
          >
            {item.title}
          </div>
        ))}
      </div>
      <button onClick={() => clearCompleted()} className="clear">
        Clear Completed
      </button>
    </div>
  );
}

export default App;
