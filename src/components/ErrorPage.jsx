// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6">
      <h1 className="text-9xl font-bold text-green-500">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mt-4">
        Page Not Found
      </h2>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
