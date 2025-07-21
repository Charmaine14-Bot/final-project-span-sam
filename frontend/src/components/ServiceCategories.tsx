import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Wrench, 
  Zap, 
  Droplets, 
  Paintbrush, 
  Hammer, 
  GraduationCap,
  Car,
  Home,
  ArrowRight
} from "lucide-react";

const ServiceCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Plumbing",
      description: "Pipe repairs, installations, emergency fixes",
      popular: true
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Electrical",
      description: "Wiring, repairs, installations, safety checks",
      popular: true
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Welding",
      description: "Metal fabrication, repairs, custom work",
      popular: false
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Painting",
      description: "Interior, exterior, commercial painting",
      popular: false
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Tiling",
      description: "Floor tiling, wall tiling, bathroom renovations",
      popular: true
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Tutoring",
      description: "Math, science, languages, exam prep",
      popular: false
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Automotive",
      description: "Car repairs, maintenance, diagnostics",
      popular: false
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Cleaning",
      description: "Home cleaning, deep cleaning, office cleaning",
      popular: true
    }
  ];

  const handleServiceClick = (serviceTitle: string) => {
    navigate(`/services?category=${serviceTitle.toLowerCase()}`);
  };

  const handleGetQuote = (serviceTitle: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/get-quote?service=${serviceTitle.toLowerCase()}`);
  };

  const handleViewAllServices = () => {
    navigate('/services');
  };

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Popular Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find trusted local professionals for all your service needs. 
            From emergency repairs to planned projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-card hover:shadow-elegant transition-all duration-300 group cursor-pointer ${
                category.popular ? 'ring-2 ring-secondary/20' : ''
              }`}
              onClick={() => handleServiceClick(category.title)}
            >
              <CardContent className="p-6">
                {category.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Popular
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                
                <div 
                  className="flex items-center text-primary text-sm font-medium group-hover:text-primary-glow transition-colors"
                  onClick={(e) => handleGetQuote(category.title, e)}
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="cta" 
            size="lg" 
            className="px-8"
            onClick={handleViewAllServices}
          >
            View All Services
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;