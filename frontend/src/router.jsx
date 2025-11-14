import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// Lazy-loaded pages for better performance
const Home = lazy(() => import("@/pages/Home/Home"));
const WhoWeAre = lazy(() => import("@/pages/WhoWeAre/WhoWeAre"));
const Portfolio = lazy(() => import("@/pages/Portfolio/Portfolio"));
import ItSolution from "@/pages/ItSolution/ItSolution";
const Gallery = lazy(() => import("@/pages/Gallery/Gallery"));
const Technologies = lazy(() => import("@/pages/Technologies/Technologies"));
const Blogs = lazy(() => import("@/pages/Blog/Blogs"));
const Careers = lazy(() => import("@/pages/Careers/Careers"));
const ContactUs = lazy(() => import("@/pages/Contact-Us/ContactUs"));
const NotFound = lazy(() => import("@/pages/NotFound/NotFound")); // optional 404 page

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

// Error boundary for fallback UI during lazy load failures
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex justify-center items-center min-h-[60vh] text-red-600 text-lg font-semibold">
          Something went wrong while loading this page.
        </div>
      );
    }
    return this.props.children;
  }
}

export default function Router() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main className="flex-grow min-h-[80vh] m-0 p-0 w-full">
        <ErrorBoundary>
          <Suspense
            fallback={<div className="py-10 text-center">Loading...</div>}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/who-we-are" element={<WhoWeAre />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/it-solutions" element={<ItSolution />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />
    </>
  );
}
