// src/pages/ProviderDashboard.tsx
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useQuoteContext } from "../context/QuoteContext";

export function ProviderDashboard() {
  const { user } = useAuthContext();
  const { quotes, fetchQuotes } = useQuoteContext();

  useEffect(() => {
    if (user) {
      fetchQuotes(user.id);
    }
  }, [user, fetchQuotes]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Provider Dashboard</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Your Quotes</h2>
          {quotes.length === 0 ? (
            <p>No quotes available</p>
          ) : (
            <div className="space-y-4">
              {quotes.map(quote => (
                <div key={quote.id} className="border p-4 rounded-md">
                  <h3 className="font-bold">{quote.serviceType}</h3>
                  <p className="text-gray-600">{quote.description}</p>
                  <p className="text-sm text-gray-500">
                    {quote.location} • {quote.urgency}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}