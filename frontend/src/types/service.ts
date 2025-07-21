// src/types/service.ts
export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  averagePrice: number;
  providersCount: number;
}

export interface ServiceCategory {
  id: string;
  name: string;
  services: Service[];
}