import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ServiceCard } from "../components/ServiceCard";
import { getServices } from "../lib/api";

export function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesData = await getServices();
        setServices(servicesData);
      } catch (err: any) {
        setError(err.message || 'Failed to load services');
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // Filter services based on category if provided
  const filteredServices = category 
    ? services.filter(service => 
        service.category?.toLowerCase() === category.toLowerCase() ||
        service.title?.toLowerCase().includes(category.toLowerCase())
      )
    : services;

  if (loading) return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-xl">Loading services...</div>
        </div>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-red-500 text-xl">Error: {error}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Services` : 'Our Services'}
        </h1>
        
        {category && (
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Showing services for: <span className="font-semibold">{category}</span>
            </p>
          </div>
        )}

        {filteredServices.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {category ? `No services found for "${category}"` : 'No services available'}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}