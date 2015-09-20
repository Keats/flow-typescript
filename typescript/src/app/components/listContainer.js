import Immutable from "immutable";
import React, { PropTypes } from "react";
import { connect } from "react-redux";

import List from "./list";
import EmptyList from "./emptyList";


class ListContainer extends React.Component {
  renderLists() {
    const lists = [];
    this.props.lists.forEach(list => {
      lists.push(<List key={list.id} list={list} />);
    });
    lists.push(<EmptyList key="empty" />);
    return lists;
  }

  render() {
    return (
      <div>
        <h3>A random board</h3>
        <div className="lists">
          {this.renderLists()}
        </div>
      </div>
    );
  }
}

ListContainer.propTypes = {
  lists: PropTypes.instanceOf(Immutable.Map).isRequired,
};


function mapState(state) {
  return {
    lists: state.lists,
  };
}

export default connect(mapState)(ListContainer);
