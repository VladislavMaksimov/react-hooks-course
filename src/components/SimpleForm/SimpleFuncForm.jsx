import React from "react";
import { useState } from "react/cjs/react.development";
import { Fragment } from "react/cjs/react.production.min";
import { SimpleFormField } from "./SimpleFormField/SimpleFormField";

const DEFAULT_AGE = 21;

export const SimpleFuncForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(DEFAULT_AGE);

  const clear = () => {
    setName("");
    setSurname("");
    setAge(DEFAULT_AGE);
  };

  return (
    <Fragment>
      <form>
        <SimpleFormField
          label="Name"
          name="name"
          type="text"
          value={name}
          onChange={(newName) => setName(newName)}
        />
        <SimpleFormField
          label="Surname"
          name="surname"
          type="text"
          value={surname}
          onChange={(newSurname) => setSurname(newSurname)}
        />
        <SimpleFormField
          label="Age"
          name="age"
          type="number"
          value={age !== null ? age : ""}
          onChange={(newAge) => setAge(newAge ? parseInt(newAge) : null)}
        />
      </form>
      <ul>
        <li>
          <h1>Name:</h1> {name}
        </li>
        <li>
          <h1>Surname:</h1> {surname}
        </li>
        <li>
          <h1>Age:</h1> {age}
        </li>
      </ul>
      <button onClick={clear}>Clear</button>
    </Fragment>
  );
};
