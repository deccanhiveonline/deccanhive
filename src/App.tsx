import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"; // Import Vercel Analytics

import Index from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

// Add the new blog post routes
// Changed from '@/pages/BlogPosts/BlogPost1' to './pages/BlogPosts/BlogPost1' for direct resolution
import BlogPost1 from './pages/BlogPosts/BlogPost1';
// Changed from '@/pages/BlogPosts/BlogPost2' to './pages/BlogPosts/BlogPost2' for direct resolution
import BlogPost2 from './pages/BlogPosts/BlogPost2';

/**
 * ScrollToTop component scrolls the window to the top whenever the pathname changes.
 * This ensures that when navigating between pages, the user always starts at the top.
 */
function ScrollToTop() {
  const { pathname } = useLocation(); // Get the current pathname from the URL

  useEffect(() => {
    // Scroll to the top of the window when the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array: re-run effect when pathname changes

  return null; // This component doesn't render anything
}

/**
 * Main App component that sets up routing and includes Vercel Analytics.
 */
function App() {
  return (
    <Router>
      {/* ScrollToTop component ensures page scrolls to top on route change */}
      <ScrollToTop />
      {/* Routes define the different paths and their corresponding components */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />

        {/* Blog Post Routes */}
        <Route path="/blog/local-seo-strategies-2024" element={<BlogPost1 />} />
        <Route path="/blog/optimize-google-ads-roi" element={<BlogPost2 />} />

        {/* Catch-all route for any undefined paths, leading to a NotFound component */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Vercel Analytics component for web analytics */}
      <Analytics />
    </Router>
  );
}

export default App;
