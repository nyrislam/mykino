import { Link } from "react-router";
import { useGetWishlistQuery } from "../../services/myapi";
import Loading from "./Loading";

export default function Wishlist() {
  const { data = [], error, isLoading } = useGetWishlistQuery({});

  if (isLoading) return <Loading />;

  if (error) return <p>{error?.data?.message || "Ошибка загрузки"}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Мой список</h1>

      {data.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          Список желаемого пуст
        </div>
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {data.map((item) => (
            <li key={item.movie_id}>
              <div className="relative group">
                <Link to={`/movie/${item.movie.kinopoiskId}`}>
                  <img
                    src={item.movie.posterUrl}
                    alt={item.movie.nameRu}
                    className="w-full aspect-[2/3] object-cover rounded-lg shadow-md"
                  />
                </Link>

                <button
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
                  ❤️
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
