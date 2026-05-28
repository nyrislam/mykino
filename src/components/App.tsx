import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./Layout";
import MainPage from "./page/MainPage";
import ListMoviesPage from "./page/ListMoviesPage";
import News from "./page/News";
import MoviePage from "./page/MoviePage";
import SearchPage from "./page/SearchPage";
import MyAPI from "./page/MyAPI";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/News",
        element: <News />,
      },
      {
        path: "/:title",
        element: <ListMoviesPage />,
      },
      {
        path: "/movie/:kinopoiskId",
        element: <MoviePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/myapi",
        element: <MyAPI />,
      },
    ],
  },
]);

const root = document.getElementById("root");

export default function App() {
  return <RouterProvider router={router} />;
}
