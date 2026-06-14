export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Логотип / название */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-800">MyKino</h2>
          <p className="mt-2 text-sm text-gray-600">
            Современные решения для вашего бизнеса
          </p>
        </div>
        {/* Нижняя строка */}
        <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MyKino. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
