import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  rating: number;
}

const TestimonialCard = ({ quote, author, company, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-black/30 backdrop-blur-sm border border-[#F9C326]/20 rounded-2xl p-8 hover:border-[#F9C326]/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#F9C326]/10">
      <div className="mb-6">
        <Quote className="w-8 h-8 text-[#F9C326] mb-4" />
        <p className="text-[#6E6E6E] leading-relaxed italic">
          "{quote}"
        </p>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-white font-semibold">{author}</h4>
          <p className="text-[#6E6E6E] text-sm">{company}</p>
        </div>
        
        <div className="flex space-x-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#F9C326] text-[#F9C326]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;