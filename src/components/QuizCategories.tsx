import React from 'react';
import CategoryCard from './CategoryCard';
import { ChevronLeft, ChevronRight, Dot } from 'lucide-react';

interface QuizCategoriesProps {
  isDarkMode: boolean;
}

const QuizCategories: React.FC<QuizCategoriesProps> = ({ isDarkMode }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const categories = [
    {
      title: 'Movies',
      subtitle: 'MOVIES & TV QUIZ',
      count: 9,
      color: 'purple',
      icon: '🎬',
      gradient: 'bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600',
      decorativeElements: ['🍿', '🏆', '🎭']
    },
    {
      title: 'Music',
      subtitle: 'MUSIC QUIZ',
      count: 2,
      color: 'pink',
      icon: '🎵',
      gradient: 'bg-gradient-to-br from-pink-500 via-purple-600 to-purple-700',
      decorativeElements: ['🎤', '🎧', '💿']
    },
    {
      title: 'Politics',
      subtitle: 'POLITICS & CURRENT AFFAIRS QUIZ',
      count: 6,
      color: 'orange',
      icon: '🗳️',
      gradient: 'bg-gradient-to-br from-orange-500 via-red-600 to-red-700',
      decorativeElements: ['🏛️', '⭐', '🦅']
    },
    {
      title: 'Puzzle',
      subtitle: 'PUZZLES & LOGIC',
      count: 4,
      color: 'blue',
      icon: '🧩',
      gradient: 'bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700',
      decorativeElements: ['❓', '🔍', '💡']
    },
    {
      title: 'Science',
      subtitle: 'SCIENCE & TECHNOLOGY',
      count: 12,
      color: 'green',
      icon: '🔬',
      gradient: 'bg-gradient-to-br from-green-500 via-teal-600 to-blue-600',
      decorativeElements: ['⚗️', '🧪', '🔭']
    },
    {
      title: 'Sports',
      subtitle: 'SPORTS & FITNESS',
      count: 8,
      color: 'red',
      icon: '⚽',
      gradient: 'bg-gradient-to-br from-red-500 via-orange-600 to-yellow-600',
      decorativeElements: ['🏀', '🏈', '🎾']
    },
    {
      title: 'History',
      subtitle: 'HISTORY & CULTURE',
      count: 15,
      color: 'amber',
      icon: '🏛️',
      gradient: 'bg-gradient-to-br from-amber-500 via-orange-600 to-red-600',
      decorativeElements: ['📜', '⚔️', '👑']
    },
    {
      title: 'Literature',
      subtitle: 'BOOKS & LITERATURE',
      count: 7,
      color: 'indigo',
      icon: '📚',
      gradient: 'bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600',
      decorativeElements: ['📖', '✒️', '📝']
    },
    {
      title: 'Geography',
      subtitle: 'WORLD GEOGRAPHY',
      count: 11,
      color: 'teal',
      icon: '🌍',
      gradient: 'bg-gradient-to-br from-teal-500 via-green-600 to-blue-600',
      decorativeElements: ['🗺️', '🏔️', '🌊']
    },
    {
      title: 'Art',
      subtitle: 'ART & DESIGN',
      count: 5,
      color: 'rose',
      icon: '🎨',
      gradient: 'bg-gradient-to-br from-rose-500 via-pink-600 to-purple-600',
      decorativeElements: ['🖌️', '🎭', '🖼️']
    },
    {
      title: 'Food',
      subtitle: 'FOOD & COOKING',
      count: 9,
      color: 'yellow',
      icon: '🍳',
      gradient: 'bg-gradient-to-br from-yellow-500 via-orange-600 to-red-600',
      decorativeElements: ['🍕', '🍰', '🥘']
    },
    {
      title: 'Technology',
      subtitle: 'TECH & PROGRAMMING',
      count: 13,
      color: 'cyan',
      icon: '💻',
      gradient: 'bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600',
      decorativeElements: ['⚡', '🔧', '💾']
    }
  ];

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(categories.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentItems = () => {
    const start = currentSlide * itemsPerSlide;
    return categories.slice(start, start + itemsPerSlide);
  };
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Quiz Categories</h2>
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} hidden sm:block`}>Explore different quiz topics</p>
        </div>
        <div className="hidden sm:flex gap-2">
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {getCurrentItems().map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            subtitle={category.subtitle}
            count={category.count}
            color={category.color}
            icon={category.icon}
            gradient={category.gradient}
            decorativeElements={category.decorativeElements}
          />
        ))}
      </div>
      
      {/* Pagination dots */}
      <div className="flex justify-center mt-4 lg:mt-6 gap-2">
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
    </section>
  );
};

export default QuizCategories;