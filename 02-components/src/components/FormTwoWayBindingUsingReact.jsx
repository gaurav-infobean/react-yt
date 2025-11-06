import React, { useState } from "react";

const FormTwoWayBindingUsingReact = () => {
  const [title, setTitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted by", title);
    setTitle("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default FormTwoWayBindingUsingReact;
