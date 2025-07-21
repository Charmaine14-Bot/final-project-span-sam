// src/pages/GetQuote.tsx
import { QuoteForm } from "../components/QuoteForm";

export function GetQuote() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Get a Quote</h1>
        <QuoteForm />
      </div>
    </div>
  );
}