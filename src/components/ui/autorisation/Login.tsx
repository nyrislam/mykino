import { useState } from "react";
import { useLoginMutation } from "../../../services/myapi";
import { useDispatch } from "react-redux";
import { setDateUser } from "../../../features/loginSlice";

export default function Login() {
  const [email, setGmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(login);

    try {
      const form = new URLSearchParams();
      form.append("username", email);
      form.append("password", password);

      const result = await login(form).unwrap();
      localStorage.setItem("token", result.access_token);
      dispatch(setDateUser({ username: email, isAuth: true }));
      console.log("Logged in user:", result);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="flex items-center justify-center mb-4">Войти в аккаунт</h1>
      <div>
        <label htmlFor="gmail">Электронная почта</label>
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="gmail"
          type="email"
          placeholder="Введите вашу почту"
          value={email}
          onChange={(e) => setGmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Пароль</label>
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="password"
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
        disabled={isLoading}
      >
        {isLoading ? "Загрузка..." : "Войти"}
      </button>

      {error && <p>Ошибка запроса</p>}
    </form>
  );
}
