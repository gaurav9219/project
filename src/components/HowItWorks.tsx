import React from 'react';
import { Search, Play, Trophy, ChevronRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Browse Categories',
      description: 'Explore our diverse range of quiz categories to find topics that interest you.',
      icon: Search,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Take Quizzes',
      description: 'Challenge yourself with quizzes of varying difficulty levels and formats.',
      icon: Play,
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Earn Rewards',
      description: 'Collect points, badges, and climb the leaderboards as you complete quizzes.',
      icon: Trophy,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section className="mb-12">
      <div className="text-center mb-12">
        <div className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
          Simple Process
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">How It Works</h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
          Getting started with our quiz platform is easy. Follow these simple steps to begin your quiz journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {steps.map((step, index) => (
          <div key={step.id} className="relative">
            {/* Step Card */}
            <div className="bg-slate-800 rounded-xl sm:rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer">
              {/* Image Section */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${step.gradient} opacity-70`}></div>
                
                {/* Step Number */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-base sm:text-lg">{step.id}</span>
                </div>

                {/* Icon */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">{step.description}</p>
                
                <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 group-hover:gap-3 transition-all text-sm sm:text-base">
                  Learn more
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>

            {/* Connection Arrow (except for last item) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 mx-auto text-sm sm:text-base">
          <Play className="w-5 h-5" />
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;