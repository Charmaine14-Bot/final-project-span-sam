import { Smartphone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Span_Sam<span className="text-secondary">.AI</span>
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Connecting South African customers with trusted local service providers 
              through AI-powered quotes and WhatsApp integration.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MessageCircle size={16} />
              <span>WhatsApp: (+27) 71 234 5678</span>
            </div>
          </div>
          
          {/* For Customers */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Customers</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-secondary transition-colors">Get Quote</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Service Categories</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Customer Reviews</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Help & Support</a></li>
            </ul>
          </div>
          
          {/* For Providers */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Providers</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-secondary transition-colors">Join as Provider</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Provider Dashboard</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Training & Resources</a></li>
            </ul>
          </div>
          
          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@localquote.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone size={16} />
                <span>+27 XXX XXX XXXX</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Cape Town, South Africa</span>
              </div>
            </div>
            
            <div className="mt-6 space-y-2 text-primary-foreground/80">
              <div><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></div>
              <div><a href="#" className="hover:text-secondary transition-colors">Terms of Service</a></div>
              <div><a href="#" className="hover:text-secondary transition-colors">About Us</a></div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} LocalQuote.AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <span>Proudly South African 🇿🇦</span>
              <span>AI-Powered Platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;