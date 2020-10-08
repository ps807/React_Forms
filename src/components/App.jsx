import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function handleChanged(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setSubmittedName(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {submittedName}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChanged}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
