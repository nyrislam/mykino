import { useLocation, useNavigate } from "react-router";
import { setFilters } from "../../features/searchQuerySlice";
import { useDispatch } from "react-redux";

let debounceTimer;

export default function Search() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleSearchSubmit = (e) => {
    const value = e.target.value.trim();

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      if (value === "") {
        navigate("/");
      } else if (location.pathname !== "/search") {
        navigate("/search");
      }

      dispatch(
        setFilters({
          keyword: value,
          countries: "",
          genreId: "",
          order: "NUM_VOTE",
          year: "",
          type: "",
          page: 1,
        }),
      );
    }, 500);
  };
  return (
    <div className="w-100">
      <input
        type="text"
        id="Search"
        placeholder="Введите название фильма..."
        onChange={handleSearchSubmit}
        className="mt-0.5 w-full rounded-lg bg-gray-100 border-none px-3 py-2 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
    </div>
  );
}
