import React from "react";
import { Redirect } from "react-router";
import { Form } from "./styled-user-input";

class UserInput extends React.Component {
  state = {
    toResults: false,
    firstName: "Ollie",
    lastName: "Murphee",
    dateOfBirth: "",
    annualIncome: "34000",
    houseNumber: "",
    postCode: "",
    employmentStatus: "Full Time Employed"
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { annualIncome, employmentStatus } = this.state;

    this.setState({ toResults: true }, () => {
      this.props.handleSubmit({ annualIncome, employmentStatus });
    });
  };

  render() {
    const {
      firstName,
      lastName,
      dateOfBirth,
      toResults,
      annualIncome,
      houseNumber,
      postCode,
      employmentStatus
    } = this.state;

    if (toResults) {
      return <Redirect to="/results" />;
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Title
          <select id="title" name="title">
            <option />
            <option>Mr</option>
            <option>Miss</option>
          </select>
        </label>
        <label htmlFor="first-name">
          First Name
          <input
            onChange={this.handleInputChange}
            type="text"
            id="first-name"
            name="firstName"
            value={firstName}
          />
        </label>
        <label htmlFor="last-name">
          Last Name
          <input
            onChange={this.handleInputChange}
            type="text"
            id="last-name"
            name="lastName"
            value={lastName}
          />
        </label>
        <label htmlFor="date-of-birth">
          Date of Birth
          <input
            onChange={this.handleInputChange}
            type="date"
            id="date-of-birth"
            name="dateOfBirth"
            value={dateOfBirth}
          />
        </label>
        <label htmlFor="annual-income">
          Annual Income
          <input
            onChange={this.handleInputChange}
            type="number"
            id="annual-income"
            name="annualIncome"
            value={annualIncome}
          />
        </label>
        <label htmlFor="employment-status">
          Employment Status
          <select
            onChange={this.handleInputChange}
            onBlur={this.handleInputChange}
            id="employment-status"
            name="employmentStatus"
            value={employmentStatus}
          >
            <option />
            <option>Student</option>
            <option>Part Time Employed</option>
            <option>Full Time Employed</option>
          </select>
        </label>
        <label htmlFor="house-number">
          House Number
          <input
            onChange={this.handleInputChange}
            type="number"
            id="house-number"
            name="houseNumber"
            value={houseNumber}
          />
        </label>
        <label htmlFor="postcode">
          Postcode
          <input
            onChange={this.handleInputChange}
            type="text"
            id="postcode"
            name="postCode"
            value={postCode}
          />
        </label>
        <button type="submit">Submit</button>
      </Form>
    );
  }
}

export default UserInput;
