import React, { useState, Fragment } from "react";

export const Clicker = () => {
  const [clicks, setClicks] = useState(0);
  const [showClicks, setShowClicks] = useState(true);

  const onClick = () => {
    setClicks((prevClicks) => prevClicks + 1);
  };

  const toggleShowClicks = () => {
    setShowClicks((prev) => !prev);
  };

  return (
    <Fragment>
      <button onClick={onClick}>Click me senpai!</button>

      <button onClick={toggleShowClicks}>
        {showClicks ? "Hide" : "Show"} my clickies!
      </button>

      {showClicks && (
        <h1>
          I was clicked <span style={{ color: "#f00" }}>{clicks} </span> times!
          UwU
        </h1>
      )}
    </Fragment>
  );
};
