import { useState, useEffect } from 'react';
import { ArrowRight, Target, Zap, Globe, MessageSquare, Mail, Phone, Video, Camera, Mic, Palette, Share2, TrendingUp, Monitor, ShoppingCart, CreditCard, FileText, Brush, PaintBucket } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import LoadingScreen from '@/components/LoadingScreen';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Link } from 'react-router-dom';

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const [targetCategory, setTargetCategory] = useState<string | null>(null);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check for category parameter in URL
    const urlParams = new URLSearchParams(location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
      setTargetCategory(decodeURIComponent(categoryParam));
    }
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    // Scroll to target category after loading is complete
    if (!isLoading && targetCategory) {
      const timer = setTimeout(() => {
        const categoryElement = document.getElementById(`category-${targetCategory.replace(/\s+/g, '-').toLowerCase()}`);
        if (categoryElement) {
          categoryElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
          // Add highlight effect
          categoryElement.classList.add('ring-2', 'ring-yellow-400/50', 'ring-offset-2', 'ring-offset-black');
          setTimeout(() => {
            categoryElement.classList.remove('ring-2', 'ring-yellow-400/50', 'ring-offset-2', 'ring-offset-black');
          }, 3000);
        }
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [isLoading, targetCategory]);

  useEffect(() => {
    const handleScroll = () => {
      setShowWhatsApp(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      category: "Paid Advertising",
      icon: Target,
      services: [
        { name: "Meta Ads", description: "Facebook & Instagram advertising campaigns" },
        { name: "Google Ads", description: "Search, Display & YouTube advertising" },
        { name: "LinkedIn Ads", description: "B2B targeted advertising campaigns" },
        { name: "Pinterest Ads", description: "Visual discovery platform advertising" }
      ]
    },
    {
      category: "Email & Messaging",
      icon: MessageSquare,
      services: [
        { name: "Email Marketing", description: "Automated email campaigns & newsletters" },
        { name: "WhatsApp Store", description: "E-commerce integration with WhatsApp" },
        { name: "WhatsApp Automation", description: "Automated customer support & marketing" },
        { name: "Bulk Mailing", description: "Large-scale email marketing campaigns" }
      ]
    },
    {
      category: "Content & Media",
      icon: Video,
      services: [
        { name: "Podcast Editing", description: "Professional audio editing & production" },
        { name: "Video Marketing", description: "Video content creation & optimization" },
        { name: "Social Media Management", description: "Complete social media strategy & management" },
        { name: "Scripting & Planning", description: "Content strategy & script development" }
      ]
    },
    {
      category: "Production Services",
      icon: Camera,
      services: [
        { name: "Audio Recording & Editing", description: "Professional audio production" },
        { name: "Video Podcast Setup", description: "Complete video podcast production" },
        { name: "Branding & Thumbnails", description: "Visual branding & thumbnail design" },
        { name: "Distribution", description: "Spotify, Apple, YouTube distribution" }
      ]
    },
    {
      category: "Photography",
      icon: Camera,
      services: [
        { name: "E-commerce Product Photography", description: "Professional product photography" },
        { name: "AI Product Photography", description: "AI-enhanced product visualization" },
        { name: "Marketing & Promotion", description: "Content marketing & promotional campaigns" }
      ]
    },
    {
      category: "Website Development",
      icon: Monitor,
      services: [
        { name: "Website Structure & Navigation", description: "Sitemap planning & navigation design" },
        { name: "UI/UX Design", description: "Homepage, landing pages & responsive design" },
        { name: "Content & Media", description: "About, Contact, Services pages & media integration" },
        { name: "SEO & Analytics Setup", description: "Meta tags, keywords, Google Analytics & Search Console" }
      ]
    },
    {
      category: "E-commerce Solutions",
      icon: ShoppingCart,
      services: [
        { name: "Product Pages", description: "Product listings, detail pages & filtering options" },
        { name: "Shopping Cart Functionality", description: "Add to cart, wishlist & quantity adjustment" },
        { name: "Checkout Flow", description: "Guest vs registered checkout & delivery options" },
        { name: "Admin Panel Setup", description: "Order management & inventory tracking" }
      ]
    },
    {
      category: "Payment Gateway Integration",
      icon: CreditCard,
      services: [
        { name: "Gateway Selection", description: "Razorpay, Stripe, PayU, Paytm & other options" },
        { name: "Backend Integration", description: "API setup & security implementation" },
        { name: "Testing & Validation", description: "Test transactions & response handling" },
        { name: "Go-live Readiness", description: "SSL certification & live payment support" }
      ]
    },
    {
      category: "Catalogue & E-books",
      icon: FileText,
      services: [
        { name: "Digital Catalogue", description: "Product/service brochure design & PDF versions" },
        { name: "Flipbook Versions", description: "Interactive digital catalogue presentations" },
        { name: "E-books", description: "Content creation, formatting & design" },
        { name: "Email Integration", description: "Downloadable links & email opt-in access" }
      ]
    },
    {
      category: "Graphic Design Services",
      icon: PaintBucket,
      services: [
        { name: "Logo & Brand Identity Design", description: "Unique logos, business cards & branding kits" },
        { name: "Marketing Collaterals", description: "Posters, flyers, brochures & banners (print + digital)" },
        { name: "Social Media Creatives", description: "Instagram posts, stories, reels & LinkedIn creatives" },
        { name: "Website & App UI Mockups", description: "Web layouts, mobile screens & responsive designs" },
        { name: "E-books & Digital Catalogues", description: "Professional PDFs, flipbooks & lead magnets" }
      ]
    }
  ];

  if (isLoading) {
    return <LoadingScreen isFirstLoad={true} />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 lg:py-32">
        <AnimatedBackground />

        <div className="container mx-auto text-center relative z-10 max-w-7xl">
          <div className="inline-flex items-center bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 mb-6 sm:mb-8">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold text-sm sm:text-base lg:text-lg">360° Digital Solutions</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 sm:mb-8 lg:mb-12 leading-tight">
            OUR <span className="text-yellow-400">SERVICES</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-12 sm:mb-16 lg:mb-20 max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed px-2 sm:px-4">
            From paid advertising to content creation, we provide comprehensive digital marketing solutions that drive growth and deliver measurable results for your business.
          </p>
          
          <Button 
            className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-6 sm:px-8 lg:px-10 py-3 lg:py-4 text-base lg:text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            asChild
          >
            <Link to="/contact#contact-form">
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:w-6" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-32 px-4 lg:px-6">
        <div className="container mx-auto max-w-8xl">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              COMPREHENSIVE <span className="text-yellow-400">SOLUTIONS</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-2 sm:px-4">
              Everything you need to succeed in the digital world, all under one roof
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((category, index) => (
              <div
                key={category.category}
                id={`category-${category.category.replace(/\s+/g, '-').toLowerCase()}`}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 hover:bg-yellow-400/5 hover:border-yellow-400/30 transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-yellow-400/10 border-2 border-yellow-400/20 rounded-lg flex items-center justify-center mr-3 sm:mr-4 lg:mr-6 group-hover:bg-yellow-400/20 group-hover:border-yellow-400/40 transition-all duration-300">
                    <category.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-yellow-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="border-l-2 border-yellow-400/20 pl-3 sm:pl-4 lg:pl-5 hover:border-yellow-400/60 transition-colors duration-300">
                      <h4 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">{service.name}</h4>
                      <p className="text-white/60 text-xs sm:text-sm lg:text-base">{service.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 lg:pt-8 border-t border-white/10">
                  <Button 
                    variant="ghost" 
                    className="text-yellow-400 hover:text-black hover:bg-yellow-400 font-semibold w-full group-hover:scale-105 transition-all duration-300 text-sm sm:text-base lg:text-lg py-2 sm:py-3"
                    asChild
                  >
                    <Link to="/contact#contact-form">
                      Learn More
                      <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-32 px-4 lg:px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="bg-gradient-to-br from-yellow-400/10 to-transparent rounded-3xl lg:rounded-4xl border border-yellow-400/20 p-8 sm:p-12 lg:p-16 xl:p-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
              Ready to <span className="text-yellow-400">Transform</span> Your Business?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 lg:mb-10 max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-4">
              Let's discuss how our comprehensive digital marketing solutions can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center max-w-md sm:max-w-none mx-auto">
              <Button 
                className="w-full sm:w-auto bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-4 sm:px-6 lg:px-8 py-3 lg:py-4 text-sm sm:text-base lg:text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                asChild
              >
                <Link to="/contact#contact-form">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-4 sm:px-6 lg:px-8 py-3 lg:py-4 text-sm sm:text-base lg:text-lg rounded-full transition-all duration-300"
                asChild
              >
                <Link to="/portfolio">View Our Work</Link>
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

export default Services;
