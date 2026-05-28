import { useNavigate, useParams } from "react-router";
import ListMov from "../ui/ListMov";
import Sidemenu from "../ui/Sidemenu";
import { useGetMoviesQuery } from "../../services/api";
import { useSelector } from "react-redux";

export default function ListMoviesPage() {
  const navigate = useNavigate();
  const { title } = useParams();
  const queryState = useSelector((state) => state.searchQuery);
  const { data, error, isLoading } = useGetMoviesQuery({
    ...queryState,
    type: title,
  });
  console.log(data, error, isLoading, title);
  return (
    <div className="flex gap-8 w-full">
      <aside className="w-64 shrink-0 hidden md:block">
        <Sidemenu />
      </aside>
      <div className="flex-1">
        <button
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 my-4"
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </button>
        <h1 className="mt-4 text-2xl font-bold mb-6">{title}</h1>
        <ListMov data={data} error={error} isLoading={isLoading} />
      </div>
    </div>
  );
}
