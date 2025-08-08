import { useState, useEffect } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModernBlogCard from '@/components/ModernBlogCard';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import LoadingScreen from '@/components/LoadingScreen';
import AnimatedBackground from '@/components/AnimatedBackground';

// Blog data interface and data
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  slug: string;
  route: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 2,
    title: 'Local SEO Strategies That Actually Work in 2024',
    excerpt: 'Proven local SEO techniques to help your business rank higher in local search results and attract more customers. Step-by-step implementation guide.',
    category: 'guide',
    author: 'Mohammed Ali',
    date: '2024-01-15',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    tags: ['SEO', 'Local Business', 'Google My Business', 'Rankings'],
    slug: 'local-seo-strategies-2024',
    route: '/blog/local-seo-strategies-2024'
  },
  {
    id: 1,
    title: 'How to Optimize Your Google Ads for Maximum ROI',
    excerpt: 'Learn proven strategies to improve your Google Ads performance and achieve better return on investment. Complete guide with actionable tips and real examples.',
    category: 'tips',
    author: 'Priya Sharma',
    date: '2024-01-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop',
    tags: ['Google Ads', 'PPC', 'ROI', 'Optimization'],
    slug: 'optimize-google-ads-roi',
    route: '/blog/optimize-google-ads-roi'
  },
].sort((a, b) => b.id - a.id); // Sort by newest first (highest id)

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  if (category === 'all') return blogPosts;
  return blogPosts.filter(post => post.category === category);
};

const Blog = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isFirstLoad, setIsFirstLoad] = useState(() => {
    const hasVisited = sessionStorage.getItem('blog-visited');
    return !hasVisited;
  });
  
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
      sessionStorage.setItem('blog-visited', 'true');
    }, 2000);

    const handleScroll = () => {
      setShowWhatsApp(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'trends', name: 'Trends', count: blogPosts.filter(p => p.category === 'trends').length },
    { id: 'tips', name: 'Tips & Tricks', count: blogPosts.filter(p => p.category === 'tips').length },
    { id: 'guide', name: 'Guides', count: blogPosts.filter(p => p.category === 'guide').length },
    { id: 'case-study', name: 'Case Studies', count: blogPosts.filter(p => p.category === 'case-study').length }
  ];

  const filteredPosts = getBlogPostsByCategory(activeCategory).filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSearch;
  });

  if (isFirstLoad) {
    return <LoadingScreen isFirstLoad={true} />;
  }

  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 lg:py-32">
        <AnimatedBackground />

        <div className="container mx-auto text-center relative z-10 max-w-7xl">
          <div className="inline-flex items-center bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 mb-6 sm:mb-8">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold text-sm sm:text-base lg:text-lg">Knowledge Hub</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 sm:mb-8 lg:mb-12 leading-tight">
            DIGITAL MARKETING<br />
            <span className="text-yellow-400">INSIGHTS</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-12 sm:mb-16 lg:mb-20 max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed px-2 sm:px-4">
            Stay ahead of the curve with our latest insights, tips, and strategies in the ever-evolving world of digital marketing. Learn from industry experts and real success stories.
          </p>
          
          {/* Enhanced Search Bar */}
          <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto relative px-2 sm:px-4">
            <div className="relative bg-white/5 border border-white/10 rounded-2xl lg:rounded-3xl p-2 lg:p-3 backdrop-blur-xl">
              <input
                type="text"
                placeholder="Search articles, topics, or strategies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 text-white placeholder-white/60 focus:outline-none text-sm sm:text-base lg:text-lg"
              />
              <div className="absolute right-2 lg:right-3 top-1/2 transform -translate-y-1/2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-yellow-400 rounded-xl lg:rounded-2xl flex items-center justify-center">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 px-4 lg:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              EXPLORE BY <span className="text-yellow-400">CATEGORY</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-2 sm:px-4">
              Find exactly what you're looking for with our organized content categories
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-4 sm:px-6 lg:px-8 xl:px-10 py-2 sm:py-3 lg:py-4 rounded-2xl font-bold transition-all duration-300 text-sm sm:text-base lg:text-lg ${
                  activeCategory === category.id
                    ? 'bg-yellow-400 text-black shadow-2xl shadow-yellow-400/30'
                    : 'bg-white/5 border border-white/10 text-white hover:bg-yellow-400/10 hover:border-yellow-400/30'
                }`}
              >
                <span className="relative z-10">{category.name}</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs sm:text-sm font-bold ${
                  activeCategory === category.id 
                    ? 'bg-black/20 text-black' 
                    : 'bg-yellow-400/20 text-yellow-400'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 px-4 lg:px-6">
        <div className="container mx-auto max-w-8xl">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 sm:py-20 lg:py-24">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-yellow-400/10 border border-yellow-400/20 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
                <Search className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-yellow-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">No articles found</h3>
              <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 max-w-md lg:max-w-lg mx-auto">Try adjusting your search or filter criteria to find what you're looking for.</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-6 sm:px-8 lg:px-10 py-3 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg shadow-lg"
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
              {filteredPosts.map((post, index) => (
                <ModernBlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  author={post.author}
                  date={post.date}
                  readTime={post.readTime}
                  image={post.image}
                  tags={post.tags}
                  slug={post.slug}
                  route={post.route}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat visible={showWhatsApp} />
    </div>
  );
};

export default Blog;
