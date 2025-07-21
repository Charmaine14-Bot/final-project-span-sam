// src/types/user.ts
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  bio?: string;
  serviceType?: string;
  rating?: number;
  reviewsCount?: number;
  joinedAt: string;
}

export interface Provider extends UserProfile {
  servicesOffered: string[];
  yearsOfExperience: number;
  startingPrice: number;
  portfolio?: string[];
}