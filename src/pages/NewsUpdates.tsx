import React, { useState } from 'react';
import { Newspaper, Calendar, User, MessageCircle, Heart, Share2, Bookmark, TrendingUp } from 'lucide-react';

interface NewsUpdatesProps {
  isDarkMode: boolean;
}

const NewsUpdates: React.FC<NewsUpdatesProps> = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'updates', 'features', 'events', 'community'];

  const newsItems = [
    {
      id: 1,
      title: 'New AI-Powered Quiz Generator Now Live!',
      excerpt: 'Create personalized quizzes instantly with our advanced AI technology. Generate questions on any topic in seconds.',
      content: 'We are excited to announce the launch of our revolutionary AI-powered quiz generator...',
      category: 'features',
      author: 'QuizHub Team',
      authorAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2025-01-15',
      readTime: '3 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 234,
      comments: 45,
      shares: 67,
      trending: true
    },
    {
      id: 2,
      title: 'Global Quiz Championship 2025 Registration Open',
      excerpt: 'Join thousands of quiz enthusiasts from around the world in the biggest quiz competition of the year.',
      content: 'The Global Quiz Championship 2025 is here! Registration is now open for participants worldwide...',
      category: 'events',
      author: 'Sarah Johnson',
      authorAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2025-01-12',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 189,
      comments: 32,
      shares: 89,
      trending: false
    },
    {
      id: 3,
      title: 'Community Spotlight: Top Quiz Creators of January',
      excerpt: 'Meet the amazing creators who have been making outstanding quizzes and engaging our community.',
      content: 'This month we are highlighting some of our most creative and engaging quiz creators...',
      category: 'community',
      author: 'Michael Chen',
      authorAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2025-01-10',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 156,
      comments: 28,
      shares: 43,
      trending: false
    },
    {
      id: 4,
      title: 'Platform Update: Enhanced Mobile Experience',
      excerpt: 'We have rolled out major improvements to our mobile app, making quiz-taking smoother than ever.',
      content: 'Our latest platform update focuses on delivering an exceptional mobile experience...',
      category: 'updates',
      author: 'Emma Davis',
      authorAvatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2025-01-08',
      readTime: '2 min read',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 298,
      comments: 56,
      shares: 78,
      trending: true
    },
    {
      id: 5,
      title: 'New Quiz Categories: Art History and Philosophy',
      excerpt: 'Expand your knowledge with our two newest quiz categories covering art history and philosophical concepts.',
      content: 'We are thrilled to introduce two new quiz categories that will challenge and inspire...',
      category: 'features',
      author: 'David Kim',
      authorAvatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2025-01-05',
      readTime: '3 min read',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 167,
      comments: 23,
      shares: 34,
      trending: false
    },
    {
      id: 6,
      title: 'Weekly Leaderboard Reset and New Rewards',
      excerpt: 'Check out the new reward structure for our weekly leaderboards and see how you can earn more.',
      content: 'We have updated our weekly leaderboard system with exciting new rewards...',
      category: 'updates',
      author: 'Lisa Rodriguez',
      authorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      date: '2025-01-03',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 203,
      comments: 41,
      shares: 52,
      trending: false
    }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Newspaper className="w-8 h-8 text-blue-400 mr-3" />
          <h1 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            News & Updates
          </h1>
        </div>
        <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
          Stay updated with the latest features, events, and community highlights
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 capitalize ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                : `${isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`
            }`}
          >
            {category === 'all' ? 'All News' : category}
          </button>
        ))}
      </div>

      {/* Featured/Trending News */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredNews.filter(item => item.trending).slice(0, 2).map((item) => (
          <div key={item.id} className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer`}>
            <div className="relative h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Trending badge */}
              <div className="absolute top-4 left-4 flex items-center bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                <TrendingUp className="w-4 h-4 mr-1" />
                Trending
              </div>
              
              {/* Category badge */}
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold capitalize">
                {item.category}
              </div>
            </div>
            
            <div className="p-6">
              <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3 line-clamp-2`}>
                {item.title}
              </h2>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-4 line-clamp-3`}>
                {item.excerpt}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src={item.authorAvatar} alt={item.author} className="w-8 h-8 rounded-full mr-3" />
                  <div>
                    <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm`}>{item.author}</div>
                    <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-xs`}>
                      {formatDate(item.date)} • {item.readTime}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center">
                    <Heart className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mr-1`} />
                    <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>{item.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mr-1`} />
                    <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>{item.comments}</span>
                  </div>
                  <div className="flex items-center">
                    <Share2 className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mr-1`} />
                    <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>{item.shares}</span>
                  </div>
                </div>
                <button className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'} transition-colors`}>
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Regular News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.filter(item => !item.trending).map((item) => (
          <div key={item.id} className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl group cursor-pointer`}>
            <div className="relative h-40 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Category badge */}
              <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold capitalize">
                {item.category}
              </div>
            </div>
            
            <div className="p-5">
              <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2 line-clamp-2`}>
                {item.title}
              </h3>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm mb-4 line-clamp-2`}>
                {item.excerpt}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src={item.authorAvatar} alt={item.author} className="w-6 h-6 rounded-full mr-2" />
                  <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} text-xs`}>{item.author}</div>
                </div>
                <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-xs`}>
                  {item.readTime}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center">
                    <Heart className={`w-3 h-3 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mr-1`} />
                    <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>{item.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className={`w-3 h-3 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mr-1`} />
                    <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>{item.comments}</span>
                  </div>
                </div>
                <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-xs`}>
                  {formatDate(item.date)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className={`${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} px-8 py-3 rounded-lg font-medium transition-colors`}>
          Load More Articles
        </button>
      </div>
    </div>
  );
};

export default NewsUpdates;