import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState(() => {
    const savedTodo = localStorage.getItem("todo");
    return savedTodo ? JSON.parse(savedTodo) : [];
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const [inputVal, setInputVal] = useState("");
  const handleInput = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = () => {
    setTodo((prev) => [
      ...prev,
      {
        name: inputVal,
        id: Math.random() * 10,
      },
    ]);
    setInputVal("");
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((e) => e.id !== id));
  };
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "24px",
        background: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
        Todo
      </h2>
      <div style={{ display: "flex", gap: "8px", marginBottom: "18px" }}>
        <input
          type="text"
          placeholder="Type todo"
          value={inputVal}
          onChange={handleInput}
          style={{
            flex: 1,
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "16px",
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            padding: "8px 16px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background 0.2s",
          }}
        >
          Submit
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {todo.map((elem) => {
          return (
            <li
              key={elem.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid #eee",
                fontSize: "16px",
                color: "#444",
              }}
            >
              <span>{elem.name}</span>{" "}
              <button
                onClick={() => handleDelete(elem.id)}
                style={{
                  background: "#ff4d4f",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  padding: "4px 10px",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "background 0.2s",
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
