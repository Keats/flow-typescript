declare module "redux-devtools" {
  declare function devTools(): any;
  declare function persistState(): any;
}

declare module "redux-devtools/lib/react" {
  declare var DevTools: ReactClass<any, any, any>;
  declare var DebugPanel: ReactClass<any, any, any>;
  declare var LogMonitor: ReactClass<any, any, any>;
}
