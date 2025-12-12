import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* SEO-friendly URLs */}
            <Route path="/about-bruno" element={<About />} />
            <Route path="/projects-portfolio" element={<Projects />} />
            <Route path="/services-web-app-developer" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            {/* Redirects for old URLs */}
            <Route path="/about" element={<Navigate to="/about-bruno" replace />} />
            <Route path="/projects" element={<Navigate to="/projects-portfolio" replace />} />
            <Route path="/services" element={<Navigate to="/services-web-app-developer" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
