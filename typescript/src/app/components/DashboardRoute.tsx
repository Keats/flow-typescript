import * as React from "react";
import { connect } from "react-redux";
import * as Immutable from "immutable";


import List from "./dashboard/List";
import EmptyList from "./dashboard/EmptyList";
import { getAllLists } from "../reducers/lists";


interface IDashboardRouteProps {
  lists: Immutable.List<any>;
}

export class DashboardRoute extends React.Component<IDashboardRouteProps, {}> {
  renderLists() {
    const lists = [];
    this.props.lists.forEach(list => {
      lists.push(<List key={list.id} list={list} />);
    });
    return lists;
  }

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <div className="lists">
          {this.renderLists()}
          <EmptyList />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: getAllLists(state),
  };
}

export default connect(
  mapStateToProps,
  null
)(DashboardRoute);
