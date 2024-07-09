import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";

type Routes = {
  routes: RouteObject[];
};

const Router = ({ routes }: Routes) => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export { Router };
