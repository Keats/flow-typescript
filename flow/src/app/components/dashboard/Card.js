import React, { PropTypes } from "react";
import Immutable from "immutable";


export class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <h3>{this.props.card.name}</h3>
      </div>
    );
  }
}

Card.propTypes = {
  card: PropTypes.instanceOf(Immutable.Record).isRequired,
};

export default Card;
