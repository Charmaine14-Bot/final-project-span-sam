// src/types/quote.ts
export interface Quote {
  id: string;
  serviceType: string;
  description: string;
  location: string;
  urgency: "regular" | "urgent";
  status: "pending" | "received" | "completed";
  customerId: string;
  providerId?: string;
  price?: number;
  createdAt: string;
  updatedAt: string;
}

export interface QuoteResponse {
  id: string;
  providerId: string;
  quoteId: string;
  price: number;
  message?: string;
  createdAt: string;
}