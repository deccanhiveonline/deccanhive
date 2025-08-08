import { useState } from 'react';
import { LucideIcon, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

interface ModernServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  benefits: string[];
  caseStudies: Array<{
    client: string;
    result: string;
  }>;
  pricing: string;
  cta: string;
  image: string;
}

const ModernServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  features, 
  benefits, 
  caseStudies, 
  pricing, 
  cta,
  image 
}: ModernServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="group relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 hover:border-[#F9C326]/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#F9C326]/10 h-full cursor-pointer"
           onClick={() => setIsOpen(true)}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9C326]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl lg:rounded-2xl"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-[#F9C326]/10 rounded-lg lg:rounded-xl mb-3 sm:mb-4 lg:mb-6 flex-shrink-0">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#F9C326]" />
          </div>
          
          <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#F9C326] transition-colors duration-300 leading-tight text-overflow-safe">
            {title}
          </h3>
          
          <p className="text-xs sm:text-sm lg:text-base text-[#6E6E6E] leading-relaxed flex-grow text-overflow-safe">
            {description}
          </p>
          
          <div className="mt-3 sm:mt-4 lg:mt-6 pt-3 sm:pt-4 border-t border-white/10">
            <div className="flex items-center text-[#F9C326] text-xs sm:text-sm font-semibold group-hover:text-[#F9C326]/80 transition-colors">
              <span className="text-overflow-safe">Learn More</span>
              <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>

      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent className="bg-[#2B2B2B] border-[#F9C326]/20 text-white max-h-[90vh]">
          <div className="overflow-y-auto">
            <DrawerHeader className="text-center border-b border-white/10 pb-4">
              <div className="flex items-center justify-center w-16 h-16 bg-[#F9C326]/10 rounded-xl mx-auto mb-4">
                <Icon className="w-8 h-8 text-[#F9C326]" />
              </div>
              <DrawerTitle className="text-xl sm:text-2xl font-bold text-white mb-2 text-overflow-safe">
                {title}
              </DrawerTitle>
              <DrawerDescription className="text-sm sm:text-base text-[#6E6E6E] text-overflow-safe">
                {description}
              </DrawerDescription>
            </DrawerHeader>

            <div className="p-4 sm:p-6 space-y-6">
              {/* Service Image */}
              <div className="w-full h-48 sm:h-64 rounded-xl overflow-hidden">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-[#F9C326] mb-3 text-overflow-safe">What's Included</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-[#6E6E6E]">
                      <CheckCircle className="w-4 h-4 text-[#F9C326] mr-2 flex-shrink-0" />
                      <span className="text-overflow-safe">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-lg font-semibold text-[#F9C326] mb-3 text-overflow-safe">Benefits</h4>
                <div className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm text-[#6E6E6E]">
                      <Star className="w-4 h-4 text-[#F9C326] mr-2 flex-shrink-0" />
                      <span className="text-overflow-safe">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Studies */}
              <div>
                <h4 className="text-lg font-semibold text-[#F9C326] mb-3 text-overflow-safe">Success Stories</h4>
                <div className="space-y-3">
                  {caseStudies.map((study, index) => (
                    <div key={index} className="bg-black/40 rounded-lg p-3 border border-white/10">
                      <div className="text-sm font-semibold text-white mb-1 text-overflow-safe">{study.client}</div>
                      <div className="text-xs text-[#6E6E6E] text-overflow-safe">{study.result}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div>
                <h4 className="text-lg font-semibold text-[#F9C326] mb-3 text-overflow-safe">Investment</h4>
                <div className="bg-[#F9C326]/10 rounded-lg p-3 border border-[#F9C326]/20">
                  <div className="text-sm text-white text-overflow-safe">{pricing}</div>
                </div>
              </div>
            </div>

            <DrawerFooter className="border-t border-white/10">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  className="flex-1 bg-[#F9C326] text-black hover:bg-[#F9C326]/90 font-semibold rounded-full text-sm sm:text-base transition-all duration-300 hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  {cta}
                </Button>
                <DrawerClose asChild>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-[#F9C326]/30 text-[#F9C326] hover:bg-[#F9C326]/10 rounded-full text-sm sm:text-base"
                  >
                    Close
                  </Button>
                </DrawerClose>
              </div>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ModernServiceCard;
