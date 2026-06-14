import React from "react";
import { filtersdb } from "../../features/filtersdb";
import { useDispatch, useSelector } from "react-redux";
import { resetQuery, setFilters } from "../../features/searchQuerySlice";

export default function Filter() {
  const db = [];
  const dispatch = useDispatch();
  const { order, countries, year, genreId } = useSelector(
    (state) => state.searchQuery,
  );
  for (
    let i = new Date().getFullYear();
    i > new Date().getFullYear() - 60;
    i--
  ) {
    db.push(i);
  }

  const ordersList = [
    { title: "По рейтингу", value: "RATING" },
    { title: "По оценкам", value: "NUM_VOTE" },
  ];

  return (
    <div className="space-y-4 mt-4 pt-4 border-t border-gray-100">
      <h4 className="mt-4 text-2xlmb-6">Фильтер</h4>
      <div>
        <label
          htmlFor="order-select"
          className="block text-xs font-medium text-gray-500 mb-1"
        >
          По порядку
        </label>
        <select
          name="order"
          id="order-select"
          className="block w-full rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900 border-none focus:outline-none"
          onChange={(e) =>
            dispatch(setFilters({ order: e.target.value, page: 1 }))
          }
          value={order}
        >
          <option value="" hidden disabled>
            Выберете порядок
          </option>
          {ordersList.map((order, idx) => (
            <option key={idx} value={order.value}>
              {order.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="country-select"
          className="block text-xs font-medium text-gray-500 mb-1"
        >
          Страна
        </label>
        <select
          name="country"
          id="country-select"
          className="block w-full rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900 border-none focus:outline-none"
          onChange={(e) =>
            dispatch(setFilters({ countries: e.target.value, page: 1 }))
          }
          value={countries}
        >
          <option value="" hidden disabled>
            Выберете Страну
          </option>
          {filtersdb.countries.map((fil) => (
            <option key={fil.id || fil.country} value={fil.id}>
              {fil.country}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="year-select"
          className="block text-xs font-medium text-gray-500 mb-1"
        >
          Год
        </label>
        <select
          name="year"
          id="year-select"
          className="block w-full rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900 border-none focus:outline-none"
          onChange={(e) =>
            dispatch(setFilters({ year: e.target.value, page: 1 }))
          }
          value={year}
        >
          <option value="" hidden disabled>
            Выберете Год
          </option>{" "}
          {db.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="genre-select"
          className="block text-xs font-medium text-gray-500 mb-1"
        >
          Жанр
        </label>
        <select
          name="genre"
          id="genre-select"
          className="block w-full rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900 border-none focus:outline-none"
          onChange={(e) =>
            dispatch(setFilters({ genreId: e.target.value, page: 1 }))
          }
          value={genreId}
        >
          <option value="" hidden disabled>
            Выберете Жанр
          </option>{" "}
          {filtersdb.genres.map((fil) => (
            <option key={fil.id || fil.genre} value={fil.id}>
              {fil.genre}
            </option>
          ))}
        </select>
      </div>
      <button
        className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-red-600 my-4"
        onClick={() => dispatch(resetQuery())}
      >
        Сброс
      </button>
    </div>
  );
}
