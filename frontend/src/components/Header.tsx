import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
          SpanSam.AI
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/get-quote" className="text-gray-300 hover:text-blue-400 transition-colors">
            Get Quote
          </Link>
          <Link to="/how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors">
            How It Works
          </Link>
          <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
            Services
          </Link>
          <Link to="/for-providers" className="text-gray-300 hover:text-blue-400 transition-colors">
            For Providers
          </Link>
        </nav>
        <div className="flex space-x-4">
          <Link
            to="/provider-login"
            className="px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors"
          >
            Provider Login
          </Link>
          <Link
            to="/get-quote"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}