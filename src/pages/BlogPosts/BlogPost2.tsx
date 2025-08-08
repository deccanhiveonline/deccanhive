import { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import AnimatedBackground from '@/components/AnimatedBackground';

const BlogPost2 = () => {
  const navigate = useNavigate();
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setShowWhatsApp(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Local SEO Strategies That Actually Work in 2024',
        text: 'Proven local SEO techniques to help your business rank higher in local search results and attract more customers.',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link copied to clipboard!');
      });
    }
  };

  const post = {
    title: 'Local SEO Strategies That Actually Work in 2024',
    excerpt: 'Proven local SEO techniques to help your business rank higher in local search results and attract more customers. Step-by-step implementation guide.',
    category: 'guide',
    author: 'Mohammed Ali',
    date: '2024-01-15',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    tags: ['SEO', 'Local Business', 'Google My Business', 'Rankings']
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 lg:py-32">
        <AnimatedBackground />

        <div className="container mx-auto relative z-10 max-w-4xl">
          {/* Navigation Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <Button
              variant="ghost"
              className="text-yellow-400 hover:text-black hover:bg-yellow-400 self-start"
              onClick={() => navigate('/blog')}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
            
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-2">
                <Tag className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold capitalize text-sm">{post.category}</span>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={sharePost}
                className="text-yellow-400 hover:text-black hover:bg-yellow-400 rounded-full px-4 py-2"
              >
                <Share2 className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Share</span>
              </Button>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/70 mb-12 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12 text-white/60 text-sm sm:text-base">
            <div className="flex items-center">
              <User className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-white/80 leading-relaxed space-y-6 text-sm sm:text-base lg:text-lg">
              <p>
                Local SEO is crucial for businesses that serve customers in specific geographic areas. With the right strategies, 
                you can improve your visibility in local search results and attract more customers to your business. This guide 
                covers the most effective local SEO techniques that work in 2024.
              </p>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-8 sm:mt-12 mb-4 sm:mb-6">
                Optimizing Your Google My Business Profile
              </h2>
              
              <p>
                Your Google My Business (GMB) profile is the foundation of your local SEO strategy. A well-optimized GMB profile 
                can significantly improve your local search rankings and provide potential customers with essential information 
                about your business.
              </p>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mt-6 sm:mt-10 mb-3 sm:mb-4">
                GMB Optimization Checklist
              </h3>
              
              <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-white/80">
                <li>Complete every section of your profile with accurate information</li>
                <li>Choose the most specific business category that applies to your business</li>
                <li>Add high-quality photos of your business, products, and team</li>
                <li>Regularly post updates, offers, and events</li>
                <li>Respond promptly to customer reviews</li>
                <li>Keep your business hours and contact information up to date</li>
              </ul>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-8 sm:mt-12 mb-4 sm:mb-6">
                Building Local Citations and NAP Consistency
              </h2>
              
              <p>
                Citations are mentions of your business name, address, and phone number (NAP) on other websites. 
                Consistent NAP information across the web helps search engines understand and trust your business location.
              </p>

              <blockquote className="border-l-4 border-yellow-400 pl-4 sm:pl-6 my-6 sm:my-8 italic text-white/90 text-base sm:text-lg lg:text-xl">
                "Consistency is key in local SEO. Make sure your business information is identical 
                across all platforms and directories."
              </blockquote>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mt-6 sm:mt-10 mb-3 sm:mb-4">
                Where to Build Citations
              </h3>
              
              <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-white/80">
                <li>Industry-specific directories and associations</li>
                <li>Local business directories and chambers of commerce</li>
                <li>Major citation sources like Yelp, Yellow Pages, and Foursquare</li>
                <li>Social media platforms with business profiles</li>
              </ul>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-8 sm:mt-12 mb-4 sm:mb-6">
                Creating Location-Specific Content
              </h2>
              
              <p>
                Developing content that's relevant to your local area helps search engines understand your geographic relevance 
                and provides value to local customers. This strategy can significantly boost your local search rankings.
              </p>

              <p>
                Local SEO is an ongoing process that requires consistency and patience. By implementing these strategies 
                systematically, you'll see improvements in your local search visibility and customer acquisition over time.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
            <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Tags:</h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {post.tags.map((tag: string, index: number) => (
                <span 
                  key={index}
                  className="bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-2xl sm:rounded-3xl border border-yellow-400/20 p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
              Need Help with Local SEO?
            </h3>
            <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base">
              Our local SEO experts can help you dominate local search results.
            </p>
            <Button 
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              asChild
            >
              <Link to="/contact#contact-form">Get Local SEO Help</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat visible={showWhatsApp} />
    </div>
  );
};

export default BlogPost2;
