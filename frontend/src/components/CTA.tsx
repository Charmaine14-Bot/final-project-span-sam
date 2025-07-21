import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Join thousands of South Africans already using LocalQuote.AI
          </p>
          <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
            Whether you need a service or provide one, our AI-powered platform 
            connects you with the right people at the right price.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="text-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-4 mb-2 transform hover:scale-105 transition-all duration-300"
              >
                <Smartphone className="mr-2" />
                Get Quote Now
                <ArrowRight className="ml-2" />
              </Button>
              <p className="text-sm opacity-75">For Customers</p>
            </div>
            
            <div className="hidden sm:block text-white/50 text-2xl font-light">or</div>
            
            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 mb-2 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300"
              >
                Join as Provider
                <ArrowRight className="ml-2" />
              </Button>
              <p className="text-sm opacity-75">For Service Providers</p>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-sm opacity-75">Verified Providers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-sm opacity-75">Jobs Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.8★</div>
              <div className="text-sm opacity-75">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;