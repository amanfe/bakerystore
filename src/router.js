import { createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";
import CardDetail from "./pages/CardDetail";
import ErrorPage from "./pages/ErrorPage";
import Showroom from "./pages/Showroom";
import App from "./App";
import CakeClass from "./pages/CakeClass";
import Recipies from "./pages/Recipies";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Showroom/>
            },
            { path: "/cake-class", element: <CakeClass /> },
            { path: "/recipies", element: <Recipies /> },
            { path: "/store-detail/:id", element: <CardDetail /> },
            { path: "/cart", element: <Cart /> },
      ],
    },
  ]);