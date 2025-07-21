// src/components/PricingPlans.tsx
export function PricingPlans() {
  const plans = [
    {
      name: "Master",
      price: "Free",
      features: [
        "5 quotes per month",
        "Basic profile",
        "Customer reviews",
        "WhatsApp integration"
      ],
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "R99/month",
      features: [
        "Unlimited quotes",
        "Priority listing",
        "Advanced analytics",
        "Custom branding",
        "Lead insights"
      ],
      cta: "Choose Plan"
    },
    {
      name: "Enterprise",
      price: "R299/month",
      features: [
        "Everything in Professional",
        "Featured placement",
        "API access",
        "Dedicated support",
        "White-label solutions"
      ],
      cta: "Choose Plan"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}