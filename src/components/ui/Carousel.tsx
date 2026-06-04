import { useState } from "react";
import Loading from "./Loading";
import { Link } from "react-router";

export default function Carousel({ data, isError, isLoading }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;
  const movies =
    data?.items || data?.data?.items || (Array.isArray(data) ? data : []);

  const nextSlide = () => {
    setCurrentIndex((idx) =>
      idx + visibleCount >= movies.length ? 0 : idx + 1,
    );
  };
  const prevSlide = () => {
    setCurrentIndex((idx) =>
      idx - 1 < 0 ? movies.length - visibleCount : idx - 1,
    );
  };
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <p>error</p>;
  }
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
        }}
      >
        {movies.map((item, index) => (
          <Link
            key={item.kinopoiskId || item.filmId || index}
            to={
              "/movie/" +
              (item.kinopoiskId == undefined ? item.filmId : item.kinopoiskId)
            }
            className="shrink-0 block px-1"
            style={{ width: `${100 / visibleCount}%` }}
          >
            <img
              src={item.posterUrl}
              alt={item.nameRu || item.nameEn || ""}
              className="w-full object-cover aspect-[2/3] rounded-lg"
            />
          </Link>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-2 z-10 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-gray-900/80 hover:bg-gray-900 text-white rounded-full text-sm pb-0.5 transition-all active:scale-90 shadow-md"
        onClick={prevSlide}
      >
        &larr;
      </button>

      <button
        className="absolute top-1/2 right-2 z-10 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-gray-900/80 hover:bg-gray-900 text-white rounded-full text-sm pb-0.5 transition-all active:scale-90 shadow-md"
        onClick={nextSlide}
      >
        &rarr;
      </button>
    </div>
  );
}
