/// <reference path="react.d.ts" />

declare module "redux-router" {
  import { Component } from 'react';

  export class ReduxRouter extends Component<any, any> { }
  export function routerStateReducer(args: any): any
  export function reduxReactRouter(args: any): any
}
