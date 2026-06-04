import Autho from "./Autho";
import Login from "./Login";

export default function Main() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <Login />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Authorization</h2>
          <Autho />
        </div>
      </div>
    </div>
  );
}
