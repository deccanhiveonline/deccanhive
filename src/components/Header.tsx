import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-yellow-400/20' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group relative z-60">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {/* White placeholder for custom logo */}
                <img 
                  src="/logo2.png" 
                  alt="Deccan Hive Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-lg text-white">DECCAN HIVE</div>
                <div className="text-xs text-white/60">DIGITAL MARKETING AGENCY</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-white hover:text-yellow-400 transition-all duration-300 font-medium relative group ${
                    location.pathname === item.path ? 'text-yellow-400' : ''
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button & Mobile/Tablet Menu */}
            <div className="flex items-center space-x-4">
              <Button 
                className="hidden lg:inline-flex bg-yellow-400 text-black hover:bg-yellow-300 font-semibold rounded-full transition-all duration-300 hover:scale-105"
                size="sm"
                asChild
              >
                <Link to="/contact">GET A QUOTE</Link>
              </Button>
              
              <button 
                onClick={toggleMenu}
                className="lg:hidden text-white hover:text-yellow-400 transition-colors relative z-60"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile & Tablet Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-black border-l border-yellow-400/20 transform transition-transform duration-300 z-50 lg:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="p-6 border-b border-yellow-400/20 bg-gradient-to-r from-black to-gray-900">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                {/* White placeholder for custom logo */}
                <img 
                  src="/logo2.png" 
                  alt="Deccan Hive Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-lg text-white">DECCAN HIVE</div>
                <div className="text-xs text-yellow-400/80">DIGITAL MARKETING AGENCY</div>
              </div>
            </div>
            <button 
              onClick={toggleMenu}
              className="w-8 h-8 rounded-lg bg-yellow-400/10 flex items-center justify-center text-yellow-400 hover:bg-yellow-400/20 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          <div className="text-xs text-white/60">Navigate to explore our services</div>
        </div>

        {/* Navigation */}
        <div className="p-6 flex-1 overflow-y-auto">
          <nav className="space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`group flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 ${
                  location.pathname === item.path 
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg' 
                    : 'text-white hover:bg-yellow-400/10 hover:text-yellow-400'
                }`}
                onClick={toggleMenu}
              >
                <span className="font-semibold">{item.name}</span>
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  location.pathname === item.path ? 'bg-black' : 'bg-transparent group-hover:bg-yellow-400/60'
                }`}></div>
              </Link>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="mt-8 p-4 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl border border-yellow-400/10">
            <div className="text-center mb-4">
              <h3 className="text-white font-bold text-lg mb-1">Ready to grow?</h3>
              <p className="text-white/60 text-sm">Get your free consultation today</p>
            </div>
            <Button 
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-400 font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={toggleMenu}
              asChild
            >
              <Link to="/contact">GET A QUOTE</Link>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-yellow-400/20">
          <div className="text-center">
            <div className="text-xs text-white/60 mb-2">© {new Date().getFullYear()} Deccan Hive Pvt Ltd</div>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-yellow-400/30 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
