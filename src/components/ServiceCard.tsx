interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  onClick?: () => void;
}

const ServiceCard = ({ title, description, icon, onClick }: ServiceCardProps) => {
  return (
    <div 
      className="group relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:border-[#F9C326]/50 transition-all duration-300 hover:transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-lg hover:shadow-[#F9C326]/10 h-full cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9C326]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 flex-shrink-0">
          {icon}
        </div>
        
        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2 sm:mb-3 group-hover:text-[#F9C326] transition-colors duration-300 leading-tight">
          {title}
        </h3>
        
        <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
