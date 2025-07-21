// src/components/QuoteForm.tsx
import { useState } from "react";

export function QuoteForm() {
  const [formData, setFormData] = useState({
    serviceType: "",
    description: "",
    location: "",
    urgency: "regular"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Get a Quote</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Service Type</label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select a service</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="cleaning">Cleaning</option>
            <option value="tiling">Tiling</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            rows={4}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Urgency</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="urgency"
                value="regular"
                checked={formData.urgency === "regular"}
                onChange={handleChange}
                className="mr-2"
              />
              Regular
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="urgency"
                value="urgent"
                checked={formData.urgency === "urgent"}
                onChange={handleChange}
                className="mr-2"
              />
              Urgent
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Get Quotes
        </button>
      </form>
    </div>
  );
}