// src/pages/About.tsx
export function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">About SpanSam.AI</h1>
          <p className="text-gray-700 mb-4">
            SpanSam.AI is an AI-powered platform connecting South African customers with trusted local service providers through instant quotes and WhatsApp integration.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to simplify the process of finding and hiring service professionals, while helping providers grow their businesses.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-4">How It Works</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li className="text-gray-700">Customers describe their job in plain English</li>
            <li className="text-gray-700">Our AI generates smart job requirements</li>
            <li className="text-gray-700">Verified providers receive the request and send quotes via WhatsApp</li>
            <li className="text-gray-700">Customers compare quotes and choose the best provider</li>
          </ol>
          <h2 className="text-xl font-bold mt-6 mb-4">Our Team</h2>
          <p className="text-gray-700">
            We're a team of passionate South Africans building solutions to make local services more accessible and efficient.
          </p>
        </div>
      </div>
    </div>
  );
}