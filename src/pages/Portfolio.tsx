import { useState, useEffect } from 'react';
import { TrendingUp, BarChart3, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import LoadingScreen from '@/components/LoadingScreen';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(() => {
    const hasVisited = sessionStorage.getItem('portfolio-visited');
    return !hasVisited;
  });
  
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setIsFirstLoad(false);
        sessionStorage.setItem('portfolio-visited', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }

    const handleScroll = () => {
      setShowWhatsApp(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFirstLoad]);

  const portfolioItems = [
    {
      title: 'E-commerce Growth Campaign',
      client: 'Kumar Electronics',
      category: 'ecommerce',
      challenge: 'Local electronics retailer needed to increase online sales by 300% within 6 months while competing with major e-commerce platforms',
      strategy: 'Implemented comprehensive Google Ads and Meta Ads campaigns with optimized product listings, retargeting strategies, and conversion rate optimization',
      result: '450% ROI achieved with ₹50L+ revenue generated and 40% increase in brand recognition',
      duration: '6 months',
      metrics: {
        roi: '450%',
        revenue: '₹50L+',
        leads: '2,500+'
      },
      tags: ['Google Ads', 'Meta Ads', 'E-commerce', 'CRO']
    },
    {
      title: 'B2B Lead Generation',
      client: 'TechSolutions Pvt Ltd',
      category: 'b2b',
      challenge: 'Tech startup required 200+ qualified leads monthly for their SaaS product with a limited budget and competitive market',
      strategy: 'LinkedIn Ads campaign targeting decision-makers with compelling content marketing, lead magnets, and automated nurturing sequences',
      result: '250+ qualified leads per month with 35% conversion rate and 60% reduction in CAC',
      duration: '8 months',
      metrics: {
        roi: '380%',
        leads: '2,000+',
        conversion: '35%'
      },
      tags: ['LinkedIn Ads', 'Content Marketing', 'Lead Generation', 'B2B']
    },
    {
      title: 'Restaurant Chain Transformation',
      client: 'Spice Garden Restaurants',
      category: 'hospitality',
      challenge: 'Restaurant chain needed to increase brand awareness and foot traffic across 12 locations post-pandemic with changing consumer behavior',
      strategy: 'Social media management, influencer partnerships, location-based advertising, and online ordering system integration',
      result: '500K+ monthly reach with 40% increase in foot traffic and 120% growth in online orders',
      duration: '12 months',
      metrics: {
        roi: '320%',
        reach: '500K+',
        traffic: '+40%'
      },
      tags: ['Social Media', 'Influencer Marketing', 'Local SEO', 'Online Ordering']
    },
    {
      title: 'Fashion Brand Launch',
      client: 'Trending Styles',
      category: 'fashion',
      challenge: 'New fashion brand needed to build online presence and drive sales from zero in a saturated market',
      strategy: 'Instagram and Pinterest marketing with influencer collaborations, user-generated content campaigns, and strategic partnerships',
      result: '100K+ followers and ₹25L+ sales in first year with 85% customer retention rate',
      duration: '12 months',
      metrics: {
        roi: '420%',
        followers: '100K+',
        sales: '₹25L+'
      },
      tags: ['Instagram Marketing', 'Pinterest Ads', 'Influencer Marketing', 'UGC']
    },
    {
      title: 'Healthcare Practice Growth',
      client: 'City Dental Clinic',
      category: 'healthcare',
      challenge: 'Dental clinic needed to increase patient bookings and build trust in the community while managing online reputation',
      strategy: 'Google My Business optimization, patient reviews management, educational content marketing, and local SEO strategies',
      result: '300% increase in appointments with 4.8★ average rating and 50% more new patient inquiries',
      duration: '9 months',
      metrics: {
        roi: '350%',
        appointments: '+300%',
        rating: '4.8★'
      },
      tags: ['Local SEO', 'Reputation Management', 'Content Marketing', 'GMB']
    },
    {
      title: 'Real Estate Success Story',
      client: 'Premium Properties',
      category: 'realestate',
      challenge: 'Real estate agency needed to generate high-quality property inquiries and close more deals in a competitive market',
      strategy: 'Facebook lead ads, WhatsApp automation, virtual property tours, and CRM integration for lead nurturing',
      result: '500+ qualified leads monthly with 45% higher closing rate and 60% faster sales cycle',
      duration: '10 months',
      metrics: {
        roi: '400%',
        leads: '5,000+',
        closing: '+45%'
      },
      tags: ['Facebook Ads', 'WhatsApp Automation', 'Virtual Tours', 'CRM']
    }
  ];

  if (isFirstLoad) {
    return <LoadingScreen isFirstLoad={true} />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 lg:py-32">
        <AnimatedBackground />

        <div className="container mx-auto text-center relative z-10 max-w-6xl">
          <div className="inline-flex items-center bg-yellow-400/10 border border-yellow-400/20 rounded-full px-6 py-3 mb-8">
            <BarChart3 className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold">Proven Results</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight">
            SUCCESS STORIES<br />
            <span className="text-yellow-400">THAT INSPIRE</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed">
            Real results for real businesses. Discover how we've helped our clients achieve remarkable growth through strategic digital marketing campaigns and data-driven approaches.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400/10 border border-yellow-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/20 transition-colors duration-300">
                <TrendingUp className="w-10 h-10 text-yellow-400" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-sm text-white/70 font-medium">Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400/10 border border-yellow-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/20 transition-colors duration-300">
                <DollarSign className="w-10 h-10 text-yellow-400" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">₹100Cr+</div>
              <div className="text-sm text-white/70 font-medium">Revenue Generated</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400/10 border border-yellow-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/20 transition-colors duration-300">
                <BarChart3 className="w-10 h-10 text-yellow-400" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">400%</div>
              <div className="text-sm text-white/70 font-medium">Average ROI</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400/10 border border-yellow-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/20 transition-colors duration-300">
                <Users className="w-10 h-10 text-yellow-400" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-sm text-white/70 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 lg:py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              OUR <span className="text-yellow-400">SUCCESS STORIES</span>
            </h2>
            <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto">
              Discover how we've helped businesses across different industries achieve remarkable growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:border-yellow-400/30 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs font-semibold bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full border border-yellow-400/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-yellow-400 font-semibold text-sm lg:text-base">
                    Client: {item.client}
                  </p>
                </div>

                <div className="space-y-4 lg:space-y-6">
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-2 flex items-center">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                      Challenge
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm lg:text-base leading-relaxed">
                      {item.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-2 flex items-center">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                      Strategy
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm lg:text-base leading-relaxed">
                      {item.strategy}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-2 flex items-center">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                      Results
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm lg:text-base leading-relaxed">
                      {item.result}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4 lg:pt-6">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                      {Object.entries(item.metrics).map(([key, value], metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-base sm:text-lg lg:text-xl font-bold text-yellow-400 mb-1">{value}</div>
                          <div className="text-xs lg:text-sm text-white/70 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-xs lg:text-sm text-white/70">
                        Duration: <span className="text-yellow-400 font-semibold">{item.duration}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-4 bg-black/20">
        <div className="container mx-auto text-center max-w-5xl">
          <div className="relative bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-yellow-400/10 rounded-3xl p-6 sm:p-8 lg:p-16 border border-yellow-400/20">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                READY TO BE OUR <span className="text-yellow-400">NEXT</span><br />
                SUCCESS STORY?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
                Join the hundreds of businesses that have transformed their digital presence with our proven strategies and achieved remarkable growth.
              </p>
              
              <Button 
                className="w-full sm:w-auto bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-full text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30 max-w-xs sm:max-w-sm lg:max-w-none mx-auto"
                asChild
              >
                <Link to="/contact#contact-form">
                  <span className="whitespace-nowrap">START YOUR SUCCESS</span>
                  <TrendingUp className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
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

export default Portfolio;
