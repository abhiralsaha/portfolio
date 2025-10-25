import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ComingSoon from "./pages/ComingSoon";
import WelderFramework from "./pages/WelderFramework";
import BillingSystem from "./pages/BillingSystem";
import ImageProcessingAPI from "./pages/ImageProcessingAPI";
import JSIExpertise from "./pages/JSIExpertise";
import CetpaExpertise from "./pages/CetpaExpertise";
import FreelanceExpertise from "./pages/FreelanceExpertise";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/welder-framework" element={<WelderFramework />} />
          <Route path="/billing-system" element={<BillingSystem />} />
          <Route path="/image-processing-api" element={<ImageProcessingAPI />} />
          <Route path="/jsi-expertise" element={<JSIExpertise />} />
          <Route path="/cetpa-expertise" element={<CetpaExpertise />} />
          <Route path="/freelance-expertise" element={<FreelanceExpertise />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;