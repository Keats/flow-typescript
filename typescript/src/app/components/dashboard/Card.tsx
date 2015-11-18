import * as React from "react";

import { ICardRecord } from "../../interfaces";

interface ICardProps {
  key: number;
  card: ICardRecord;
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
