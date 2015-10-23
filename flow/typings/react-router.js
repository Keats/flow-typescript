type RouteProps = {
  component: ReactClass<any, any, any>
};

declare module "react-router" {
  declare var Route: ReactClass<void, RouteProps, void>;
}
