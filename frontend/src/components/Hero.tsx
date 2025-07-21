import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
     
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/80" />
     
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Span Sam<span className="text-secondary">.AI</span>
          </h1>
         
          <p className="text-xl md:text-2xl mb-4 font-medium">
            Instant Price Quotes for Local Services
          </p>
         
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Connect customers with trusted South African service providers.
            Get quotes instantly via AI and WhatsApp integration.
          </p>
         
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => navigate('/get-quote')}
            >
              Get Quote Now
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
              onClick={() => navigate('/for-providers')}
            >
              Join as Provider
            </Button>
          </div>
         
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <Zap className="text-secondary" size={24} />
              <span className="text-sm">AI-Powered Quotes</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Users className="text-secondary" size={24} />
              <span className="text-sm">Verified Providers</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="text-secondary" size={24} />
              <span className="text-sm">Instant Responses</span>
            </div>
          </div>
        </div>
      </div>
     
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;