import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./Layout";
import MainPage from "./page/MainPage";
import ListMoviesPage from "./page/ListMoviesPage";
import News from "./page/News";
import MoviePage from "./page/MoviePage";
import SearchPage from "./page/SearchPage";
import MyAPI from "./page/MyAPI";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDateUser } from "../features/loginSlice";

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
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      console.log("Пользователь авторизован");
      dispatch(setDateUser({ username: "USER" }));
    }
  }, []);
  return <RouterProvider router={router} />;
}
