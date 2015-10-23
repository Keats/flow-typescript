/* @flow */
import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Immutable from "immutable";


import List from "./dashboard/List";
import EmptyList from "./dashboard/EmptyList";


export class DashboardRoute extends React.Component {
  renderLists(): Array<ReactElement> {
    const lists = [];
    this.props.lists.forEach(list => {
      lists.push(<List key={list.id} list={list} />);
    });
    lists.push(<EmptyList key="empty" />);
    return lists;
  }

  render(): any {
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

DashboardRoute.propTypes = {
  lists: PropTypes.instanceOf(Immutable.Map),
};

function mapStateToProps(state) {
  return {
    lists: state.lists,
  };
}

export default connect(
  mapStateToProps,
)(DashboardRoute);

