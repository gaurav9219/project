import React, { useState } from 'react';
import { Clock, Users, Star, Trophy, Flame, TrendingUp, Award } from 'lucide-react';

const FeaturedQuizzes = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = ['All', 'Hot', 'Trending', "Editor's"];
  
  const featuredQuizzes = [
    {
      id: 1,
      title: 'Science Quiz: Space Exploration',
      subtitle: 'Entertainment',
      category: 'Science',
      image: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=400',
      creator: {
        name: 'Alex Smith',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 4.9
      },
      reward: '$10.00',
      timeLeft: '2 days left',
      playersJoined: '2.5k players joined',
      spotsAvailable: '547 spots available',
      completionRate: '82%',
      badge: { type: 'hot', label: 'Hot 🔥' },
      gradient: 'from-blue-600 to-purple-700'
    },
    {
      id: 2,
      title: 'World Geography Challenge: Capitals & Landmarks',
      subtitle: 'Geography',
      category: 'Geography',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=400',
      creator: {
        name: 'Alex Smith',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 4.8
      },
      reward: '$7.50',
      timeLeft: '',
      playersJoined: '1.9k players joined',
      spotsAvailable: '128 spots available',
      completionRate: '94%',
      badge: { type: 'editors', label: "Editor's Choice 💎" },
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Brain Teasers & Logic Puzzles',
      subtitle: 'Puzzles',
      category: 'Logic',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
      creator: {
        name: 'Alex Smith',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 4.7
      },
      reward: '$8.00',
      timeLeft: '24h 0m left',
      playersJoined: '3.2k players joined',
      spotsAvailable: '769 spots available',
      completionRate: '85%',
      badge: { type: 'trending', label: 'Trending 📈' },
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: "History's Greatest Mysteries",
      subtitle: 'History',
      category: 'History',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      creator: {
        name: 'Alex Smith',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 4.9
      },
      reward: '$6.50',
      timeLeft: '',
      playersJoined: '1.6k players joined',
      spotsAvailable: 'Only 37 spots left!',
      completionRate: '98%',
      badge: { type: 'top', label: 'Top Rated ⭐' },
      gradient: 'from-amber-600 to-orange-700'
    },
  ];

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'hot': return 'bg-red-500';
      case 'editors': return 'bg-purple-500';
      case 'trending': return 'bg-blue-500';
      case 'top': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Featured Quizzes</h2>
          <p className="text-slate-400 hidden sm:block">Specially selected quizzes you don't want to miss</p>
        </div>
        
        {/* Filter tabs */}
        <div className="hidden sm:flex bg-slate-800 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {featuredQuizzes.map((quiz) => (
          <div key={quiz.id} className="bg-slate-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer">
            {/* Quiz image with overlay */}
            <div className="relative h-40 lg:h-48 overflow-hidden">
              <img 
                src={quiz.image} 
                alt={quiz.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${quiz.gradient} opacity-60`}></div>
              
              {/* Time left badge */}
              {quiz.timeLeft && (
                <div className="absolute top-4 left-4 flex items-center bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                  <Clock className="w-3 h-3 text-white mr-1" />
                  <span className="text-white text-xs font-medium">{quiz.timeLeft}</span>
                </div>
              )}
              
              {/* Special badge */}
              <div className="absolute top-4 right-4">
                <span className={`${getBadgeColor(quiz.badge.type)} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                  {quiz.badge.label}
                </span>
              </div>
              
              {/* Quiz title overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-base lg:text-lg font-bold mb-1 leading-tight">{quiz.title}</h3>
                <p className="text-white/80 text-xs lg:text-sm">{quiz.subtitle}</p>
              </div>
            </div>
            
            {/* Quiz details */}
            <div className="p-3 lg:p-4">
              {/* Creator info */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <img 
                    src={quiz.creator.avatar} 
                    alt={quiz.creator.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <p className="text-white text-xs lg:text-sm font-medium">{quiz.creator.name}</p>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-400 mr-1" />
                      <span className="text-yellow-400 text-xs font-bold">{quiz.creator.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-green-400 text-xs lg:text-sm font-bold">Reward</p>
                  <p className="text-green-400 text-sm lg:text-lg font-bold">{quiz.reward}</p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="space-y-2 mb-3 lg:mb-4">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center text-slate-400">
                    <Users className="w-3 h-3 mr-1" />
                    <span>{quiz.playersJoined}</span>
                  </div>
                  <div className="flex items-center bg-slate-700 rounded-full px-2 py-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                    <span className="text-white text-xs font-medium">{quiz.completionRate}</span>
                  </div>
                </div>
                <p className="text-slate-400 text-xs">{quiz.spotsAvailable}</p>
              </div>
              
              {/* Play button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 lg:py-3 rounded-lg text-sm lg:text-base font-medium transition-colors">
                Play Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedQuizzes;