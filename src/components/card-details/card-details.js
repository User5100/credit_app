import React from "react";
import { Link } from "react-router-dom";

class CardDetails extends React.Component {
  render() {
    const {
      cards,
      match: {
        params: { id }
      }
    } = this.props;

    if (cards.length === 0) return null;

    const [card] = cards.filter(card => card.id == id);

    const {
      name,
      apr,
      credit,
      offerDuration: { purchase, balanceTransfer }
    } = card;

    return (
      <section>
        <h2>Name {name}</h2>
        <ul>
          <li>APR: {apr} %</li>
          <li>Balance Transfer Offer Duration: {balanceTransfer} months</li>
          <li>Purchase Offer Duration: {purchase} months</li>
          <li>Credit Available: £ {credit}</li>
        </ul>
        <Link to="/results">Back</Link>
      </section>
    );
  }
}

export default CardDetails;
