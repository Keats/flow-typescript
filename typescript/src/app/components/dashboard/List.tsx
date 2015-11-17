import * as React  from "react";
import { connect } from "react-redux";
import * as Immutable from "immutable";


import AddForm from "./AddForm";
import Card from "./Card";
import { addCard } from "../../actions/cards";
import { getListCards } from "../../reducers/cards";


interface IListProps {
  key: number;
  list: Immutable.Record.IRecord<any>;

  cards?: Immutable.List<Immutable.Record.IRecord<any>>;
  addCard?: () => void;
}

export class List extends React.Component<IListProps, {}> {
  renderCards() {
    const cards = [];
    this.props.cards.map(card => {
      cards.push(<Card key={card.id} card={card} />);
    });
    return cards;
  }

  render() {
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

function mapStateToProps(state, ownProps) {
  return {
    cards: getListCards(state, ownProps.list.cards),
  };
}

export default connect(
  mapStateToProps,
  { addCard }
)(List);
