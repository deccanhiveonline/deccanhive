import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Zap, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import LoadingScreen from '@/components/LoadingScreen';
import AnimatedBackground from '@/components/AnimatedBackground';

const Contact = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(() => {
    const hasVisited = sessionStorage.getItem('contact-visited');
    return !hasVisited;
  });
  
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setIsFirstLoad(false);
        sessionStorage.setItem('contact-visited', 'true');
      }, 2500); // Updated to 2.5 seconds

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

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer: "Results vary by service, but most clients see initial improvements within 2-4 weeks. Significant growth typically occurs within 3-6 months of consistent implementation."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We specialize in helping micro and local businesses grow their digital presence. Our solutions are tailored to fit businesses of all sizes and budgets."
    },
    {
      question: "What's included in your packages?",
      answer: "Our packages include strategy development, campaign setup, ongoing optimization, detailed reporting, and dedicated support. Specific inclusions vary by service."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, our contracts are flexible. While we recommend longer commitments for better results, you can adjust or cancel services with 30 days notice."
    },
    {
      question: "Do you provide reporting?",
      answer: "Yes, we provide detailed monthly reports showing key metrics, performance insights, and recommendations for continued growth."
    },
    {
      question: "What makes you different?",
      answer: "We focus exclusively on results-driven strategies for local businesses, offer transparent pricing, and provide personalized attention that larger agencies can't match."
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
            <Zap className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold">Let's Connect</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight">
            GET IN <span className="text-yellow-400">TOUCH</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss how our 360° digital solutions can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-16 lg:py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
                Send us a <span className="text-yellow-400">Message</span>
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-black/20 border-white/20 text-white placeholder:text-white/60 focus:border-yellow-400 h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-black/20 border-white/20 text-white placeholder:text-white/60 focus:border-yellow-400 h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <Input
                    placeholder="Subject"
                    className="bg-black/20 border-white/20 text-white placeholder:text-white/60 focus:border-yellow-400 h-12"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    className="bg-black/20 border-white/20 text-white placeholder:text-white/60 focus:border-yellow-400 resize-none"
                  />
                </div>
                
                <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-300 font-bold py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 lg:space-y-8">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-center">
                  Get in <span className="text-yellow-400">Touch</span>
                </h2>
                
                <div className="space-y-6 lg:space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-yellow-400/20 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-base lg:text-lg mb-2">Phone & WhatsApp</h3>
                      <p className="text-white/80 text-sm lg:text-base font-medium">+91 90631 17093</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-yellow-400/20 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-base lg:text-lg mb-2">Email</h3>
                      <p className="text-white/80 text-sm lg:text-base font-medium break-all">deccanhive@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-yellow-400/20 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-base lg:text-lg mb-2">Address</h3>
                      <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                        1-3-50/1/1 Bheem Rao Naga,<br />
                        Secunderabad, Alwal,<br />
                        Hyderabad, Tirumalagiri,<br />
                        Telangana, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-yellow-400/20 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-base lg:text-lg mb-2">Business Hours</h3>
                      <p className="text-white/80 text-sm lg:text-base font-medium">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg lg:text-xl font-bold mb-4 text-center">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://instagram.com/deccanhive.digitalagency" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500/20 to-orange-500/20 border border-pink-500/30 rounded-xl p-3 hover:from-pink-500/30 hover:to-orange-500/30 transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5 text-pink-400" />
                    <span className="text-sm font-medium text-white/90">Instagram</span>
                  </a>
                  <a 
                    href="https://facebook.com/deccanhive" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-blue-500/20 border border-blue-500/30 rounded-xl p-3 hover:bg-blue-500/30 transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-medium text-white/90">Facebook</span>
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-3xl p-6 sm:p-8 text-center">
                <MessageSquare className="w-12 h-12 lg:w-16 lg:h-16 text-green-400 mx-auto mb-4 lg:mb-6" />
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4">Quick Chat on WhatsApp</h3>
                <p className="text-white/70 mb-4 lg:mb-6 text-sm lg:text-base">Get instant responses to your queries</p>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl text-sm lg:text-base">
                  Chat Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 px-4 bg-black/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              FREQUENTLY ASKED <span className="text-yellow-400">QUESTIONS</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto">
              Find answers to common questions about our services and processes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger className="px-4 sm:px-6 py-4 text-left hover:no-underline [&[data-state=open]>span]:text-yellow-400">
                      <span className="font-semibold text-sm sm:text-base lg:text-lg transition-colors duration-200 pr-2">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 sm:px-6 pb-4 text-white/70 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat visible={showWhatsApp} />
    </div>
  );
};

export default Contact;
