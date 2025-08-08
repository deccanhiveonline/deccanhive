
import { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, TrendingUp, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import PortfolioCard from '@/components/PortfolioCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import LoadingScreen from '@/components/LoadingScreen';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Link, useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isFirstLoad, setIsFirstLoad] = useState(() => {
    const hasVisited = sessionStorage.getItem('home-visited');
    const lastVisit = localStorage.getItem('last-visit');
    const now = Date.now();
    
    // Show loading if first visit or more than 1 hour has passed
    if (!hasVisited || (lastVisit && now - parseInt(lastVisit) > 3600000)) {
      return true;
    }
    return false;
  });
  
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    // Only show loading screen on first load or after 1 hour
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setIsFirstLoad(false);
        sessionStorage.setItem('home-visited', 'true');
        localStorage.setItem('last-visit', Date.now().toString());
      }, 2500);

      return () => clearTimeout(timer);
    }

    // WhatsApp button visibility
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setShowWhatsApp(window.scrollY > heroHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFirstLoad]);

  const services = [
    { title: 'Meta Ads', description: 'Strategic Facebook & Instagram advertising campaigns', icon: '📱', category: 'Paid Advertising' },
    { title: 'Google Ads', description: 'Targeted search and display advertising solutions', icon: '🎯', category: 'Paid Advertising' },
    { title: 'LinkedIn Ads', description: 'Professional B2B marketing and lead generation', icon: '💼', category: 'Paid Advertising' },
    { title: 'Pinterest Ads', description: 'Visual marketing for lifestyle and e-commerce brands', icon: '📌', category: 'Paid Advertising' },
    { title: 'Email Marketing', description: 'Automated email campaigns that convert', icon: '📧', category: 'Email & Messaging' },
    { title: 'WhatsApp Store', description: 'E-commerce integration with WhatsApp Business', icon: '🛍️', category: 'Email & Messaging' },
    { title: 'WhatsApp Automation', description: 'Automated customer service and marketing', icon: '🤖', category: 'Email & Messaging' },
    { title: 'Bulk Mailing', description: 'High-volume email marketing campaigns', icon: '📮', category: 'Email & Messaging' },
    { title: 'Podcast Editing', description: 'Professional audio editing and production', icon: '🎙️', category: 'Video & Audio Production' },
    { title: 'Video Marketing', description: 'Engaging video content and advertising', icon: '🎬', category: 'Video & Audio Production' },
    { title: 'Social Media Management', description: 'Complete social media strategy and execution', icon: '📱', category: 'Social Media Management' },
    { title: 'Website Development', description: 'Complete website structure, navigation & UI/UX design', icon: '🌐', category: 'Website Development' },
    { title: 'E-commerce Solutions', description: 'Product pages, shopping cart & checkout functionality', icon: '🛒', category: 'E-commerce Solutions' },
    { title: 'Payment Gateway Integration', description: 'Secure payment processing with multiple gateways', icon: '💳', category: 'Payment Gateway Integration' },
    { title: 'Digital Catalogues', description: 'Professional PDF & flipbook catalogue design', icon: '📖', category: 'Catalogue & E-books' },
    { title: 'Logo & Brand Identity', description: 'Unique logos, business cards & branding kits', icon: '🎨', category: 'Graphic Design Services' },
    { title: 'Marketing Collaterals', description: 'Posters, flyers, brochures & banners design', icon: '📄', category: 'Graphic Design Services' },
    { title: 'Social Media Creatives', description: 'Instagram posts, stories & LinkedIn creatives', icon: '✨', category: 'Graphic Design Services' },
    { title: 'UI/UX Mockups', description: 'Website & app UI mockups and responsive designs', icon: '📐', category: 'Graphic Design Services' }
  ];

  const handleServiceClick = (category: string) => {
    // Navigate to services page with the category as a URL parameter
    navigate(`/services?category=${encodeURIComponent(category)}`);
  };

  const portfolioItems = [
    {
      title: 'E-commerce Growth Campaign',
      challenge: 'Local business needed 300% revenue increase',
      result: '450% ROI achieved in 6 months'
    },
    {
      title: 'B2B Lead Generation',
      challenge: 'Tech startup required qualified leads',
      result: '200+ qualified leads per month'
    },
    {
      title: 'Social Media Transformation',
      challenge: 'Restaurant chain needed brand awareness',
      result: '500K+ monthly reach achieved'
    }
  ];

  const testimonials = [
    {
      quote: "Deccan Hive transformed our digital presence completely. Our revenue increased by 400% in just 8 months!",
      author: "Rajesh Kumar",
      company: "Kumar Electronics",
      rating: 5
    },
    {
      quote: "Professional team with exceptional results. They understand local market dynamics perfectly.",
      author: "Priya Sharma",
      company: "Sharma Textiles",
      rating: 5
    },
    {
      quote: "Best investment we made for our business. The ROI speaks for itself - highly recommended!",
      author: "Mohammed Ali",
      company: "Ali Traders",
      rating: 5
    }
  ];

  if (isFirstLoad) {
    return <LoadingScreen isFirstLoad={true} />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 lg:pt-24 pb-12 lg:pb-16">
        <AnimatedBackground />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <div className="container mx-auto text-center relative z-20 animate-fade-in px-4 max-w-7xl">
          {/* SEO H1 - Screen reader only */}
          <h1 className="sr-only">
            Deccan Hive - AI-Powered Digital Marketing Agency Delivering 360° Digital Solutions That Transform Your Business
          </h1>
          
          <div className="inline-flex items-center bg-[#F9C326]/10 border border-[#F9C326]/20 rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 mb-6 sm:mb-8">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#F9C326] mr-2" />
            <span className="text-[#F9C326] font-semibold text-sm sm:text-base lg:text-lg">360° Digital Solutions</span>
          </div>
          
          {/* Visual heading - maintains original design */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight drop-shadow-lg" aria-hidden="true">
            WE OFFER <span className="text-[#F9C326]">360°</span><br />
            <span className="text-white">DIGITAL</span><br />
            <span className="text-white">SOLUTIONS</span><br />
            THAT <span className="text-[#F9C326]">DELIVER</span>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 lg:mb-12 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-2 drop-shadow-md">
            Helping micro and local businesses grow online with proven digital marketing strategies that generate real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center mb-8 sm:mb-12 lg:mb-16 max-w-md sm:max-w-none mx-auto">
            <Button 
              className="w-full sm:w-auto bg-[#F9C326] text-black hover:bg-[#F9C326]/90 font-semibold px-6 sm:px-8 lg:px-10 py-3 lg:py-4 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base lg:text-lg shadow-lg"
              size="lg"
              asChild
            >
              <Link to="/contact#contact-form" aria-label="Get a free quote for digital marketing services">
                GET A QUOTE
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" aria-hidden="true" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto border-[#F9C326] text-[#F9C326] hover:bg-[#F9C326] hover:text-black font-semibold px-6 sm:px-8 lg:px-10 py-3 lg:py-4 rounded-full transition-all duration-300 text-sm sm:text-base lg:text-lg shadow-lg bg-white/10 backdrop-blur-sm"
              size="lg"
              asChild
            >
              <Link to="/services" aria-label="Explore our comprehensive digital marketing services">
                EXPLORE OUR SERVICES
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto px-2 sm:px-4">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 border border-white/10">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#F9C326] mb-1 sm:mb-2">500+</div>
              <div className="text-xs sm:text-sm lg:text-base text-white/80">Happy Clients</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 border border-white/10">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#F9C326] mb-1 sm:mb-2">400%</div>
              <div className="text-xs sm:text-sm lg:text-base text-white/80">Avg ROI</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 border border-white/10">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#F9C326] mb-1 sm:mb-2">5+</div>
              <div className="text-xs sm:text-sm lg:text-base text-white/80">Years Experience</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 border border-white/10">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#F9C326] mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm lg:text-base text-white/80">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 px-3 sm:px-4 lg:px-6 bg-black/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 px-2">
              OUR <span className="text-[#F9C326]">360° DIGITAL</span> SOLUTIONS
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/70 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-2 sm:px-4 leading-relaxed">
              From strategy to execution, we provide comprehensive digital marketing services that drive growth for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="w-full">
                <ServiceCard 
                  {...service} 
                  onClick={() => handleServiceClick(service.category)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 px-4 lg:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-4">
              SUCCESS <span className="text-[#F9C326]">STORIES</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 leading-relaxed">
              Real results for real businesses. See how we've helped our clients achieve their digital marketing goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 px-4 lg:px-6 bg-black/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-4">
              WHAT OUR <span className="text-[#F9C326]">CLIENTS SAY</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 px-4 lg:px-6">
        <div className="container mx-auto text-center max-w-6xl">
          <div className="bg-gradient-to-r from-[#F9C326]/10 to-[#F9C326]/5 rounded-2xl sm:rounded-3xl lg:rounded-4xl p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 mx-2 sm:mx-4 border border-[#F9C326]/20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
              READY TO <span className="text-[#F9C326]">GROW</span> YOUR BUSINESS?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 lg:mb-10 max-w-2xl lg:max-w-3xl mx-auto px-2 leading-relaxed">
              Let's discuss how our 360° digital solutions can help you achieve your business goals. Book a free consultation today!
            </p>
            <div className="flex justify-center">
              <Button 
                className="w-full sm:w-auto bg-[#F9C326] text-black hover:bg-[#F9C326]/90 font-semibold px-6 sm:px-8 lg:px-10 py-3 lg:py-4 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-none shadow-lg"
                size="lg"
                asChild
              >
                <Link to="/contact#contact-form" aria-label="Start your digital transformation journey today">
                  GET STARTED TODAY
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat visible={showWhatsApp} />
    </div>
  );
};

export default Index;
