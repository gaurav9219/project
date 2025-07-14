import React from 'react';
import { Play, Share2, DollarSign, Plus } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-gradient-to-tr from-green-500/20 to-teal-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      {/* Science illustration */}
      <div className="hidden md:block absolute top-4 right-4 lg:right-8 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl transform rotate-12 opacity-80 flex items-center justify-center">
        <div className="text-white text-sm lg:text-xl font-bold text-center">Science Quiz</div>
      </div>
      
      <div className="relative z-10">
        <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Your Quiz Adventure
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Starts Here:
            </span>
            <br />
            <span className="text-gradient bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
              Play, Share, Earn!
            </span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 lg:mb-8 leading-relaxed">
            Build engaging quizzes, challenge others, and earn rewards
            <br />
            for your knowledge.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-white text-slate-900 px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base">
              <Plus className="w-5 h-5" />
              Create Quiz
            </button>
            
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base">
              <Play className="w-5 h-5" />
              Join Contest
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;