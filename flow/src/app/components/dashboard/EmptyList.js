/* @flow */
import React, { PropTypes } from "react";
import { connect } from "react-redux";


import AddForm from "./AddForm";
import { addList } from "../../actions/lists";


export class EmptyList extends React.Component {
  render(): any {
    return (
      <div className="list list--add">
        <AddForm placeholder="Add a list" callback={this.props.addList} />
      </div>
    );
  }
}

EmptyList.propTypes = {
  addList: PropTypes.func.isRequired,
};


export default connect(
  null,
  { addList }
)(EmptyList);
