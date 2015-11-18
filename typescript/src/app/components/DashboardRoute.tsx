import * as React from "react";
import { connect } from "react-redux";
import * as Immutable from "immutable";


import List from "./dashboard/List";
import EmptyList from "./dashboard/EmptyList";
import { getAllLists } from "../reducers/lists";
import { IState } from "../interfaces";


interface IDashboardRouteProps {
  lists: Immutable.List<any>;
}

export class DashboardRoute extends React.Component<IDashboardRouteProps, {}> {
  renderLists() {
    // TODO: can we use the right type of component here?
    const lists: Array<any> = [];
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

function mapStateToProps(state: IState) {
  return {
    lists: getAllLists(state),
  };
}

export default connect(
  mapStateToProps,
  null
)(DashboardRoute);
