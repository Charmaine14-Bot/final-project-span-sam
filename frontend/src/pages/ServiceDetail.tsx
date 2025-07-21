// src/pages/ServiceDetail.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getServiceById } from "../lib/api";
import { QuoteForm } from "../components/QuoteForm";

interface Service {
  id: string;
  name: string;
  description: string;
  features?: string[];
  price?: string;
  duration?: string;
}

interface ServiceDetailState {
  service: Service | null;
  loading: boolean;
  error: string | null;
}

// Elegant CSS classes organized by component sections
const styles = {
  // Layout & Container
  container: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50",
  wrapper: "container mx-auto px-6 py-16",
  content: "max-w-5xl mx-auto space-y-12",
  
  // Typography & Headers
  mainTitle: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6 text-center",
  description: "text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed text-center",
  sectionTitle: "text-2xl font-semibold text-white flex items-center gap-3",
  
  // Cards & Surfaces
  heroCard: "bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl shadow-xl shadow-slate-200/50 p-8 text-center",
  quoteCard: "bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden",
  cardHeader: "bg-gradient-to-r from-slate-800 to-slate-700 px-8 py-6",
  cardBody: "p-8",
  
  // States & Feedback
  loadingContainer: "flex items-center justify-center min-h-96",
  loadingSpinner: "relative",
  spinnerOuter: "w-16 h-16 border-4 border-slate-200 border-t-slate-600 rounded-full animate-spin",
  spinnerInner: "absolute inset-0 w-16 h-16 border-4 border-transparent border-r-slate-400 rounded-full animate-spin",
  
  // Error & Not Found
  errorCard: "max-w-md mx-auto text-center bg-red-50/90 backdrop-blur-sm border border-red-200 rounded-xl p-8 shadow-lg",
  errorIcon: "text-red-400 text-4xl mb-4",
  errorText: "text-red-800 font-medium",
  
  notFoundCard: "max-w-md mx-auto text-center bg-amber-50/90 backdrop-blur-sm border border-amber-200 rounded-xl p-8 shadow-lg",
  notFoundIcon: "text-amber-400 text-4xl mb-4",
  notFoundText: "text-amber-800 font-medium",
} as const;

// Elegant Loading Component
const LoadingSpinner = () => (
  <div className={styles.loadingContainer}>
    <div className={styles.loadingSpinner}>
      <div className={styles.spinnerOuter}></div>
      <div className={`${styles.spinnerInner} animation-delay-150`}></div>
    </div>
  </div>
);

// Error Display Component
const ErrorDisplay = ({ message }: { message: string }) => (
  <div className={styles.errorCard}>
    <div className={styles.errorIcon}>⚠️</div>
    <p className={styles.errorText}>
      Something went wrong: {message}
    </p>
  </div>
);

// Not Found Display Component
const NotFoundDisplay = () => (
  <div className={styles.notFoundCard}>
    <div className={styles.notFoundIcon}>🔍</div>
    <p className={styles.notFoundText}>
      The requested service could not be found
    </p>
  </div>
);

// Service Header Component
const ServiceHeader = ({ service }: { service: Service }) => (
  <div className={styles.heroCard}>
    <h1 className={styles.mainTitle}>
      {service.name}
    </h1>
    <p className={styles.description}>
      {service.description}
    </p>
  </div>
);

// Quote Section Component
const QuoteSection = ({ service }: { service: Service }) => (
  <section className={styles.quoteCard}>
    <header className={styles.cardHeader}>
      <h2 className={styles.sectionTitle}>
        <span className="text-2xl">📋</span>
        Request Quote for {service.name}
      </h2>
    </header>
    <div className={styles.cardBody}>
      <QuoteForm initialService={service.name} />
    </div>
  </section>
);

// Main ServiceDetail Component
export function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const [state, setState] = useState<ServiceDetailState>({
    service: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchService = async () => {
      if (!id) {
        setState(prev => ({ 
          ...prev, 
          error: "Service ID is required", 
          loading: false 
        }));
        return;
      }

      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const serviceData = await getServiceById(id);
        setState(prev => ({ 
          ...prev, 
          service: serviceData, 
          loading: false 
        }));
      } catch (err) {
        const errorMessage = err instanceof Error 
          ? err.message 
          : "An unexpected error occurred";
        setState(prev => ({ 
          ...prev, 
          error: errorMessage, 
          loading: false 
        }));
      }
    };

    fetchService();
  }, [id]);

  const renderContent = () => {
    if (state.loading) return <LoadingSpinner />;
    if (state.error) return <ErrorDisplay message={state.error} />;
    if (!state.service) return <NotFoundDisplay />;

    return (
      <>
        <ServiceHeader service={state.service} />
        <QuoteSection service={state.service} />
      </>
    );
  };

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {renderContent()}
        </div>
      </div>
    </main>
  );
}

// Default export for routing
export default ServiceDetail;