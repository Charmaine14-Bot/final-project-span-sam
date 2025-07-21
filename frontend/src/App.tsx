// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { QuoteProvider } from "./context/QuoteContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/Header";
import Footer  from "./components/Footer";

// Pages
import Index from "./pages/Index"; 
import NotFound  from "./pages/NotFound";
import { GetQuote } from "./pages/GetQuote";
import { Services } from "./pages/Services";
import { ServiceDetail } from "./pages/ServiceDetail";
import { ProviderSignup } from "./pages/ProviderSignup";
import { ProviderLogin } from "./pages/ProviderLogin";
import { ProviderDashboard } from "./pages/ProviderDashboard";
import { CustomerDashboard } from "./pages/CustomerDashboard";
import { Profile } from "./pages/Profile";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Terms } from "./pages/Terms";
import { Privacy } from "./pages/Privacy";
import { Pricing } from "./pages/Pricing";

function App() {
  return (
    <Router>
      <AuthProvider>
        <QuoteProvider>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/get-quote" element={<GetQuote />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/:id" element={<ServiceDetail />} />
                  <Route path="/provider-signup" element={<ProviderSignup />} />
                  <Route path="/provider-login" element={<ProviderLogin />} />
                  <Route path="/provider-dashboard" element={<ProviderDashboard />} />
                  <Route path="/customer-dashboard" element={<CustomerDashboard />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </QuoteProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
