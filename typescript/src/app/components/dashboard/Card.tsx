import * as React from "react";
import * as Immutable from "immutable";


// TODO: https://github.com/facebook/immutable-js/issues/341
interface ICardProps {
  key: number;
  card: Immutable.Record.IRecord<any>;
}

export class Card extends React.Component<ICardProps, {}> {
  render() {
    return (
      <div className="card">
        <h3>{this.props.card.name}</h3>
      </div>
    );
  }
}


export default Card;
