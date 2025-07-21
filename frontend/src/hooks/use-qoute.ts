// src/hooks/use-quote.ts
import { useState } from "react";
import { createQuote, getQuotes } from "../lib/api";

export function useQuote() {
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

  return {
    quotes,
    loading,
    error,
    fetchQuotes,
    submitQuote
  };
}