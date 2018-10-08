import React from "react";
import UserInput from "../user-input";

class Home extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h1>User Form</h1>
        <UserInput handleSubmit={handleSubmit} />
      </div>
    );
  }
}

export default Home;
