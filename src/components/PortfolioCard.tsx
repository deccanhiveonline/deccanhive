import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PortfolioCardProps {
  title: string;
  challenge: string;
  result: string;
  image?: string;
}

const PortfolioCard = ({ title, challenge, result, image }: PortfolioCardProps) => {
  const navigate = useNavigate();

  const handleViewCaseStudy = () => {
    navigate('/portfolio');
  };
  return (
    <div className="group bg-black/30 backdrop-blur-sm border border-[#F9C326]/20 rounded-2xl overflow-hidden hover:border-[#F9C326]/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#F9C326]/10">
      {image && (
        <div className="relative overflow-hidden h-48">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F9C326] transition-colors">
          {title}
        </h3>
        
        <div className="space-y-3 mb-6">
          <div>
            <span className="text-[#F9C326] font-medium text-sm">CHALLENGE:</span>
            <p className="text-[#6E6E6E] text-sm mt-1">{challenge}</p>
          </div>
          <div>
            <span className="text-[#F9C326] font-medium text-sm">RESULT:</span>
            <p className="text-white font-semibold text-sm mt-1">{result}</p>
          </div>
        </div>
        
        <div 
          className="flex items-center text-[#F9C326] group-hover:text-white transition-colors cursor-pointer"
          onClick={handleViewCaseStudy}
        >
          <span className="font-semibold">View Case Study</span>
          <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
