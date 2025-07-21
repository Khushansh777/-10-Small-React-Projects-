import React, { useState } from "react";

const FormValidation = () => {
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState(false);

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(name, email, password);
  };
  const validate = (name, email, password) => {
    setErrorEmail(false);
    setErrorName(false);
    setErrorPassword(false);
    if (name.length < 3) {
      setErrorName(true);
  
      // return  name
    }

    if (!email.includes("@") || email.length < 9) {
      setErrorEmail(true);
    
      // return email
    }
    if (password.length < 8) {
      setErrorPassword(true);
     
      // return password
    }
  };
  return (
    <div
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        padding: "2rem",
        border: "1px solid #eee",
        borderRadius: 8,
        background: "#fafafa",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Form Validation
      </h2>
      <form>
        <div style={{ marginBottom: "1rem" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            style={{ width: "100%", padding: "0.5rem", marginTop: 4 }}
            value={name}
            onChange={(e) => {setName(e.target.value)} }
          />
          <p
            style={{
              color: "red",
              display: errorName === true ? "block" : "none",
            }}
          >
            It must be at least 3 lettors
          </p>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            style={{ width: "100%", padding: "0.5rem", marginTop: 4 }}
            value={email}
            onChange={(e) => {setEmail(e.target.value)} }
          />
          <p
            style={{
              color: "red",
              display: errorEmail === true ? "block" : "none",
            }}
          >
            Type Valid Email
          </p>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            style={{ width: "100%", padding: "0.5rem", marginTop: 4 }}
            value={password}
            onChange={ (e)=> {setPassword(e.target.value)} }
          />
          <p
            style={{
              color: "red",
              display: errorPassword === true ? "block" : "none",
            }}
          >
            It must have 8 letters
          </p>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            fontWeight: "bold",
          }}
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
