import { Link, useParams } from "react-router";
import { movies_list } from "../../constants";
import Filter from "./Filter";
import { jwtDecode } from "jwt-decode";

export default function Sidemenu() {
  const { title } = useParams();
  const token = localStorage.getItem("token");

  return (
    <div className="flex h-screen flex-col justify-between border-e border-gray-100 bg-white">
      <div className="p-4">
        <ul className="space-y-1">
          <Link
            to="/"
            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900"
          >
            Домашняя страница
          </Link>
          <Link
            to="/News"
            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900"
          >
            Новости
          </Link>
          <Link
            to="/mymovies"
            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900"
          >
            Рекомендованный Контент
          </Link>
          {movies_list.map((item) => (
            <>
              <li>
                <Link
                  to={"/" + item.get_api}
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900"
                >
                  {item.title}
                </Link>
              </li>
              {item.get_api == title && <Filter />}
            </>
          ))}
          {token && jwtDecode(token)?.user_id === 2 && (
            <Link
              to="/admin"
              className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900"
            >
              Админ панель
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}
