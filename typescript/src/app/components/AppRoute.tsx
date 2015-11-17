import * as React from "react";
import { Link } from "react-router";


interface IAppRouteProps {
  children: React.ReactElement<{}>;
}

export class AppRoute extends React.Component<IAppRouteProps, {}> {
  render() {
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

export default AppRoute;
