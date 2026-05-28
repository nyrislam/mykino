import { useGetNewsQuery } from "../../services/api";
import Loading from "../ui/Loading";

export default function News() {
  const { data, error, isLoading } = useGetNewsQuery({
    page: 1,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error || !data?.items) {
    return <p className="text-center p-4">Не удалось загрузить новости</p>;
  }

  console.log(data.items);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {data.items.slice(0, 3).map((news) => (
        <article
          key={news.id || news.url}
          className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
        >
          <img
            alt={news.title}
            src={news.imageUrl}
            className="h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href={news.url} target="_blank" rel="noreferrer">
              <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">
                {news.title}
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm text-gray-500">
              {news.description}
            </p>

            <a
              href={news.url}
              target="_blank"
              rel="noreferrer"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 text-xs text-gray-400 ml-2"
              >
                {news.publishedAt}
              </span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
