import { useState, useEffect } from 'react';
import { ArrowRight, Users, Target, Award, TrendingUp, Eye, Heart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import LoadingScreen from '@/components/LoadingScreen';
import AnimatedBackground from '@/components/AnimatedBackground';

const About = () => {
  const navigate = useNavigate();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const handleScroll = () => {
      setShowWhatsApp(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const team = [
    {
      name: 'Thurupu Praveen Kumar',
      role: 'Founder and CEO',
      bio: 'Visionary leader driving digital innovation'
    },
    {
      name: 'Hari Priya Jaligam',
      role: 'Copy Writing, Content Creation',
      bio: 'Creative wordsmith and content strategist'
    },
    {
      name: 'Gaddam Srinivas Murali',
      role: 'Co-founder, Marketing Head',
      bio: 'Strategic marketing expert and co-founder'
    },
    {
      name: 'Karthik',
      role: 'Web Developer, UI/UX & SEO Expert',
      bio: 'Full-stack developer and digital experience specialist'
    },
    {
      name: 'Akshay Gaddam',
      role: 'Social Media Manager',
      bio: 'Social media strategist and community builder'
    },
    {
      name: 'Sonali Sharma',
      role: 'Graphic Designer',
      bio: 'Visual artist creating compelling brand experiences'
    }
  ];

  const values = [
    {
      icon: Eye,
      title: 'VISION',
      description: 'To be the leading digital marketing agency that transforms local businesses into digital success stories.'
    },
    {
      icon: Heart,
      title: 'MISSION',
      description: 'Empowering micro and local businesses with data-driven digital marketing strategies that deliver measurable results.'
    },
    {
      icon: Zap,
      title: 'VALUES',
      description: 'Innovation, transparency, results-driven approach, and building long-term partnerships with our clients.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '400%', label: 'Average ROI' },
    { number: '5+', label: 'Years Experience' },
    { number: '50M+', label: 'Revenue Generated' }
  ];

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 lg:py-32">
        <AnimatedBackground />

        <div className="container mx-auto text-center relative z-10 animate-fade-in max-w-7xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 lg:mb-8 leading-tight">
            WE ARE <span className="text-yellow-400">DECCAN HIVE</span><br />
            <span className="text-white">DIGITAL INNOVATORS</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-8 lg:mb-12 max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed px-2 sm:px-4">
            A passionate team of digital marketing experts dedicated to helping local businesses thrive in the digital landscape. We combine creativity with data-driven strategies to deliver exceptional results.
          </p>
          
          <Button 
            className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold px-6 sm:px-8 lg:px-10 py-3 lg:py-4 rounded-full transition-all duration-300 hover:scale-105 text-base lg:text-lg shadow-lg"
            size="lg"
            onClick={() => {
              const element = document.getElementById('our-philosophy');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            DISCOVER OUR STORY
            <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 lg:px-6 bg-black/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-yellow-400 mb-2 lg:mb-3">{stat.number}</div>
                <div className="text-white/70 font-medium text-sm sm:text-base lg:text-lg xl:text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section id="our-philosophy" className="py-12 sm:py-16 lg:py-24 px-4 lg:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              OUR <span className="text-yellow-400">PHILOSOPHY</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {values.map((value, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-3xl p-6 sm:p-8 lg:p-10 text-center hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 group">
                <value.icon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-yellow-400 mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base lg:text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 lg:px-6 bg-black/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              MEET OUR <span className="text-yellow-400">TEAM</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-2 sm:px-4">
              The creative minds and strategic thinkers behind your digital success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {team.map((member, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-3xl p-6 sm:p-8 lg:p-10 text-center hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 group">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mx-auto flex items-center justify-center text-black font-bold text-xl sm:text-2xl lg:text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-yellow-400 font-semibold mb-3 text-sm sm:text-base lg:text-lg">{member.role}</p>
                <p className="text-white/70 text-sm sm:text-base">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 lg:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 lg:mb-12">
                WHY CHOOSE <span className="text-yellow-400">DECCAN HIVE?</span>
              </h2>
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">Data-Driven Approach</h3>
                    <p className="text-white/70 text-sm sm:text-base lg:text-lg">Every strategy is backed by comprehensive market research and analytics.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">Local Market Expertise</h3>
                    <p className="text-white/70 text-sm sm:text-base lg:text-lg">Deep understanding of Indian market dynamics and consumer behavior.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">Proven Results</h3>
                    <p className="text-white/70 text-sm sm:text-base lg:text-lg">Track record of delivering 400%+ ROI for our clients consistently.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 rounded-3xl lg:rounded-4xl p-6 sm:p-8 lg:p-12 border border-yellow-400/20">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-yellow-400 mx-auto mb-4 sm:mb-6" />
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">READY TO GROW?</h3>
                  <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
                    Join 500+ businesses that trust us with their digital marketing needs.
                  </p>
                  <Button 
                    className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base lg:text-lg shadow-lg"
                    asChild
                  >
                    <Link to="/contact#contact-form">
                      START YOUR JOURNEY
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat visible={showWhatsApp} />
    </div>
  );
};

export default About;
