// src/pages/Pricing.tsx
import { PricingPlans } from "../components/PricingPlans";

export function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PricingPlans />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Start free and upgrade as your business grows</h2>
          <p className="text-gray-600 mb-8">
            No hidden fees, cancel anytime. Our plans are designed to scale with your business needs.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="text-left space-y-4">
              <div>
                <h4 className="font-medium">Can I switch plans later?</h4>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Is there a contract?</h4>
                <p className="text-gray-600">
                  No, all plans are month-to-month with no long-term commitment.
                </p>
              </div>
              <div>
                <h4 className="font-medium">How do I cancel?</h4>
                <p className="text-gray-600">
                  You can cancel anytime from your account settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}