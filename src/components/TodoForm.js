import React, { useState } from "react";
import shortid from "shortid";

const TodoForm = ({ addTodo }) => {
  /*
Converting to Hooks
  1. Convert from Class to functional component
  2. Remove the render
  3. Import useState - dont need useEffect since that used for only fetching data or listening for changes
  4. change initial state with useState
  5. Change functions into consts
  6. Remove the 'this' and 'state' where is being called
  7. Replace setState with setText
*/

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    // Prevent the page from reloading
    event.preventDefault();
    addTodo({
      id: shortid.generate(),
      text: text,
      compete: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="text"
        value={text}
        onChange={handleChange}
        placeholder="todo..."
      />
      <button onSubmit={handleSubmit}>Add Todo</button>
    </form>
  );
};

export default TodoForm;