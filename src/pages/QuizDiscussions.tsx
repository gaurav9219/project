import React, { useState } from 'react';
import { MessageSquare, Search, Filter, Plus, TrendingUp, Clock, Users, MessageCircle, Heart, Pin, Award, Eye } from 'lucide-react';

interface QuizDiscussionsProps {
  isDarkMode: boolean;
}

const QuizDiscussions: React.FC<QuizDiscussionsProps> = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Discussions' },
    { id: 'general', label: 'General' },
    { id: 'tips', label: 'Tips & Tricks' },
    { id: 'feedback', label: 'Feedback' },
    { id: 'showcase', label: 'Showcase' },
    { id: 'help', label: 'Help & Support' }
  ];

  const sortOptions = [
    { id: 'recent', label: 'Most Recent' },
    { id: 'popular', label: 'Most Popular' },
    { id: 'trending', label: 'Trending' },
    { id: 'unanswered', label: 'Unanswered' }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Best practices for creating engaging multiple choice questions?',
      content: 'I\'ve been creating quizzes for a few months now and I\'m looking for advice on how to make my multiple choice questions more engaging...',
      author: 'Sarah Johnson',
      authorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      authorBadge: 'Quiz Master',
      category: 'tips',
      createdAt: '2 hours ago',
      replies: 23,
      likes: 45,
      views: 234,
      isPinned: true,
      isTrending: false,
      tags: ['multiple-choice', 'engagement', 'best-practices']
    },
    {
      id: 2,
      title: 'How do you handle quiz analytics and performance tracking?',
      content: 'What metrics do you focus on when analyzing your quiz performance? I\'m particularly interested in completion rates and user engagement...',
      author: 'Michael Chen',
      authorAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      authorBadge: 'Expert Creator',
      category: 'tips',
      createdAt: '4 hours ago',
      replies: 18,
      likes: 32,
      views: 189,
      isPinned: false,
      isTrending: true,
      tags: ['analytics', 'performance', 'metrics']
    },
    {
      id: 3,
      title: 'Showcase: My latest science quiz got 10k+ plays!',
      content: 'Just wanted to share my excitement! My "Advanced Physics Concepts" quiz just hit 10,000 plays. Here\'s what I learned...',
      author: 'Emma Davis',
      authorAvatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100',
      authorBadge: 'Rising Star',
      category: 'showcase',
      createdAt: '6 hours ago',
      replies: 31,
      likes: 78,
      views: 456,
      isPinned: false,
      isTrending: true,
      tags: ['success-story', 'science', 'milestone']
    },
    {
      id: 4,
      title: 'Need help with quiz monetization strategies',
      content: 'I\'ve been creating quizzes for 6 months but struggling with monetization. What are the most effective strategies you\'ve used?',
      author: 'David Kim',
      authorAvatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
      authorBadge: 'New Creator',
      category: 'help',
      createdAt: '8 hours ago',
      replies: 15,
      likes: 28,
      views: 167,
      isPinned: false,
      isTrending: false,
      tags: ['monetization', 'strategy', 'help']
    },
    {
      id: 5,
      title: 'Feature Request: Dark mode for quiz taking interface',
      content: 'Would love to see a dark mode option for the quiz taking interface. Many users have requested this feature...',
      author: 'Lisa Rodriguez',
      authorAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      authorBadge: 'Community Advocate',
      category: 'feedback',
      createdAt: '12 hours ago',
      replies: 42,
      likes: 89,
      views: 523,
      isPinned: false,
      isTrending: false,
      tags: ['feature-request', 'ui-ux', 'dark-mode']
    },
    {
      id: 6,
      title: 'Weekly Challenge: Create a quiz about space exploration',
      content: 'This week\'s community challenge is to create an engaging quiz about space exploration. Share your creations here!',
      author: 'QuizHub Team',
      authorAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      authorBadge: 'Official',
      category: 'general',
      createdAt: '1 day ago',
      replies: 67,
      likes: 156,
      views: 892,
      isPinned: true,
      isTrending: true,
      tags: ['challenge', 'space', 'community']
    }
  ];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesCategory = selectedCategory === 'all' || discussion.category === selectedCategory;
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.likes - a.likes;
      case 'trending':
        return (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0);
      case 'unanswered':
        return a.replies - b.replies;
      default:
        return 0; // Keep original order for recent
    }
  });

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Official': return 'bg-purple-500';
      case 'Quiz Master': return 'bg-yellow-500';
      case 'Expert Creator': return 'bg-blue-500';
      case 'Community Advocate': return 'bg-green-500';
      case 'Rising Star': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <MessageSquare className="w-8 h-8 text-blue-400 mr-3" />
          <h1 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Quiz Discussions
          </h1>
        </div>
        <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
          Connect with fellow quiz creators and share knowledge
        </p>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-gray-400'} w-5 h-5`} />
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={`${isDarkMode ? 'bg-slate-800 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.label}</option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={`${isDarkMode ? 'bg-slate-800 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          >
            {sortOptions.map(option => (
              <option key={option.id} value={option.id}>{option.label}</option>
            ))}
          </select>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Start Discussion
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center`}>
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <MessageSquare className="w-6 h-6 text-blue-400" />
          </div>
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>1,247</div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Total Discussions</div>
        </div>
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center`}>
          <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Users className="w-6 h-6 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-green-400 mb-1">8,934</div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Active Members</div>
        </div>
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center`}>
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <TrendingUp className="w-6 h-6 text-purple-400" />
          </div>
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>156</div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>This Week</div>
        </div>
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center`}>
          <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Clock className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="text-2xl font-bold text-yellow-400 mb-1">23</div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Today</div>
        </div>
      </div>

      {/* Discussions List */}
      <div className="space-y-4">
        {filteredDiscussions.map((discussion) => (
          <div key={discussion.id} className={`${isDarkMode ? 'bg-slate-800 hover:bg-slate-750' : 'bg-white hover:bg-gray-50 border border-gray-200'} rounded-xl p-6 transition-colors cursor-pointer`}>
            <div className="flex items-start gap-4">
              {/* Author Avatar */}
              <img src={discussion.authorAvatar} alt={discussion.author} className="w-12 h-12 rounded-full flex-shrink-0" />

              {/* Discussion Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    {discussion.isPinned && (
                      <Pin className="w-4 h-4 text-yellow-400" />
                    )}
                    {discussion.isTrending && (
                      <div className="flex items-center bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs font-bold">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </div>
                    )}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-600'} capitalize`}>
                      {discussion.category}
                    </span>
                  </div>
                  <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                    {discussion.createdAt}
                  </span>
                </div>

                <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-bold mb-2 hover:text-blue-400 transition-colors`}>
                  {discussion.title}
                </h3>

                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-3 line-clamp-2`}>
                  {discussion.content}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {discussion.tags.map((tag, index) => (
                    <span key={index} className={`${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-600'} px-2 py-1 rounded text-xs`}>
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Author Info and Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {discussion.author}
                    </span>
                    <span className={`${getBadgeColor(discussion.authorBadge)} text-white px-2 py-1 rounded text-xs font-bold`}>
                      {discussion.authorBadge}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Eye className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`} />
                      <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>{discussion.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`} />
                      <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>{discussion.replies}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`} />
                      <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>{discussion.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredDiscussions.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">💬</div>
          <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
            No discussions found
          </h3>
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            Try adjusting your search terms or filters
          </p>
        </div>
      )}

      {/* Load More */}
      <div className="text-center">
        <button className={`${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} px-8 py-3 rounded-lg font-medium transition-colors`}>
          Load More Discussions
        </button>
      </div>
    </div>
  );
};

export default QuizDiscussions;