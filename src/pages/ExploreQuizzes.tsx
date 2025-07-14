import React, { useState } from 'react';
import { Search, Filter, Star, Clock, Users, Play, TrendingUp, Award, Grid, List, ChevronDown } from 'lucide-react';

interface ExploreQuizzesProps {
  isDarkMode: boolean;
}

const ExploreQuizzes: React.FC<ExploreQuizzesProps> = ({ isDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    'all', 'science', 'history', 'geography', 'mathematics', 'literature', 
    'sports', 'music', 'movies', 'technology', 'art', 'politics'
  ];

  const difficulties = ['all', 'easy', 'medium', 'hard', 'expert'];

  const quizzes = [
    {
      id: 1,
      title: 'Advanced Quantum Physics',
      description: 'Dive deep into the mysteries of quantum mechanics and particle physics',
      category: 'Science',
      difficulty: 'Expert',
      creator: 'Dr. Sarah Chen',
      creatorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.9,
      participants: '2.3k',
      duration: '25 min',
      questions: 30,
      reward: '$25.00',
      image: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Physics', 'Quantum', 'Advanced'],
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: 'World Geography Masters',
      description: 'Test your knowledge of countries, capitals, and geographical features',
      category: 'Geography',
      difficulty: 'Medium',
      creator: 'Alex Johnson',
      creatorAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.7,
      participants: '5.1k',
      duration: '15 min',
      questions: 25,
      reward: '$8.50',
      image: 'https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Geography', 'Countries', 'Capitals'],
      featured: false,
      trending: true
    },
    {
      id: 3,
      title: 'Ancient Civilizations',
      description: 'Journey through time and explore the great civilizations of the past',
      category: 'History',
      difficulty: 'Hard',
      creator: 'Prof. Michael Brown',
      creatorAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.8,
      participants: '3.7k',
      duration: '20 min',
      questions: 28,
      reward: '$12.00',
      image: 'https://images.pexels.com/photos/161815/architecture-building-palace-castle-161815.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['History', 'Ancient', 'Civilizations'],
      featured: true,
      trending: false
    },
    {
      id: 4,
      title: 'Mathematical Puzzles',
      description: 'Challenge your mathematical thinking with complex problems and puzzles',
      category: 'Mathematics',
      difficulty: 'Hard',
      creator: 'Emma Davis',
      creatorAvatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.6,
      participants: '1.9k',
      duration: '30 min',
      questions: 20,
      reward: '$15.00',
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Math', 'Puzzles', 'Logic'],
      featured: false,
      trending: false
    },
    {
      id: 5,
      title: 'Classic Literature Quiz',
      description: 'Explore the world of classic literature and famous authors',
      category: 'Literature',
      difficulty: 'Medium',
      creator: 'Sophie Martin',
      creatorAvatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.5,
      participants: '4.2k',
      duration: '18 min',
      questions: 22,
      reward: '$7.50',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Literature', 'Books', 'Authors'],
      featured: false,
      trending: true
    },
    {
      id: 6,
      title: 'Sports Trivia Championship',
      description: 'Ultimate sports knowledge test covering all major sports and athletes',
      category: 'Sports',
      difficulty: 'Easy',
      creator: 'David Kim',
      creatorAvatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.4,
      participants: '6.8k',
      duration: '12 min',
      questions: 18,
      reward: '$5.00',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Sports', 'Athletes', 'Trivia'],
      featured: true,
      trending: false
    }
  ];

  const filteredQuizzes = quizzes.filter(quiz => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quiz.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quiz.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || quiz.category.toLowerCase() === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || quiz.difficulty.toLowerCase() === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return parseInt(b.participants.replace('k', '000').replace('.', '')) - parseInt(a.participants.replace('k', '000').replace('.', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      case 'reward':
        return parseFloat(b.reward.replace('$', '')) - parseFloat(a.reward.replace('$', ''));
      default:
        return 0;
    }
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-400 bg-green-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'hard': return 'text-red-400 bg-red-500/20';
      case 'expert': return 'text-purple-400 bg-purple-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Search className="w-8 h-8 text-blue-400 mr-3" />
          <h1 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Explore Quizzes
          </h1>
        </div>
        <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
          Discover thousands of quizzes across all topics and difficulty levels
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-gray-400'} w-5 h-5`} />
          <input
            type="text"
            placeholder="Search quizzes, topics, or creators..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg`}
          />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`${isDarkMode ? 'bg-slate-800 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none`}
              >
                <option value="all">All Categories</option>
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>

            {/* Difficulty Filter */}
            <div className="relative">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className={`${isDarkMode ? 'bg-slate-800 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none`}
              >
                <option value="all">All Difficulties</option>
                {difficulties.slice(1).map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>

            {/* Sort By */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`${isDarkMode ? 'bg-slate-800 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none`}
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
                <option value="reward">Highest Reward</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>View:</span>
            <div className={`flex ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'} rounded-lg p-1`}>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-blue-600 text-white' : `${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-blue-600 text-white' : `${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
          Showing {filteredQuizzes.length} quiz{filteredQuizzes.length !== 1 ? 'es' : ''}
        </p>
      </div>

      {/* Quiz Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuizzes.map((quiz) => (
            <div key={quiz.id} className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer`}>
              {/* Quiz Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={quiz.image} 
                  alt={quiz.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {quiz.featured && (
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      Featured
                    </span>
                  )}
                  {quiz.trending && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </span>
                  )}
                </div>

                {/* Difficulty */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(quiz.difficulty)}`}>
                    {quiz.difficulty}
                  </span>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Quiz Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                    {quiz.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-yellow-400 text-sm font-bold">{quiz.rating}</span>
                  </div>
                </div>

                <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-bold mb-2 line-clamp-2`}>
                  {quiz.title}
                </h3>
                
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm mb-4 line-clamp-2`}>
                  {quiz.description}
                </p>

                {/* Creator */}
                <div className="flex items-center mb-4">
                  <img src={quiz.creatorAvatar} alt={quiz.creator} className="w-6 h-6 rounded-full mr-2" />
                  <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                    by {quiz.creator}
                  </span>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Clock className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mr-1`} />
                      <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>{quiz.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mr-1`} />
                      <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>{quiz.participants}</span>
                    </div>
                  </div>
                  <span className="text-green-400 font-bold">{quiz.reward}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {quiz.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className={`${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-600'} px-2 py-1 rounded text-xs`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" />
                  Start Quiz
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredQuizzes.map((quiz) => (
            <div key={quiz.id} className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer`}>
              <div className="flex items-center gap-6">
                {/* Quiz Image */}
                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={quiz.image} alt={quiz.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Quiz Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                          {quiz.category}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-bold ${getDifficultyColor(quiz.difficulty)}`}>
                          {quiz.difficulty}
                        </span>
                        {quiz.featured && (
                          <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-xl font-bold mb-1`}>
                        {quiz.title}
                      </h3>
                      <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-2`}>
                        {quiz.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center">
                          <img src={quiz.creatorAvatar} alt={quiz.creator} className="w-4 h-4 rounded-full mr-1" />
                          <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{quiz.creator}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-yellow-400 font-bold">{quiz.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mr-1`} />
                          <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>{quiz.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mr-1`} />
                          <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>{quiz.participants}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-lg mb-2">{quiz.reward}</div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        Start Quiz
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {filteredQuizzes.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
            No quizzes found
          </h3>
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            Try adjusting your search terms or filters
          </p>
        </div>
      )}

      {/* Load More */}
      {filteredQuizzes.length > 0 && (
        <div className="text-center">
          <button className={`${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} px-8 py-3 rounded-lg font-medium transition-colors`}>
            Load More Quizzes
          </button>
        </div>
      )}
    </div>
  );
};

export default ExploreQuizzes;