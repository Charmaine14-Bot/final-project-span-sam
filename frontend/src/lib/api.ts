// src/lib/api.ts
const API_URL = import.meta.env.VITE_API_URL;

// Mock data for services when API is not available
const mockServices = [
  {
    id: 1,
    title: "Plumbing",
    category: "plumbing",
    description: "Professional plumbing services including pipe repairs, installations, and emergency fixes",
    price: "From R300",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    title: "Electrical",
    category: "electrical",
    description: "Licensed electrical work including wiring, repairs, installations, and safety checks",
    price: "From R400",
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 98
  },
  {
    id: 3,
    title: "Welding",
    category: "welding",
    description: "Expert welding services for metal fabrication, repairs, and custom work",
    price: "From R500",
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 67
  },
  {
    id: 4,
    title: "Painting",
    category: "painting",
    description: "Professional painting services for interior, exterior, and commercial properties",
    price: "From R250",
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 156
  },
  {
    id: 5,
    title: "Tiling",
    category: "tiling",
    description: "Quality tiling services for floors, walls, and bathroom renovations",
    price: "From R350",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 89
  },
  {
    id: 6,
    title: "Tutoring",
    category: "tutoring",
    description: "Professional tutoring in math, science, languages, and exam preparation",
    price: "From R200",
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 234
  },
  {
    id: 7,
    title: "Automotive",
    category: "automotive",
    description: "Reliable automotive services including car repairs, maintenance, and diagnostics",
    price: "From R450",
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 112
  },
  {
    id: 8,
    title: "Cleaning",
    category: "cleaning",
    description: "Professional cleaning services for homes, offices, and deep cleaning",
    price: "From R180",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 198
  }
];

export async function getQuotes(userId: string) {
  try {
    if (!API_URL) {
      throw new Error("API URL not configured");
    }
    
    const response = await fetch(`${API_URL}/quotes?userId=${userId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text();
    if (!text) {
      return [];
    }
    
    return JSON.parse(text);
  } catch (error) {
    console.error('Error fetching quotes:', error);
    // Return empty array as fallback
    return [];
  }
}

export async function createQuote(quoteData: any) {
  try {
    if (!API_URL) {
      throw new Error("API URL not configured");
    }
    
    const response = await fetch(`${API_URL}/quotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(quoteData)
    });
    
    if (!response.ok) {
      const text = await response.text();
      let errorMessage = "Failed to create quote";
      
      try {
        const error = JSON.parse(text);
        errorMessage = error.message || errorMessage;
      } catch {
        errorMessage = `HTTP error! status: ${response.status}`;
      }
      
      throw new Error(errorMessage);
    }
    
    const text = await response.text();
    return text ? JSON.parse(text) : {};
  } catch (error) {
    console.error('Error creating quote:', error);
    throw error;
  }
}

export async function getServices() {
  try {
    if (!API_URL) {
      console.warn('API URL not configured, using mock data');
      return mockServices;
    }
    
    const response = await fetch(`${API_URL}/services`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text();
    if (!text) {
      console.warn('Empty response from API, using mock data');
      return mockServices;
    }
    
    const data = JSON.parse(text);
    return Array.isArray(data) ? data : mockServices;
  } catch (error) {
    console.error('Error fetching services:', error);
    console.log('Falling back to mock data');
    return mockServices;
  }
}

export async function getServiceById(id: string | number) {
  try {
    if (!API_URL) {
      const service = mockServices.find(s => s.id === Number(id));
      if (!service) {
        throw new Error("Service not found");
      }
      return service;
    }
    
    const response = await fetch(`${API_URL}/services/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text();
    if (!text) {
      throw new Error("Service not found");
    }
    
    return JSON.parse(text);
  } catch (error) {
    console.error('Error fetching service:', error);
    
    // Try to find in mock data as fallback
    const service = mockServices.find(s => s.id === Number(id));
    if (service) {
      return service;
    }
    
    throw new Error("Service not found");
  }
}