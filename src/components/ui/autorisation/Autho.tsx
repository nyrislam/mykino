import { useState } from "react";
import { useAuthoMutation } from "../../../services/myapi";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setGmail] = useState("");
  const [password, setPassword] = useState("");

  const [autho, { isLoading, error }] = useAuthoMutation();
  function sendhendel() {
    return autho({ username, email, password });
  }
  return (
    <form>
      <h1 className="flex items-center justify-center mb-4">
        Зарегистрироваться
      </h1>
      <div>
        <label htmlFor="username">Имя пользователя</label>
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="username"
          type="text"
          placeholder="Введите имя"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="gmail">Электронная почта</label>
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="gmail"
          type="email"
          placeholder="Введите вашу почту"
          onChange={(e) => setGmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Пароль</label>
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="password"
          type="password"
          placeholder="Придумайте пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
        disabled={isLoading}
        onClick={() => sendhendel()}
      >
        {isLoading ? "Отправка..." : "Отправить"}
      </button>

      {error && <p>Ошибка запроса</p>}
    </form>
  );
}
