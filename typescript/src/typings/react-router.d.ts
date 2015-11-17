/// <reference path="react.d.ts" />

declare module "react-router" {
  import { Component } from 'react';

  export class Route extends Component<any, any> { }
  export class Link extends Component<any, any> { }
  export class IndexRoute extends Component<any, any> { }
}
