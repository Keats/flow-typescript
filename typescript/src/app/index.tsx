import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider } from "react-redux";
import { ReduxRouter } from "redux-router";

import configureStore from "./store";
import routes from "./routes";

const store = configureStore();

declare var __PRODUCTION__: boolean;


class Root extends React.Component<{}, {}> {
  renderDevTools() {
    if (__PRODUCTION__) {
      return null;
    }

    const { DevTools, DebugPanel, LogMonitor } = require("redux-devtools/lib/react");
    return (
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor}/>
      </DebugPanel>
    );
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <ReduxRouter>
            {routes}
          </ReduxRouter>
        </Provider>
        {this.renderDevTools()}
      </div>
    );
  }
}

ReactDom.render(<Root />, document.getElementById("container"));
