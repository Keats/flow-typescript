/* @flow */
import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Immutable from "immutable";


import AddForm from "./AddForm";
import Card from "./Card";
import { addCard } from "../../actions/cards";
import { getListCards } from "../../reducers/cards";


export class List extends React.Component {
  renderCards(): Array<ReactElement> {
    const cards = [];
    this.props.cards.map(card => {
      cards.push(<Card key={card.id} card={card} />);
    });
    return cards;
  }

  render(): ReactElement {
    const { id, name } = this.props.list;
    return (
      <div className="list">
        <h2 className="list__name">{name}</h2>
        {this.renderCards()}
        <AddForm placeholder="Add a card" callback={this.props.addCard.bind(null, id)} />
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
    cards: getListCards(state, ownProps.list.cards),
  };
}

export default connect(
  mapStateToProps,
  { addCard },
)(List);
