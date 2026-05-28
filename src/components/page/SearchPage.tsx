import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../services/api";
import ListMov from "../ui/ListMov";

export default function SearchPage() {
  const queryState = useSelector((state) => state.searchQuery);

  const { data, error, isLoading } = useGetMoviesQuery({
    ...queryState,
  });
  return <ListMov data={data} error={error} isLoading={isLoading} />;
}
