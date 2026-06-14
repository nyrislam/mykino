type Typelist = {
  title: string;
  get_api: string;
};

export const top_list: Typelist[] = [
  {
    title: "Популярные",
    get_api: "TOP_POPULAR_ALL",
  },
  {
    title: "Популярные Фильмы",
    get_api: "TOP_250_MOVIES",
  },
  {
    title: "Популярные Сериалы",
    get_api: "TOP_250_TV_SHOWS",
  },
];

export const movies_list: Typelist[] = [
  {
    title: "Популярные",
    get_api: "ALL",
  },
  {
    title: "Фильмы",
    get_api: "FILM",
  },
  {
    title: "Сериалы",
    get_api: "TV_SERIES",
  },
];
