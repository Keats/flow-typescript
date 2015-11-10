/* @flow */
import React, { PropTypes } from "react";
import { Link } from "react-router";


export class AppRoute extends React.Component {
  render(): ReactElement {
    return (
      <div>
        <header>React/Redux example</header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

AppRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppRoute;
