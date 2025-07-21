// src/components/ProviderCard.tsx
export function ProviderCard({ provider }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
        <div>
          <h3 className="text-lg font-bold">{provider.name}</h3>
          <p className="text-gray-600">{provider.service}</p>
          <div className="flex items-center mt-1">
            <span className="text-yellow-400 mr-1">★</span>
            <span>{provider.rating} ({provider.reviews} reviews)</span>
          </div>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{provider.bio}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold">From R{provider.startingPrice}</span>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Contact
        </button>
      </div>
    </div>
  );
}