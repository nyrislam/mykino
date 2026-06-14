import { useState } from "react";
import Login from "./Login";
import Autho from "./Autho";

export default function Main() {
  const [tab, setTab] = useState("login");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {/* Forms */}
        {tab === "login" ? <Login /> : <Autho />}
        {/* Tabs text switch */}
        <div className="mt-4 text-center text-sm text-gray-600">
          {tab === "login" ? (
            <p>
              Нет аккаунта?{" "}
              <span
                onClick={() => setTab("register")}
                className="text-teal-500 cursor-pointer hover:underline"
              >
                Зарегистрироваться
              </span>
            </p>
          ) : (
            <p>
              Уже есть аккаунт?{" "}
              <span
                onClick={() => setTab("login")}
                className="text-teal-500 cursor-pointer hover:underline"
              >
                Войти
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
