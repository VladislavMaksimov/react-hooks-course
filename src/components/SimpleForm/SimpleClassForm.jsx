import React from "react";
import { SimpleFormField } from "./SimpleFormField/SimpleFormField";


const DEFAULT_AGE = 21;

const initialState = {
  name: "",
  surname: "",
  age: DEFAULT_AGE,
};

class SimpleClassForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  clear = () => {
    this.setState(initialState);
  };

  setAge = (newAge) => {
    const age = newAge ? parseInt(newAge) : null;
    this.setState({ age });
  };

  render() {
    return (
      <>
        <form>
          <SimpleFormField
            label="Name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={(name) => this.setState({ name })}
          />
          <SimpleFormField
            label="Surname"
            name="surname"
            type="text"
            value={this.state.surname}
            onChange={(surname) => this.setState({ surname })}
          />
          <SimpleFormField
            label="Age"
            name="age"
            type="number"
            value={this.state.age !== null ? this.state.age : ""}
            onChange={(newAge) => this.setAge(newAge)}
          />
        </form>
        <ul>
          <li>
            <h1>Name:</h1> {this.state.name}
          </li>
          <li>
            <h1>Surname:</h1> {this.state.surname}
          </li>
          <li>
            <h1>Age:</h1> {this.state.age}
          </li>
        </ul>
        <button onClick={this.clear}>Clear</button>
      </>
    );
  }
}

export default SimpleClassForm;
