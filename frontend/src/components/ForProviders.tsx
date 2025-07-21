import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Smartphone, BarChart, Users, Zap } from "lucide-react";

const ForProviders = () => {
  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-secondary" />,
      title: "Qualified Leads",
      description: "Only receive requests from customers who are serious about hiring."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-secondary" />,
      title: "Mobile-First",
      description: "Manage your business on the go with our WhatsApp integration."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-secondary" />,
      title: "Grow Your Business",
      description: "Reach more customers and increase your revenue with our platform."
    },
    {
      icon: <BarChart className="w-6 h-6 text-secondary" />,
      title: "Analytics & Insights",
      description: "Track your performance and optimize your pricing strategies."
    },
    {
      icon: <Users className="w-6 h-6 text-secondary" />,
      title: "Build Your Reputation",
      description: "Collect reviews and build trust with potential customers."
    },
    {
      icon: <Zap className="w-6 h-6 text-secondary" />,
      title: "Instant Notifications",
      description: "Get notified immediately when new job opportunities arise."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Perfect for getting started",
      features: [
        "5 quotes per month",
        "Basic profile",
        "Customer reviews",
        "WhatsApp integration"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "R99",
      period: "/month",
      description: "For growing businesses",
      features: [
        "Unlimited quotes",
        "Priority listing",
        "Advanced analytics",
        "Custom branding",
        "Lead insights"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "R299",
      period: "/month",
      description: "For established providers",
      features: [
        "Everything in Professional",
        "Featured placement",
        "API access",
        "Dedicated support",
        "White-label solutions"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            For <span className="text-secondary">Service Providers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of verified professionals who are growing their businesses 
            with LocalQuote.AI. Get more customers, better leads, and higher profits.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Start free and upgrade as your business grows. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-card hover:shadow-elegant transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-secondary scale-105' : ''
              }`}
            >
              <CardContent className="p-8 text-center">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "cta" : "outline"} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.price === "Free" ? "Get Started" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForProviders;