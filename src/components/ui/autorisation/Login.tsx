import { useState } from "react";
import { useLoginMutation } from "../../../services/myapi";
import { useDispatch } from "react-redux";
import { setDateUser } from "../../../features/loginSlice";

export default function Login() {
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const [login, { isLoading, error }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await login({ gmail, password }).unwrap();

      dispatch(setDateUser({ username: result }));
      console.log("Logged in user:", result);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="gmail">Gmail</label>
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="gmail"
          type="email"
          placeholder="Your gmail"
          value={gmail}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Login"}
      </button>

      {error && <p>Ошибка запроса</p>}
    </form>
  );
}
