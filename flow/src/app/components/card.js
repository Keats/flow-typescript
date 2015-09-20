import React, { PropTypes } from "react";


class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
