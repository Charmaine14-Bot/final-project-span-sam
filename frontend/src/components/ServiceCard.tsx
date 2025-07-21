// src/components/ServiceCard.tsx
import { Link } from "react-router-dom";

export function ServiceCard({ service }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <Link
        to={`/services/${service.id}`}
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Get Quote
      </Link>
    </div>
  );
}