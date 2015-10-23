import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Immutable from "immutable";


import AddForm from "./AddForm";
import Card from "./Card";
import { addCard } from "../../actions/cards";


export class List extends React.Component {
  renderCards() {
    const cards = [];
    this.props.cards.map(card => {
      cards.push(<Card key={card.id} card={card} />);
    });
    return cards;
  }

  render() {
    return (
      <div className="list">
        <h2 className="list__name">{this.props.list.name}</h2>
        {this.renderCards()}
        <AddForm placeholder="Add a card" callback={this.props.addCard} />
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.instanceOf(Immutable.Record),

  cards: PropTypes.instanceOf(Immutable.List),
  addCard: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    cards: ownProps.list.cards.map(cardId => state.cards.get(cardId)),
  };
}

function mapActionCreators(dispatch, ownProps) {
  return {
    addCard: (name) => dispatch(addCard(ownProps.list.id, name)),
  };
}

export default connect(
  mapStateToProps,
  mapActionCreators,
)(List);
