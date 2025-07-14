import React from 'react';
import { Users, Trophy, BookOpen, Star } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { icon: Users, label: 'Active Players', value: '50K+', color: 'text-blue-400' },
    { icon: BookOpen, label: 'Total Quizzes', value: '10K+', color: 'text-green-400' },
    { icon: Trophy, label: 'Contests Won', value: '2.5K+', color: 'text-yellow-400' },
    { icon: Star, label: 'Average Rating', value: '4.8', color: 'text-purple-400' },
  ];

  return (
    <section className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 ${stat.color} mx-auto mb-2 sm:mb-4 rounded-lg bg-slate-700 flex items-center justify-center`}>
              <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
            <div className="text-slate-400 text-xs sm:text-sm lg:text-base">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;