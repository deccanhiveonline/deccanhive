import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  isFirstLoad?: boolean;
}

const LoadingScreen = ({ isFirstLoad = false }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isFirstLoad) return;
    
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [isFirstLoad]);

  // Only show loading screen on first load
  if (!isFirstLoad) return null;

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 px-4">
      <div className="animated-3d-bg">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
        <div className="floating-shape shape-6"></div>
      </div>
      
      {/* Brand Logo - Responsive */}
      <div className="relative z-10 mb-6 sm:mb-8">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center">
            {/* Brand logo placeholder */}
            <img 
                  src="/logo2.png" 
                  alt="Deccan Hive Logo" 
                  className="w-12 h-12 object-contain"
                />
          </div>
          <div className="text-center sm:text-left">
            <div className="font-bold text-xl sm:text-2xl md:text-2xl text-white">DECCAN HIVE</div>
            <div className="text-xs sm:text-sm text-white/60">DIGITAL MARKETING AGENCY</div>
          </div>
        </div>
      </div>
      
      {/* Progress Bar - Responsive */}
      <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#F9C326] rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Progress Text - Responsive */}
      <div className="relative z-10 mt-3 sm:mt-4 text-white/60 text-sm sm:text-base text-center">
        Loading... {progress}%
      </div>
    </div>
  );
};

export default LoadingScreen;
