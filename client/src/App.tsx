import { useRoutes } from "react-router";
import Client from "./layouts/Client";
import Home from "./pages/Home";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import AdminLayout from "./layouts/Admin";
import ProductList from "./pages/admin/product";
import ProductAdd from "./pages/admin/product/add";

function App() {
  const element = useRoutes([
    {
      path: "",
      element: <Client />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
      ],
    },
    {
      path: "admin",
      element: <AdminLayout />,
      children: [
        {
          path: "products",
          element: <ProductList />,
        },
        {
          path: "products/add",
          element: <ProductAdd />,
        },
      ],
    },
  ]);

  return <div>{element}</div>;
}

export default App;
