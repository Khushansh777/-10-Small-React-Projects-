import React from "react";
import { useTheme } from "./ToggleBackgroundContext";

const ToggleBakground = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100px",
        background: theme === "dark" ? "#222" : "#f5f5f5",
        borderRadius: "12px",
        margin: "40px auto",
        maxWidth: "300px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          width: "60px",
          height: "32px",
          borderRadius: "16px",
          border: "none",
          background: theme === "dark" ? "#444" : "#ddd",
          position: "relative",
          cursor: "pointer",
          transition: "background 0.2s",
          outline: "none",
          display: "flex",
          alignItems: "center",
          padding: 0,
        }}
      >
        <span
          style={{
            display: "block",
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: theme === "dark" ? "#fff" : "#222",
            boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
            marginLeft: theme === "dark" ? "30px" : "2px",
            transition: "margin 0.2s",
          }}
        ></span>
      </button>
    </div>
  );
};

export default ToggleBakground;
