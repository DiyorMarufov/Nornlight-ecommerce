import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Company from "./company";

const Home = lazy(() => import("./home/Home"));
const Layout = lazy(() => import("./layout/Layout"));
const ProductDetail = lazy(() => import("./product/ProductDetail"));

const MainRouters = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            { index: true, element: <Home /> },
            { path: "product/:id", element: <ProductDetail /> },
          ],
        },
        {
          path: "company",
          element: <Company />,
        },
      ])}
    </Suspense>
  );
};

export default React.memo(MainRouters);
