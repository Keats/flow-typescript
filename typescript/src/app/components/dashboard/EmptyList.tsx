import * as React from "react";
import { connect } from "react-redux";


import AddForm from "./AddForm";
import { addList } from "../../actions/lists";


interface IEmptyListProps {
  addList?: () => void;
}

export class EmptyList extends React.Component<IEmptyListProps, {}> {
  render() {
    return (
      <div className="list list--add">
        <AddForm placeholder="Add a list" callback={this.props.addList} />
      </div>
    );
  }
}


export default connect(
  null,
  { addList }
)(EmptyList);
