// src/pages/Privacy.tsx
export function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <div className="prose">
            <h2 className="text-xl font-bold mt-6 mb-4">1. Information We Collect</h2>
            <p>
              We collect personal information you provide when using our platform, including name, contact details, and service requests.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-4">2. How We Use Your Information</h2>
            <p>
              Your information is used to provide our services, improve the platform, and communicate with you.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-4">3. Data Sharing</h2>
            <p>
              We may share your information with service providers to fulfill your requests, but we don't sell your data to third parties.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-4">4. Data Security</h2>
            <p>
              We implement security measures to protect your information, but no system is 100% secure.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-4">5. Your Rights</h2>
            <p>
              You may access, correct, or delete your personal information by contacting us.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-4">6. Cookies</h2>
            <p>
              We use cookies to improve your experience. You can disable cookies in your browser settings.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-4">7. Changes to This Policy</h2>
            <p>
              We may update this policy. Continued use constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}