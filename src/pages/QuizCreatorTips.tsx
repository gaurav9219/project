import React, { useState } from 'react';
import { Lightbulb, Search, Filter, BookOpen, Video, FileText, Users, TrendingUp, Clock, Star, Play, ChevronRight, Award, Target, Zap } from 'lucide-react';

interface QuizCreatorTipsProps {
  isDarkMode: boolean;
}

const QuizCreatorTips: React.FC<QuizCreatorTipsProps> = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Tips', icon: Lightbulb },
    { id: 'engagement', label: 'Engagement', icon: Users },
    { id: 'monetization', label: 'Monetization', icon: TrendingUp },
    { id: 'design', label: 'Design', icon: Target },
    { id: 'marketing', label: 'Marketing', icon: Zap }
  ];

  const tips = [
    {
      id: 1,
      title: 'How to Create Engaging Quiz Questions',
      description: 'Learn the art of crafting questions that captivate your audience and keep them coming back for more.',
      category: 'engagement',
      type: 'article',
      readTime: '8 min read',
      difficulty: 'Beginner',
      author: 'Sarah Johnson',
      authorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: '12.5k',
      likes: 234,
      featured: true
    },
    {
      id: 2,
      title: 'Monetization Strategies for Quiz Creators',
      description: 'Discover proven methods to turn your quiz creation skills into a sustainable income stream.',
      category: 'monetization',
      type: 'video',
      readTime: '15 min watch',
      difficulty: 'Intermediate',
      author: 'Michael Chen',
      authorAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: '8.9k',
      likes: 189,
      featured: false
    },
    {
      id: 3,
      title: 'Visual Design Best Practices for Quizzes',
      description: 'Master the visual elements that make quizzes more appealing and increase completion rates.',
      category: 'design',
      type: 'guide',
      readTime: '12 min read',
      difficulty: 'Intermediate',
      author: 'Emma Davis',
      authorAvatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: '15.2k',
      likes: 298,
      featured: true
    },
    {
      id: 4,
      title: 'Marketing Your Quizzes on Social Media',
      description: 'Effective strategies to promote your quizzes across different social media platforms.',
      category: 'marketing',
      type: 'article',
      readTime: '10 min read',
      difficulty: 'Beginner',
      author: 'David Kim',
      authorAvatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: '9.7k',
      likes: 156,
      featured: false
    },
    {
      id: 5,
      title: 'Building a Community Around Your Quizzes',
      description: 'Learn how to foster engagement and build a loyal following for your quiz content.',
      category: 'engagement',
      type: 'video',
      readTime: '20 min watch',
      difficulty: 'Advanced',
      author: 'Lisa Rodriguez',
      authorAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: '6.8k',
      likes: 134,
      featured: false
    },
    {
      id: 6,
      title: 'Advanced Quiz Analytics and Optimization',
      description: 'Deep dive into analytics to understand your audience and optimize quiz performance.',
      category: 'monetization',
      type: 'guide',
      readTime: '18 min read',
      difficulty: 'Advanced',
      author: 'James Wilson',
      authorAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: '11.3k',
      likes: 267,
      featured: true
    }
  ];

  const filteredTips = tips.filter(tip => {
    const matchesCategory = selectedCategory === 'all' || tip.category === selectedCategory;
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tip.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredTips = tips.filter(tip => tip.featured);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'text-green-400 bg-green-500/20';
      case 'intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'advanced': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'guide': return <BookOpen className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Lightbulb className="w-8 h-8 text-yellow-400 mr-3" />
          <h1 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Quiz Creator Tips
          </h1>
        </div>
        <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
          Master the art of quiz creation with expert tips and strategies
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-gray-400'} w-5 h-5`} />
          <input
            type="text"
            placeholder="Search tips and guides..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : `${isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Tips */}
      <div className="space-y-6">
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
          <Star className="w-6 h-6 text-yellow-400" />
          Featured Tips
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredTips.slice(0, 2).map((tip) => (
            <div key={tip.id} className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer`}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={tip.image} 
                  alt={tip.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(tip.difficulty)}`}>
                    {tip.difficulty}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold mb-2">{tip.title}</h3>
                  <p className="text-white/80 text-sm">{tip.description}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img src={tip.authorAvatar} alt={tip.author} className="w-8 h-8 rounded-full mr-3" />
                    <div>
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm`}>{tip.author}</p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{tip.readTime}</span>
                        <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>•</span>
                        <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{tip.views} views</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getTypeIcon(tip.type)}
                    <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} capitalize`}>{tip.type}</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  {tip.type === 'video' ? <Play className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
                  {tip.type === 'video' ? 'Watch Now' : 'Read Article'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Tips Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            All Tips & Guides
          </h2>
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            Showing {filteredTips.length} results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTips.map((tip) => (
            <div key={tip.id} className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl group cursor-pointer`}>
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={tip.image} 
                  alt={tip.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${getDifficultyColor(tip.difficulty)}`}>
                    {tip.difficulty}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <div className={`p-2 rounded-full ${isDarkMode ? 'bg-slate-800/80' : 'bg-white/80'} backdrop-blur-sm`}>
                    {getTypeIcon(tip.type)}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-bold mb-2 line-clamp-2`}>
                  {tip.title}
                </h3>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm mb-4 line-clamp-2`}>
                  {tip.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img src={tip.authorAvatar} alt={tip.author} className="w-6 h-6 rounded-full mr-2" />
                    <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{tip.author}</span>
                  </div>
                  <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{tip.readTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm">
                    <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{tip.views} views</span>
                    <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>•</span>
                    <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{tip.likes} likes</span>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-1">
                    Read
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* No Results */}
      {filteredTips.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
            No tips found
          </h3>
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            Try adjusting your search terms or filters
          </p>
        </div>
      )}

      {/* CTA Section */}
      <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-8 text-center`}>
        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
          Want to Share Your Tips?
        </h3>
        <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-6 max-w-2xl mx-auto`}>
          Have valuable insights about quiz creation? Share your knowledge with the community and help other creators succeed.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Submit Your Tip
        </button>
      </div>
    </div>
  );
};

export default QuizCreatorTips;