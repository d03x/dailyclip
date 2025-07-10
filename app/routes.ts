import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("app-wrapper.tsx", [
    index("routes/login.tsx"),
    layout("routes/app-layout.tsx", [
      route("app", "routes/home.tsx"),
      route("watch", 'routes/watch.tsx')
    ]),
  ]),
] satisfies RouteConfig;
