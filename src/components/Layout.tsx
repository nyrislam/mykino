import { Outlet } from "react-router";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
