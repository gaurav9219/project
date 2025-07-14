import React from 'react';

interface CategoryCardProps {
  title: string;
  subtitle: string;
  count: number;
  color: string;
  icon: string;
  gradient: string;
  decorativeElements: string[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  subtitle, 
  count, 
  color, 
  icon, 
  gradient, 
  decorativeElements 
}) => {
  return (
    <div className={`relative ${gradient} rounded-2xl p-4 lg:p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group overflow-hidden h-40 lg:h-48`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-2 right-2 text-lg lg:text-2xl opacity-60">
          {decorativeElements[0]}
        </div>
        <div className="absolute top-1/2 right-4 text-base lg:text-xl opacity-40">
          {decorativeElements[1]}
        </div>
        <div className="absolute bottom-4 right-6 text-sm lg:text-lg opacity-50">
          {decorativeElements[2]}
        </div>
        <div className="absolute top-0 right-0 w-16 h-16 lg:w-24 lg:h-24 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 lg:w-16 lg:h-16 bg-white/10 rounded-full translate-y-4 -translate-x-4"></div>
      </div>
      
      {/* Count badge */}
      <div className="absolute top-3 left-3 lg:top-4 lg:left-4 w-6 h-6 lg:w-8 lg:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-xs lg:text-sm">{count}</span>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="mt-6 lg:mt-8">
          <div className="text-2xl lg:text-4xl mb-2">
            {icon}
          </div>
        </div>
        
        <div>
          <h3 className="text-white text-lg lg:text-2xl font-bold mb-1 leading-tight">{subtitle}</h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;