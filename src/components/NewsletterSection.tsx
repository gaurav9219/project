import React from 'react';
import { Mail, Check } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 mb-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-tr from-blue-500/20 to-purple-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Mail icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
          <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
          Get Quiz Insights Weekly
        </h2>
        
        <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-12 leading-relaxed">
          Join 10,000+ quiz creators and players receiving our weekly tips, strategies,
          <br className="hidden sm:block" />
          and exclusive opportunities
        </p>
        
        {/* Email subscription form */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="flex-1 relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-sm sm:text-base"
            />
            <Mail className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/70" />
          </div>
          <button className="bg-white text-purple-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base">
            Subscribe
            <span className="ml-2">→</span>
          </button>
        </div>
        
        {/* Features */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 text-white/90">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            <span className="text-sm sm:text-base">Weekly insights</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            <span className="text-sm sm:text-base">Exclusive strategies</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            <span className="text-sm sm:text-base">Unsubscribe anytime</span>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">10k+</div>
            <div className="text-white/80 text-sm sm:text-base">Subscribers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">4.9/5</div>
            <div className="text-white/80 text-sm sm:text-base">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">Weekly</div>
            <div className="text-white/80 text-sm sm:text-base">Updates</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;