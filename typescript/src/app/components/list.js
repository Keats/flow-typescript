import React, { PropTypes } from "react";
import Immutable from "immutable";
import { connect } from "react-redux";

import * as cardActionCreators from "../actionCreators/cards";
import AddForm from "./addForm";
import Card from "./card";


class List extends React.Component {
  renderCards() {
    const cards = [];
    this.props.cards.forEach((card) => {
      cards.push(<Card key={card.id} name={card.name} />);
    });
    return cards;
  }

  render() {
    const { name } = this.props.list;
    return (
      <div className="list">
        <h2 className="list__name">{name}</h2>
        {this.renderCards()}
        <AddForm placeholder="Add a card" callback={this.addCard.bind(this)} />
      </div>
    );
  }

  addCard(name) {
    this.props.addCard(name);
  }

}

List.propTypes = {
  list: PropTypes.instanceOf(Immutable.Record).isRequired,
  cards: PropTypes.instanceOf(Immutable.List),
  addCard: PropTypes.func.isRequired,
};


function mapState(state, ownProps) {
  return {
    cards: ownProps.list.cards.map(cardId => state.cards.get(String(cardId))),
  };
}

function mapActionCreators(dispatch, ownProps) {
  return {
    addCard: (name) => dispatch(cardActionCreators.addCard(ownProps.list.id, name)),
  };
}

export default connect(mapState, mapActionCreators)(List);
