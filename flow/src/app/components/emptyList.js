import React, { PropTypes } from "react";
import { connect } from "react-redux";

import * as listActionCreators from "../actionCreators/lists";
import AddForm from "./addForm";


class EmptyList extends React.Component {
  render() {
    return (
      <div className="list list--add">
        <AddForm placeholder="Add a list" callback={this.addList.bind(this)} />
      </div>
    );
  }

  addList(name) {
    this.props.addList(name);
  }
}

EmptyList.propTypes = {
  addList: PropTypes.func.isRequired,
};

function mapActionCreators(dispatch) {
  return {
    addList: (name) => dispatch(listActionCreators.addList(name)),
  };
}

export default connect(null, mapActionCreators)(EmptyList);
