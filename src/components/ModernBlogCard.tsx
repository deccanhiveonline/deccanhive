import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ModernBlogCardProps {
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

const ModernBlogCard = ({
  title,
  excerpt,
  category,
  author,
  date,
  readTime,
  image,
  tags,
  route
}: ModernBlogCardProps) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(route);
  };

  return (
    <div className="group relative bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-[#F9C326]/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#F9C326]/10 h-full flex flex-col">
      {/* Image */}
      <div className="relative h-40 sm:h-48 md:h-52 lg:h-48 overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
          <span className="bg-[#F9C326]/90 text-black px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 lg:p-7 xl:p-8 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {tags.slice(0, 2).map((tag, index) => (
            <span 
              key={index}
              className="bg-white/5 border border-white/10 text-[#6E6E6E] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-xs hover:bg-white/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 leading-tight group-hover:text-[#F9C326] transition-colors duration-300 line-clamp-2 flex-shrink-0">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-[#6E6E6E] mb-4 sm:mb-5 lg:mb-6 leading-relaxed text-xs sm:text-sm lg:text-base line-clamp-3 flex-grow">
          {excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-[#6E6E6E] mb-4 sm:mb-5 lg:mb-6 gap-2 sm:gap-3 lg:gap-4 flex-shrink-0">
          <div className="flex items-center flex-wrap gap-2 sm:gap-3 lg:gap-4">
            <div className="flex items-center">
              <User className="w-3 h-3 mr-1 sm:mr-1.5 flex-shrink-0" />
              <span className="truncate max-w-[80px] sm:max-w-[100px]">{author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-1 sm:mr-1.5 flex-shrink-0" />
              <span>{new Date(date).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1 sm:mr-1.5 flex-shrink-0" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Read More Button */}
        <Button 
          onClick={handleReadMore}
          className="w-full bg-transparent border border-[#F9C326]/20 text-[#F9C326] hover:bg-[#F9C326] hover:text-black font-semibold py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 group-hover:border-[#F9C326] group-hover:shadow-lg group-hover:shadow-[#F9C326]/20 text-sm sm:text-base flex-shrink-0"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  );
};

export default ModernBlogCard;
