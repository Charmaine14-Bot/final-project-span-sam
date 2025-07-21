// src/components/TestimonialCard.tsx
export function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.location}</p>
        </div>
      </div>
      <p className="text-gray-700">"{testimonial.content}"</p>
      <div className="flex mt-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
      </div>
    </div>
  );
}