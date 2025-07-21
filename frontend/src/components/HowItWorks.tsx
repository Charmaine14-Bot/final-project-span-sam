import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Brain, Users, CheckCircle } from "lucide-react";
import aiQuoteIcon from "@/assets/ai-quote-icon.jpg";
import whatsappIcon from "@/assets/whatsapp-integration-icon.jpg";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Describe Your Job",
      description: "Tell us what you need in plain language. Our AI understands your requirements and creates a detailed job description.",
      image: whatsappIcon
    },
    {
      icon: <Brain className="w-8 h-8 text-secondary" />,
      title: "AI Generates Smart Quotes",
      description: "Our AI analyzes your job and provides recommended pricing ranges based on local market rates.",
      image: aiQuoteIcon
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Connect with Providers",
      description: "Verified local service providers receive your request and send back competitive quotes via WhatsApp.",
      image: null
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-secondary" />,
      title: "Choose & Book",
      description: "Compare quotes, reviews, and availability. Select the best provider and get your job done.",
      image: null
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting quotes for local services has never been easier. 
            Our AI-powered platform connects you with trusted providers in minutes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Icon or Image */}
                <div className="mb-6 flex justify-center">
                  {step.image ? (
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;