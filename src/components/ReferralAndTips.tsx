import React from 'react';
import { Users, TrendingUp, DollarSign, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface ReferralAndTipsProps {
  isDarkMode: boolean;
}

const ReferralAndTips: React.FC<ReferralAndTipsProps> = ({ isDarkMode }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const tips = [
    {
      id: 1,
      title: 'Best strategies for quiz engagement',
      description: 'Learn how to create quizzes that keep your audience coming back for more.',
      icon: TrendingUp,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20'
    },
    {
      id: 2,
      title: 'How to create high-converting quizzes',
      description: 'Learn the psychology behind quizzes that engage users and drive conversions.',
      icon: TrendingUp,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      id: 3,
      title: 'Top quiz formats that boost earnings',
      description: 'Discover the most profitable quiz formats and how to implement them effectively.',
      icon: DollarSign,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(tips.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentItems = () => {
    const start = currentSlide * itemsPerSlide;
    return tips.slice(start, start + itemsPerSlide);
  };
  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Refer & Earn Card */}
        <div className="lg:col-span-1">
          <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 rounded-2xl p-8 overflow-hidden h-full">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-4 -translate-x-4"></div>
            
            {/* Floating coins */}
            <div className="absolute top-8 right-8 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm">💰</div>
            <div className="absolute top-16 right-16 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center text-xs">💰</div>
            <div className="absolute bottom-20 right-12 w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center text-sm">💰</div>
            
            {/* Character illustration area */}
            <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center transform rotate-12">
              <div className="text-white text-2xl">🏆</div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
                  Earn up to $10
                </div>
                <h3 className="text-white text-3xl font-bold mb-3 leading-tight">
                  Refer & Earn
                </h3>
                <p className="text-white/90 text-lg mb-6">
                  Invite friends and earn bonus rewards!
                </p>
              </div>
              
              <button className="w-full bg-black/30 backdrop-blur-sm hover:bg-black/40 text-white py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Invite Friends
              </button>
            </div>
          </div>
        </div>

        {/* Quiz Creator Tips */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Quiz Creator Tips</h3>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Grow faster with expert advice</p>
            </div>
            <div className="flex items-center gap-2">
              <button className={`text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1`}>
                View All Resources
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex gap-2 ml-4">
                <button 
                  onClick={prevSlide}
                  className={`p-2 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} rounded-lg transition-colors`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextSlide}
                  className={`p-2 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} rounded-lg transition-colors`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getCurrentItems().map((tip) => (
              <div key={tip.id} className={`${isDarkMode ? 'bg-slate-800 hover:bg-slate-750' : 'bg-white hover:bg-gray-50 border border-gray-200'} rounded-xl p-6 transition-colors cursor-pointer group`}>
                <div className={`w-12 h-12 ${tip.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <tip.icon className={`w-6 h-6 ${tip.color}`} />
                </div>
                <h4 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-bold mb-3 leading-tight`}>
                  {tip.title}
                </h4>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm mb-4 leading-relaxed`}>
                  {tip.description}
                </p>
                <button className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide 
                    ? 'bg-blue-500' 
                    : isDarkMode ? 'bg-slate-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralAndTips;