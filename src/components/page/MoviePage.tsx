import { useParams, useNavigate } from "react-router";
import {
  useGetSequelsPrequelsMoviesQuery,
  useGetStaffMoviesQuery,
} from "../../services/api";
import Loading from "../ui/Loading";
import Carousel from "../ui/Carousel";

export default function MoviePage() {
  const { kinopoiskId } = useParams();
  const navigate = useNavigate();
  const { data, isError, isLoading } = useGetStaffMoviesQuery({
    id: kinopoiskId,
  });
  const {
    data: sequelsData,
    isError: isSequelsError,
    isLoading: isSequelsLoading,
  } = useGetSequelsPrequelsMoviesQuery({
    id: kinopoiskId,
  });

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <p>{isError?.data?.message || "error"}</p>;
  }
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button
        className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 my-4"
        onClick={() => navigate(-1)}
      >
        &larr; Назад
      </button>
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={data.posterUrl}
          alt={data.nameRu || data.nameEn}
          className="w-72 rounded-lg shadow-md object-cover aspect-[2/3]"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {data.nameRu || data.nameEn}
          </h1>
          <p className="text-gray-500 mb-4">
            {data.year}, {data.genres?.map((g) => g.genre).join(", ")}
          </p>
          <p className="text-gray-700 leading-relaxed">{data.description}</p>
        </div>
      </div>

      <iframe
        src={`https://fbfind.top/film/${data.kinopoiskId}/1234`}
        className="w-full h-[500px]"
        allow="autoplay; fullscreen"
        scrolling="no"
      />
      <div className="flex-1">
        <h1 className="mt-4 text-2xl font-bold mb-6">Сикелы и приквалы</h1>
        <Carousel
          data={sequelsData}
          isError={isSequelsError}
          isLoading={isSequelsLoading}
        />
      </div>
    </div>
  );
}
