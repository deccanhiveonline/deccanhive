import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    const handleScroll = () => {
      setShowWhatsApp(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 lg:py-32">
        <AnimatedBackground />

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <div className="inline-flex items-center bg-red-500/10 border border-red-500/20 rounded-full px-6 py-3 mb-8">
            <Search className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-red-500 font-semibold">Page Not Found</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
            <span className="text-yellow-400">404</span>
          </h1>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            OOPS! PAGE NOT <span className="text-yellow-400">FOUND</span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/70 mb-16 max-w-3xl mx-auto leading-relaxed">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/')}
            >
              <Home className="mr-2 w-5 h-5" />
              Back to Home
            </Button>
            
            <Button 
              variant="outline" 
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-8 py-4 text-lg rounded-full transition-all duration-300"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go Back
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <button 
              onClick={() => navigate('/services')}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-yellow-400/5 hover:border-yellow-400/30 transition-all duration-300 group"
            >
              <h3 className="font-bold text-white group-hover:text-yellow-400 transition-colors">Services</h3>
              <p className="text-white/60 text-sm mt-1">Our offerings</p>
            </button>
            
            <button 
              onClick={() => navigate('/portfolio')}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-yellow-400/5 hover:border-yellow-400/30 transition-all duration-300 group"
            >
              <h3 className="font-bold text-white group-hover:text-yellow-400 transition-colors">Portfolio</h3>
              <p className="text-white/60 text-sm mt-1">Our work</p>
            </button>
            
            <button 
              onClick={() => navigate('/blog')}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-yellow-400/5 hover:border-yellow-400/30 transition-all duration-300 group"
            >
              <h3 className="font-bold text-white group-hover:text-yellow-400 transition-colors">Blog</h3>
              <p className="text-white/60 text-sm mt-1">Insights</p>
            </button>
            
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-yellow-400/5 hover:border-yellow-400/30 transition-all duration-300 group"
            >
              <h3 className="font-bold text-white group-hover:text-yellow-400 transition-colors">Contact</h3>
              <p className="text-white/60 text-sm mt-1">Get in touch</p>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
