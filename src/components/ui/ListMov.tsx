import { Link } from "react-router";
import Loading from "./Loading";
import {
  useAddWishlistMutation,
  useGetWishlistQuery,
  useRemoveWishlistMutation,
} from "../../services/myapi";

export default function ListMov({ data, error, isLoading }) {
  const movies =
    data?.items || data?.data?.items || (Array.isArray(data) ? data : []);

  const { data: wishlist = [] } = useGetWishlistQuery({});

  const [addWishlist] = useAddWishlistMutation();
  const [removeWishlist] = useRemoveWishlistMutation();

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>{error.data.message}</p>;
  }
  return (
    <ul className="grid grid-cols-4 w-full gap-4">
      {movies.map((movie) => {
        const isWishlisted = wishlist.some(
          (item) => item.movie_id === movie.id,
        );

        return (
          <div key={movie.id} className="relative group">
            <Link to={"/movie/" + movie.kinopoiskId}>
              <img
                src={movie.posterUrl}
                className="w-full h-full object-cover rounded-lg shadow-md"
                alt={movie.nameRu}
              />
            </Link>

            <button
              onClick={() =>
                isWishlisted ? removeWishlist(movie.id) : addWishlist(movie.id)
              }
              className="
      absolute top-2 right-2
      bg-black/50 backdrop-blur-sm
      rounded-full
      w-10 h-10
      flex items-center justify-center
      text-xl
      transition
      hover:scale-110
      hover:bg-black/70
    "
            >
              {isWishlisted ? "❤️" : "🤍"}
            </button>
          </div>
        );
      })}
    </ul>
  );
}
