type RouteProps = {
  component: ReactClass<any, any, any>
};

type LinkProps = {
  to: string
};

declare module "react-router" {
  declare var Route: ReactClass<void, RouteProps, void>;
  declare var IndexRoute: ReactClass<void, RouteProps, void>;
  declare var Link: ReactClass<void, LinkProps, void>;
}
