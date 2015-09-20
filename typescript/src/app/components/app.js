import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import ListContainer from "./listContainer";


class App extends React.Component {
  render() {
    let content = <ListContainer />;
    if (this.props.children) {
      content = <p>Check the github repo: https://github.com/Keats/react-example</p>;
    }
    return (
      <div>
        <h1>A fake kanban app</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <hr/>
        {content}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

function mapState(state) {
  return {
    routerState: state.router,
  };
}

export default connect(mapState)(App);
