// src/types/auth.ts
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: "customer" | "provider";
  serviceType?: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone: string;
  serviceType?: string;
  role: "customer" | "provider";
}