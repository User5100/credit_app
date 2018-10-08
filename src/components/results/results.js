import React from "react";
import { Link } from "react-router-dom";
import { Section } from "./styled-results";

class Results extends React.Component {
  state = {
    "Student Life Card": false,
    "Anywhere Card": false,
    "Liquid Card": false
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { annualIncome, cards, employmentStatus } = this.props;
    const filteredCards = cards.filter(({ filter }) => {
      const { whiteListedEmploymentStatuses, incomeLimit } = filter;
      return (
        annualIncome >= incomeLimit &&
        whiteListedEmploymentStatuses.includes(employmentStatus)
      );
    });

    const total = filteredCards
      .filter(card => this.state[card.name])
      .reduce((totalCredit, { credit }) => totalCredit + credit, 0);

    return (
      <Section>
        <h2>Total credit: {total}</h2>
        {filteredCards.map(card => (
          <div key={card.id}>
            <Link key={card.id} to={`/card-details/${card.id}`}>
              {card.name}
            </Link>
            <input
              onChange={this.handleInputChange}
              name={card.name}
              type="checkbox"
            />
          </div>
        ))}
        <Link to="/">Back to Form</Link>
      </Section>
    );
  }
}

export default Results;
