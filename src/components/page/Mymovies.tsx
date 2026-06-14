import { useGetMoviesQuery } from "../../services/myapi";
import ListMov from "../ui/ListMov";
import Loading from "../ui/Loading";

export default function Mymovies() {
  const { data, isError, isLoading } = useGetMoviesQuery({});
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>{isError?.data?.message}</p>;
  }
  return (
    <div>
      sds
      {/* {data.map((item) => (
        <img
          src={item.posterUrl}
          alt={item.nameRu || item.nameOriginal || item.nameEn}
        />
      ))} */}
      <ListMov data={data} error={isError} isLoading={isLoading} />
    </div>
  );
}
