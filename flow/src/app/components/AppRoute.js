import React, { PropTypes } from "react";


class AppRoute extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

AppRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppRoute;
