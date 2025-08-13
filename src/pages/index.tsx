import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loader from "../components/ui/Loader";

const Home = lazy(() => import("./home/Home"));
const Layout = lazy(() => import("./layout/Layout"));
const ProductDetail = lazy(() => import("./product/ProductDetail"));

const Company = lazy(() => import("./company"));

const ProductDescription = lazy(() => import("./product/product-description"));
const ProductCharacteristics = lazy(
  () => import("./product/product-characteristics")
);
const ProductVideo = lazy(() => import("./product/product-video"));
const ProductImage = lazy(() => import("./product/product-image"));

const MainRouters = () => {
  return (
    <Suspense fallback={<Loader />}>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            { index: true, element: <Home /> },
            {
              path: "product/:id",
              element: <ProductDetail />,
              children: [
                {
                  index: true,
                  element: <ProductDescription />,
                },
                {
                  path: "characteristics",
                  element: <ProductCharacteristics />,
                },
                {
                  path: "video",
                  element: <ProductVideo />,
                },
                {
                  path: "image",
                  element: <ProductImage />,
                },
              ],
            },
            { path: "company", element: <Company /> },
          ],
        },
      ])}
    </Suspense>
  );
};

export default React.memo(MainRouters);
