import { useState } from "react";
import { useCreateMovieMutation } from "../../services/myapi";

export default function CreateMovie() {
  const [createMovie, { isLoading, error }] = useCreateMovieMutation();

  const [movie, setMovie] = useState({
    kinopoiskId: 0,
    nameRu: "",
    nameEn: "",
    nameOriginal: "",
    description: "",
    country: "",
    genre: "",
    ratingKinopoisk: 0,
    ratingImdb: 0,
    year: 0,
    type: "FILM",
    posterUrl: "",
    posterUrlPreview: "",
    coverUrl: "",
    logoUrl: "",
    ratingAgeLimits: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setMovie((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendHandle = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const body = {
        kinopoiskId: Number(movie.kinopoiskId),
        nameRu: movie.nameRu,
        nameEn: movie.nameEn,
        nameOriginal: movie.nameOriginal,
        description: movie.description,

        countries: [{ country: movie.country }],
        genres: [{ genre: movie.genre }],

        ratingKinopoisk: Number(movie.ratingKinopoisk),
        ratingImdb: Number(movie.ratingImdb),
        year: Number(movie.year),

        type: movie.type,

        posterUrl: movie.posterUrl,
        posterUrlPreview: movie.posterUrlPreview,
        coverUrl: movie.coverUrl,
        logoUrl: movie.logoUrl,
        ratingAgeLimits: movie.ratingAgeLimits,
      };

      const result = await createMovie(body).unwrap();

      console.log("Создан фильм:", result);
      alert("Фильм успешно создан");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={sendHandle}
      className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-8"
    >
      <h1 className="text-3xl font-bold">Создание фильма</h1>

      {/* Основная информация */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Основная информация</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="kinopoiskId" className="block font-medium">
              Kinopoisk ID
            </label>
            <input
              className="w-full border rounded-lg px-4 py-2 mt-1"
              id="kinopoiskId"
              name="kinopoiskId"
              type="number"
              value={movie.kinopoiskId}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="year" className="block font-medium">
              Год выпуска
            </label>
            <input
              className="w-full border rounded-lg px-4 py-2 mt-1"
              id="year"
              name="year"
              type="number"
              value={movie.year}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="nameRu" className="block font-medium">
              Название (RU)
            </label>
            <input
              className="w-full border rounded-lg px-4 py-2 mt-1"
              id="nameRu"
              name="nameRu"
              value={movie.nameRu}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="nameEn" className="block font-medium">
              Название (EN)
            </label>
            <input
              className="w-full border rounded-lg px-4 py-2 mt-1"
              id="nameEn"
              name="nameEn"
              value={movie.nameEn}
              onChange={handleChange}
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="nameOriginal" className="block font-medium">
              Оригинальное название
            </label>
            <input
              className="w-full border rounded-lg px-4 py-2 mt-1"
              id="nameOriginal"
              name="nameOriginal"
              value={movie.nameOriginal}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="description" className="block font-medium">
            Описание
          </label>
          <textarea
            className="w-full border rounded-lg px-4 py-2 mt-1 min-h-[150px]"
            id="description"
            name="description"
            value={movie.description}
            onChange={handleChange}
          />
        </div>
      </section>

      {/* Категории */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Категории</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="country" className="block font-medium">
              Страна
            </label>
            <input
              className="w-full border rounded-lg px-4 py-2 mt-1"
              id="country"
              name="country"
              value={movie.country}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="genre" className="block font-medium">
              Жанр
            </label>
            <input
              className="w-full border rounded-lg px-4 py-2 mt-1"
              id="genre"
              name="genre"
              value={movie.genre}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="type" className="block font-medium">
              Тип
            </label>
            <select
              className="w-full border rounded-lg px-4 py-2 mt-1"
              id="type"
              name="type"
              value={movie.type}
              onChange={handleChange}
            >
              <option value="FILM">FILM</option>
              <option value="TV_SERIES">TV_SERIES</option>
              <option value="MINI_SERIES">MINI_SERIES</option>
            </select>
          </div>

          <div>
            <label htmlFor="ratingAgeLimits" className="block font-medium">
              Возрастной рейтинг
            </label>
            <input
              className="w-full border rounded-lg px-4 py-2 mt-1"
              id="ratingAgeLimits"
              name="ratingAgeLimits"
              placeholder="age16+"
              value={movie.ratingAgeLimits}
              onChange={handleChange}
            />
          </div>
        </div>
      </section>

      {/* Рейтинги */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Рейтинги</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="ratingKinopoisk" className="block font-medium">
              Рейтинг Кинопоиска
            </label>
            <input
              className="w-full border rounded-lg px-4 py-2 mt-1"
              id="ratingKinopoisk"
              name="ratingKinopoisk"
              type="number"
              step="0.1"
              min="0"
              max="10"
              value={movie.ratingKinopoisk}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="ratingImdb" className="block font-medium">
              Рейтинг IMDb
            </label>
            <input
              className="w-full border rounded-lg px-4 py-2 mt-1"
              id="ratingImdb"
              name="ratingImdb"
              type="number"
              step="0.1"
              min="0"
              max="10"
              value={movie.ratingImdb}
              onChange={handleChange}
            />
          </div>
        </div>
      </section>

      {/* Изображения */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Изображения</h2>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="posterUrl" className="block font-medium">
              Постер
            </label>
            <input
              className="w-full border rounded-lg px-4 py-2 mt-1"
              id="posterUrl"
              name="posterUrl"
              value={movie.posterUrl}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="posterUrlPreview" className="block font-medium">
              Превью постера
            </label>
            <input
              className="w-full border rounded-lg px-4 py-2 mt-1"
              id="posterUrlPreview"
              name="posterUrlPreview"
              value={movie.posterUrlPreview}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="coverUrl" className="block font-medium">
              Обложка
            </label>
            <input
              className="w-full border rounded-lg px-4 py-2 mt-1"
              id="coverUrl"
              name="coverUrl"
              value={movie.coverUrl}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="logoUrl" className="block font-medium">
              Логотип
            </label>
            <input
              className="w-full border rounded-lg px-4 py-2 mt-1"
              id="logoUrl"
              name="logoUrl"
              value={movie.logoUrl}
              onChange={handleChange}
            />
          </div>
        </div>
      </section>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg disabled:opacity-50"
      >
        {isLoading ? "Создание..." : "Создать фильм"}
      </button>

      {error && (
        <p className="text-red-500 text-center">Ошибка при создании фильма</p>
      )}
    </form>
  );
}
