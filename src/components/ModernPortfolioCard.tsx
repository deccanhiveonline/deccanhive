import { ArrowUpRight, Calendar, TrendingUp } from 'lucide-react';

interface ModernPortfolioCardProps {
  title: string;
  client: string;
  challenge: string;
  strategy: string;
  result: string;
  duration: string;
  metrics: {
    [key: string]: string;
  };
  image: string;
  tags: string[];
}

const ModernPortfolioCard = ({ title, client, challenge, strategy, result, duration, metrics, image, tags }: ModernPortfolioCardProps) => {
  return (
    <div className="group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#F9C326]/40 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#F9C326]/20">
      <div className="relative overflow-hidden h-72">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        <div className="absolute top-6 left-6 right-6">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="bg-[#F9C326]/20 backdrop-blur-sm text-[#F9C326] px-4 py-2 rounded-full text-sm font-semibold border border-[#F9C326]/30">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center text-white/80 text-sm mb-2">
            <Calendar className="w-4 h-4 mr-2" />
            {duration}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-[#F9C326] font-semibold text-lg">{client}</p>
        </div>
      </div>
      
      <div className="p-8">
        <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-gradient-to-r from-[#F9C326]/10 to-[#F9C326]/5 rounded-2xl border border-[#F9C326]/20">
          {Object.entries(metrics).map(([key, value], metricIndex) => (
            <div key={metricIndex} className="text-center">
              <div className="text-2xl font-bold text-[#F9C326] mb-1">{value}</div>
              <div className="text-[#6E6E6E] text-sm uppercase font-medium">{key}</div>
            </div>
          ))}
        </div>
        
        <div className="space-y-6 mb-8">
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 w-3 h-3 bg-[#F9C326] rounded-full mt-1"></div>
            <h4 className="text-[#F9C326] font-bold text-sm uppercase tracking-wide mb-2">Challenge</h4>
            <p className="text-white/80 leading-relaxed">{challenge}</p>
          </div>
          
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 w-3 h-3 bg-[#F9C326] rounded-full mt-1"></div>
            <h4 className="text-[#F9C326] font-bold text-sm uppercase tracking-wide mb-2">Strategy</h4>
            <p className="text-white/80 leading-relaxed">{strategy}</p>
          </div>
          
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 w-3 h-3 bg-[#F9C326] rounded-full mt-1"></div>
            <h4 className="text-[#F9C326] font-bold text-sm uppercase tracking-wide mb-2">Result</h4>
            <p className="text-white font-semibold">{result}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-[#F9C326] group-hover:text-white transition-colors cursor-pointer font-semibold">
            <span>View Full Case Study</span>
            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
          <TrendingUp className="w-6 h-6 text-[#F9C326]/60" />
        </div>
      </div>
    </div>
  );
};

export default ModernPortfolioCard;
