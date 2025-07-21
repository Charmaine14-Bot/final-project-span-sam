// src/pages/Terms.tsx
export function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          <div className="prose">
            <h2 className="text-xl font-bold mt-6 mb-4">1. Introduction</h2>
            <p>
              Welcome to SpanSam.AI. These Terms of Service govern your use of our platform.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-4">2. User Responsibilities</h2>
            <p>
              You agree to use the platform only for lawful purposes and in accordance with these Terms.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-4">3. Service Providers</h2>
            <p>
              Providers are responsible for the quality of their services and compliance with all applicable laws.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-4">4. Payments</h2>
            <p>
              Premium plans require payment. All fees are non-refundable unless otherwise stated.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-4">5. Limitation of Liability</h2>
            <p>
              SpanSam.AI is not liable for any damages resulting from the use of our platform or services.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-4">6. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. Continued use constitutes acceptance of the new Terms.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-4">7. Governing Law</h2>
            <p>
              These Terms are governed by the laws of South Africa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}