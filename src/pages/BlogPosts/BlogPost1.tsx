import { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import AnimatedBackground from '@/components/AnimatedBackground';

const BlogPost1 = () => {
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
        title: 'How to Optimize Your Google Ads for Maximum ROI',
        text: 'Learn proven strategies to improve your Google Ads performance and achieve better return on investment.',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link copied to clipboard!');
      });
    }
  };

  const post = {
    title: 'How to Optimize Your Google Ads for Maximum ROI',
    excerpt: 'Learn proven strategies to improve your Google Ads performance and achieve better return on investment. Complete guide with actionable tips and real examples.',
    category: 'tips',
    author: 'Priya Sharma',
    date: '2024-01-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop',
    tags: ['Google Ads', 'PPC', 'ROI', 'Optimization']
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
                Google Ads can be a powerful tool for driving traffic and conversions, but without proper optimization, 
                you might be wasting your advertising budget. This comprehensive guide will walk you through proven strategies 
                to maximize your return on investment and get the most out of your Google Ads campaigns.
              </p>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-8 sm:mt-12 mb-4 sm:mb-6">
                Understanding Your Campaign Goals
              </h2>
              
              <p>
                Before diving into optimization tactics, it's crucial to define clear, measurable goals for your campaigns. 
                Whether you're looking to increase brand awareness, generate leads, or drive sales, your optimization strategy 
                should align with these objectives.
              </p>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mt-6 sm:mt-10 mb-3 sm:mb-4">
                Key Performance Indicators to Track
              </h3>
              
              <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-white/80">
                <li>Click-through rate (CTR) - Indicates ad relevance and appeal</li>
                <li>Quality Score - Google's rating of your ad relevance and landing page experience</li>
                <li>Cost per conversion - How much you're paying for each desired action</li>
                <li>Return on ad spend (ROAS) - Revenue generated per dollar spent</li>
                <li>Impression share - Percentage of available impressions your ads receive</li>
              </ul>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-8 sm:mt-12 mb-4 sm:mb-6">
                Keyword Optimization Strategies
              </h2>
              
              <p>
                Keywords are the foundation of successful Google Ads campaigns. Regular keyword research and optimization 
                can significantly improve your campaign performance and reduce costs.
              </p>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mt-6 sm:mt-10 mb-3 sm:mb-4">
                Best Practices for Keyword Management
              </h3>
              
              <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-white/80">
                <li>Use a mix of broad, phrase, and exact match keywords</li>
                <li>Regularly review and add negative keywords to prevent irrelevant clicks</li>
                <li>Group related keywords into tightly themed ad groups</li>
                <li>Monitor search terms reports to discover new keyword opportunities</li>
              </ul>

              <blockquote className="border-l-4 border-yellow-400 pl-4 sm:pl-6 my-6 sm:my-8 italic text-white/90 text-base sm:text-lg lg:text-xl">
                "The key to Google Ads success is continuous testing and optimization. 
                What works today might not work tomorrow, so stay agile and data-driven."
              </blockquote>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-8 sm:mt-12 mb-4 sm:mb-6">
                Ad Copy and Creative Optimization
              </h2>
              
              <p>
                Compelling ad copy is essential for attracting clicks and driving conversions. Test different headlines, 
                descriptions, and calls-to-action to find what resonates best with your audience.
              </p>

              <p>
                Remember to continuously monitor your campaigns, test new strategies, and adapt to changing market conditions. 
                Google Ads optimization is an ongoing process that requires patience, testing, and data-driven decision making.
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
              Ready to Optimize Your Google Ads?
            </h3>
            <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base">
              Let our experts help you maximize your advertising ROI with proven strategies.
            </p>
            <Button 
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              asChild
            >
              <Link to="/contact#contact-form">Get Expert Help</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat visible={showWhatsApp} />
    </div>
  );
};

export default BlogPost1;
