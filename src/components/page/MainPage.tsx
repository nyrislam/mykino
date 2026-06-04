import { top_list } from "../../constants";
import Carousel from "../ui/Carousel";
import Sidemenu from "../ui/Sidemenu";
import News from "./News";
import { useGetMoviesTopQuery } from "../../services/api";

export default function MainPage() {
  return (
    <div className="flex gap-8 w-full">
      <aside className="w-64 shrink-0 hidden md:block">
        <Sidemenu />
      </aside>

      <div className="flex-1">
        {top_list.map((item) => {
          const { data, isError, isLoading } = useGetMoviesTopQuery({
            type: item.get_api,
            page: 1,
          });
          return (
            <div>
              <h1 className="mt-4 text-2xl font-bold mb-6">{item.title}</h1>
              <Carousel data={data} isError={isError} isLoading={isLoading} />
            </div>
          );
        })}
        {/* <h1 className="mt-8 text-2xl font-bold mb-6">News</h1>
        <News /> */}
      </div>
    </div>
  );
}
