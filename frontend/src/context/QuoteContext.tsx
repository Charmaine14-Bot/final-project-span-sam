// This file defines the QuoteContext for managing quotes in a React application.
import { createContext, useContext, useState } from "react";
import { getQuotes, createQuote } from "../lib/api";

const QuoteContext = createContext();

export function QuoteProvider({ children }) {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuotes = async (userId) => {
    setLoading(true);
    setError(null);
    try {
      const quotesData = await getQuotes(userId);
      setQuotes(quotesData);
      return quotesData;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const submitQuote = async (quoteData) => {
    setLoading(true);
    setError(null);
    try {
      const newQuote = await createQuote(quoteData);
      setQuotes(prev => [...prev, newQuote]);
      return newQuote;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <QuoteContext.Provider value={{ quotes, loading, error, fetchQuotes, submitQuote }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuoteContext() {
  return useContext(QuoteContext);
}