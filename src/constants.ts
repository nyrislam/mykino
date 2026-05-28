type Typelist = {
  title: string;
  get_api: string;
};

export const top_list: Typelist[] = [
  {
    title: "Popular",
    get_api: "TOP_POPULAR_ALL",
  },
  {
    title: "Top Films",
    get_api: "TOP_250_MOVIES",
  },
  {
    title: "Top Series",
    get_api: "TOP_250_TV_SHOWS",
  },
];

export const movies_list: Typelist[] = [
  {
    title: "Popular",
    get_api: "ALL",
  },
  {
    title: "Film",
    get_api: "FILM",
  },
  {
    title: "Series",
    get_api: "TV_SERIES",
  },
];
