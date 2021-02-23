import React from "react";
import "../stylesheets/form.scss";
const Input = (props) => {
  const handleChange = (ev) => {
    props.handleChange(ev.target.value);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="name">
        <input
          value={props.inputValue}
          onChange={handleChange}
          className="form--input"
          type="text"
          name="name"
          id="name"
          placeholder="Search Your Character"
        ></input>
      </label>
    </form>
  );
};
export default Input;
