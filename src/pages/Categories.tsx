import React, { useState } from 'react';
import { Grid3x3, Search, Filter, TrendingUp } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';

interface CategoriesProps {
  isDarkMode: boolean;
}

const Categories: React.FC<CategoriesProps> = ({ isDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    {
      title: 'Movies',
      subtitle: 'MOVIES & TV QUIZ',
      count: 9,
      color: 'purple',
      icon: '🎬',
      gradient: 'bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600',
      decorativeElements: ['🍿', '🏆', '🎭'],
      popularity: 95,
      totalPlayers: '125k'
    },
    {
      title: 'Music',
      subtitle: 'MUSIC QUIZ',
      count: 2,
      color: 'pink',
      icon: '🎵',
      gradient: 'bg-gradient-to-br from-pink-500 via-purple-600 to-purple-700',
      decorativeElements: ['🎤', '🎧', '💿'],
      popularity: 88,
      totalPlayers: '98k'
    },
    {
      title: 'Politics',
      subtitle: 'POLITICS & CURRENT AFFAIRS QUIZ',
      count: 6,
      color: 'orange',
      icon: '🗳️',
      gradient: 'bg-gradient-to-br from-orange-500 via-red-600 to-red-700',
      decorativeElements: ['🏛️', '⭐', '🦅'],
      popularity: 72,
      totalPlayers: '67k'
    },
    {
      title: 'Puzzle',
      subtitle: 'PUZZLES & LOGIC',
      count: 4,
      color: 'blue',
      icon: '🧩',
      gradient: 'bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700',
      decorativeElements: ['❓', '🔍', '💡'],
      popularity: 91,
      totalPlayers: '112k'
    },
    {
      title: 'Science',
      subtitle: 'SCIENCE & TECHNOLOGY',
      count: 12,
      color: 'green',
      icon: '🔬',
      gradient: 'bg-gradient-to-br from-green-500 via-teal-600 to-blue-600',
      decorativeElements: ['⚗️', '🧪', '🔭'],
      popularity: 97,
      totalPlayers: '156k'
    },
    {
      title: 'Sports',
      subtitle: 'SPORTS & FITNESS',
      count: 8,
      color: 'red',
      icon: '⚽',
      gradient: 'bg-gradient-to-br from-red-500 via-orange-600 to-yellow-600',
      decorativeElements: ['🏀', '🏈', '🎾'],
      popularity: 85,
      totalPlayers: '89k'
    },
    {
      title: 'History',
      subtitle: 'HISTORY & CULTURE',
      count: 15,
      color: 'amber',
      icon: '🏛️',
      gradient: 'bg-gradient-to-br from-amber-500 via-orange-600 to-red-600',
      decorativeElements: ['📜', '⚔️', '👑'],
      popularity: 79,
      totalPlayers: '78k'
    },
    {
      title: 'Literature',
      subtitle: 'BOOKS & LITERATURE',
      count: 7,
      color: 'indigo',
      icon: '📚',
      gradient: 'bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600',
      decorativeElements: ['📖', '✒️', '📝'],
      popularity: 73,
      totalPlayers: '65k'
    },
    {
      title: 'Geography',
      subtitle: 'WORLD GEOGRAPHY',
      count: 11,
      color: 'teal',
      icon: '🌍',
      gradient: 'bg-gradient-to-br from-teal-500 via-green-600 to-blue-600',
      decorativeElements: ['🗺️', '🏔️', '🌊'],
      popularity: 82,
      totalPlayers: '92k'
    },
    {
      title: 'Art',
      subtitle: 'ART & DESIGN',
      count: 5,
      color: 'rose',
      icon: '🎨',
      gradient: 'bg-gradient-to-br from-rose-500 via-pink-600 to-purple-600',
      decorativeElements: ['🖌️', '🎭', '🖼️'],
      popularity: 68,
      totalPlayers: '54k'
    },
    {
      title: 'Food',
      subtitle: 'FOOD & COOKING',
      count: 9,
      color: 'yellow',
      icon: '🍳',
      gradient: 'bg-gradient-to-br from-yellow-500 via-orange-600 to-red-600',
      decorativeElements: ['🍕', '🍰', '🥘'],
      popularity: 76,
      totalPlayers: '71k'
    },
    {
      title: 'Technology',
      subtitle: 'TECH & PROGRAMMING',
      count: 13,
      color: 'cyan',
      icon: '💻',
      gradient: 'bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600',
      decorativeElements: ['⚡', '🔧', '💾'],
      popularity: 94,
      totalPlayers: '134k'
    }
  ];

  const filteredCategories = categories
    .filter(category => 
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.popularity - a.popularity;
        case 'quizzes':
          return b.count - a.count;
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Grid3x3 className="w-8 h-8 text-blue-400 mr-3" />
          <h1 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Quiz Categories
          </h1>
        </div>
        <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
          Explore all quiz categories and find your favorite topics
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-gray-400'} w-5 h-5`} />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className={`w-5 h-5 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`} />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`${isDarkMode ? 'bg-slate-800 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              <option value="popular">Most Popular</option>
              <option value="quizzes">Most Quizzes</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center`}>
          <div className="text-3xl font-bold text-blue-400 mb-2">{categories.length}</div>
          <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Total Categories</div>
        </div>
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center`}>
          <div className="text-3xl font-bold text-green-400 mb-2">{categories.reduce((sum, cat) => sum + cat.count, 0)}</div>
          <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Total Quizzes</div>
        </div>
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center`}>
          <div className="text-3xl font-bold text-purple-400 mb-2">1.2M+</div>
          <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Active Players</div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCategories.map((category, index) => (
          <div key={index} className="relative group">
            <CategoryCard
              title={category.title}
              subtitle={category.subtitle}
              count={category.count}
              color={category.color}
              icon={category.icon}
              gradient={category.gradient}
              decorativeElements={category.decorativeElements}
            />
            
            {/* Hover overlay with additional info */}
            <div className="absolute inset-0 bg-black/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
              <div className="text-center text-white">
                <div className="flex items-center justify-center mb-3">
                  <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-green-400 font-bold">{category.popularity}% Popular</span>
                </div>
                <div className="text-sm text-slate-300 mb-4">
                  {category.totalPlayers} players
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Explore Category
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No results */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <div className={`text-6xl mb-4`}>🔍</div>
          <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
            No categories found
          </h3>
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            Try adjusting your search terms or filters
          </p>
        </div>
      )}
    </div>
  );
};

export default Categories;