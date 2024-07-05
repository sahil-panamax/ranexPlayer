import NotFound from "../pages/NotFound";

import {createHashRouter} from "react-router-dom";

const router = createHashRouter(
  [
    {
      path: "/",
      errorElement: <NotFound />,
      async lazy() {
        const Component = await import("../components/Layout");
        return {Component: Component.default};
      },
      children: [
        {
          path: "/",
          async lazy() {
            const Component = await import("../pages/Home/index.jsx");
            return {Component: Component.default};
          },
        },
        {
          path: "/now-playing",
          async lazy() {
            const Component = await import("../pages/NowPlaying/index.jsx");
            return {Component: Component.default};
          },
        },
      ],
    },
    {
      path: "/login",
      async lazy() {
        const Component = await import("../pages/Login/index.jsx");
        return {Component: Component.default};
      },
    },
    {
      path: "/signup",
      async lazy() {
        const Component = await import("../pages/SignUp/index.jsx");
        return {Component: Component.default};
      },
    },
  ],
  {basename: import.meta.env.BASE_URL}
);

router.displayName = "Router";

export default router;
