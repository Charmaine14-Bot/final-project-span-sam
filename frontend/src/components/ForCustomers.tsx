import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Smartphone, DollarSign, Star, MessageCircle } from "lucide-react";

const ForCustomers = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Instant Quotes",
      description: "Get multiple quotes in minutes, not days. Our AI speeds up the entire process."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Verified Providers",
      description: "All service providers are background checked and verified for your safety."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      title: "WhatsApp Integration",
      description: "Communicate directly with providers through WhatsApp for easy coordination."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "Competitive Pricing",
      description: "Compare multiple quotes to ensure you get the best value for your money."
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Rated Reviews",
      description: "Read genuine reviews from other customers to make informed decisions."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
      title: "24/7 Support",
      description: "Our customer support team is available to help whenever you need assistance."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              For <span className="text-primary">Customers</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Need a service? Simply describe what you need and watch as qualified 
              local providers compete for your business with competitive quotes.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Describe your job in plain English</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">AI generates smart job requirements</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Receive multiple quotes via WhatsApp</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Choose the best provider and get it done</p>
              </div>
            </div>
            
            <Button variant="hero" size="lg" className="px-8">
              Get Your First Quote Free
            </Button>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCustomers;