
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-bold text-ocean mb-4">404</h1>
        <p className="text-3xl font-medium text-gray-800 mb-6">Page Not Found</p>
        <p className="text-gray-600 mb-8">
          We're sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="hero-button primary-button inline-flex items-center">
          <ArrowLeft size={16} className="mr-2" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
