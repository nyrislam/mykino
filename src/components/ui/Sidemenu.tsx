import { Link, useParams } from "react-router";
import { movies_list } from "../../constants";
import Filter from "./Filter";

export default function Sidemenu() {
  const { title } = useParams();
  return (
    <div className="flex h-screen flex-col justify-between border-e border-gray-100 bg-white">
      <div className="p-4">
        <ul className="space-y-1">
          <Link
            to="/"
            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900"
          >
            Home
          </Link>
          <Link
            to="/News"
            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900"
          >
            News
          </Link>
          {movies_list.map((item) => (
            <li>
              <Link
                to={"/" + item.get_api}
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900"
              >
                {item.title}
              </Link>
            </li>
          ))}
          {title && <Filter />}
        </ul>
      </div>
    </div>
  );
}
