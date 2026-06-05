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
      <div>
        <label htmlFor="username">Username</label>
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="username"
          type="text"
          placeholder="Your name"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="gmail">Gmail</label>
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="gmail"
          type="email"
          placeholder="Your gmail"
          onChange={(e) => setGmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="password"
          type="password"
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" disabled={isLoading} onClick={() => sendhendel()}>
        {isLoading ? "Отправка..." : "Отправить"}
      </button>

      {error && <p>Ошибка запроса</p>}
    </form>
  );
}
