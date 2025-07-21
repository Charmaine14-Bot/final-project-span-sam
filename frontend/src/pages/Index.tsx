import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ServiceCategories from "@/components/ServiceCategories";
import ForCustomers from "@/components/ForCustomers";
import ForProviders from "@/components/ForProviders";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServiceCategories />
      <HowItWorks />
      <ForCustomers />
      <ForProviders />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
