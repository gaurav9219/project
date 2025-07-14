import React, { useState } from 'react';
import { Trophy, Medal, Crown, TrendingUp, Users, Star, Award, Target, Zap, Calendar } from 'lucide-react';

interface LeaderboardProps {
  isDarkMode: boolean;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ isDarkMode }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('all-time');
  const [selectedCategory, setSelectedCategory] = useState('overall');

  const periods = [
    { id: 'today', label: 'Today' },
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'all-time', label: 'All Time' }
  ];

  const categories = [
    { id: 'overall', label: 'Overall', icon: Trophy },
    { id: 'earnings', label: 'Top Earners', icon: Target },
    { id: 'creators', label: 'Quiz Creators', icon: Award },
    { id: 'streaks', label: 'Longest Streaks', icon: Zap }
  ];

  const leaderboardData = {
    overall: [
      {
        rank: 1,
        name: 'Alex Johnson',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
        country: 'United States',
        countryFlag: '🇺🇸',
        points: 125420,
        quizzesCompleted: 1247,
        winRate: 94,
        earnings: '$12,540.75',
        badge: 'Grandmaster',
        badgeColor: 'bg-yellow-500',
        level: 89,
        streak: 45,
        change: '+2'
      },
      {
        rank: 2,
        name: 'Sarah Williams',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
        country: 'Canada',
        countryFlag: '🇨🇦',
        points: 118750,
        quizzesCompleted: 1156,
        winRate: 91,
        earnings: '$11,230.50',
        badge: 'Master',
        badgeColor: 'bg-blue-500',
        level: 85,
        streak: 32,
        change: '-1'
      },
      {
        rank: 3,
        name: 'Michael Brown',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
        country: 'United Kingdom',
        countryFlag: '🇬🇧',
        points: 112340,
        quizzesCompleted: 1089,
        winRate: 88,
        earnings: '$9,875.25',
        badge: 'Expert',
        badgeColor: 'bg-purple-500',
        level: 82,
        streak: 28,
        change: '+1'
      },
      {
        rank: 4,
        name: 'Emma Davis',
        avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100',
        country: 'Australia',
        countryFlag: '🇦🇺',
        points: 108920,
        quizzesCompleted: 1034,
        winRate: 86,
        earnings: '$8,920.00',
        badge: 'Expert',
        badgeColor: 'bg-purple-500',
        level: 79,
        streak: 21,
        change: '0'
      },
      {
        rank: 5,
        name: 'David Kim',
        avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
        country: 'South Korea',
        countryFlag: '🇰🇷',
        points: 105680,
        quizzesCompleted: 987,
        winRate: 84,
        earnings: '$8,456.75',
        badge: 'Expert',
        badgeColor: 'bg-purple-500',
        level: 77,
        streak: 19,
        change: '+3'
      },
      {
        rank: 6,
        name: 'Maria Garcia',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
        country: 'Spain',
        countryFlag: '🇪🇸',
        points: 102450,
        quizzesCompleted: 945,
        winRate: 82,
        earnings: '$7,890.50',
        badge: 'Advanced',
        badgeColor: 'bg-green-500',
        level: 75,
        streak: 16,
        change: '-2'
      },
      {
        rank: 7,
        name: 'James Wilson',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
        country: 'New Zealand',
        countryFlag: '🇳🇿',
        points: 99870,
        quizzesCompleted: 912,
        winRate: 80,
        earnings: '$7,234.25',
        badge: 'Advanced',
        badgeColor: 'bg-green-500',
        level: 73,
        streak: 14,
        change: '+1'
      },
      {
        rank: 8,
        name: 'Lisa Chen',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
        country: 'Singapore',
        countryFlag: '🇸🇬',
        points: 97320,
        quizzesCompleted: 889,
        winRate: 78,
        earnings: '$6,890.75',
        badge: 'Advanced',
        badgeColor: 'bg-green-500',
        level: 71,
        streak: 12,
        change: '-1'
      },
      {
        rank: 9,
        name: 'Ahmed Hassan',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
        country: 'Egypt',
        countryFlag: '🇪🇬',
        points: 94560,
        quizzesCompleted: 856,
        winRate: 76,
        earnings: '$6,234.50',
        badge: 'Skilled',
        badgeColor: 'bg-orange-500',
        level: 69,
        streak: 10,
        change: '+2'
      },
      {
        rank: 10,
        name: 'Sophie Martin',
        avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100',
        country: 'France',
        countryFlag: '🇫🇷',
        points: 91780,
        quizzesCompleted: 823,
        winRate: 74,
        earnings: '$5,890.25',
        badge: 'Skilled',
        badgeColor: 'bg-orange-500',
        level: 67,
        streak: 8,
        change: '-1'
      }
    ]
  };

  const topCountries = [
    { country: 'United States', flag: '🇺🇸', players: 12450, avgScore: 87.5 },
    { country: 'Canada', flag: '🇨🇦', players: 8920, avgScore: 85.2 },
    { country: 'United Kingdom', flag: '🇬🇧', players: 7650, avgScore: 84.8 },
    { country: 'Australia', flag: '🇦🇺', players: 6340, avgScore: 83.9 },
    { country: 'Germany', flag: '🇩🇪', players: 5890, avgScore: 83.1 }
  ];

  const achievements = [
    { icon: Trophy, title: 'Quiz Master', holders: 1247, color: 'text-yellow-400' },
    { icon: Target, title: 'Perfect Score', holders: 892, color: 'text-blue-400' },
    { icon: Zap, title: 'Speed Demon', holders: 634, color: 'text-purple-400' },
    { icon: Award, title: 'Creator Pro', holders: 456, color: 'text-green-400' }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${isDarkMode ? 'bg-slate-700 text-white' : 'bg-gray-200 text-gray-700'}`}>{rank}</span>;
    }
  };

  const getChangeColor = (change: string) => {
    if (change.startsWith('+')) return 'text-green-400';
    if (change.startsWith('-')) return 'text-red-400';
    return isDarkMode ? 'text-slate-400' : 'text-gray-500';
  };

  const getChangeIcon = (change: string) => {
    if (change.startsWith('+')) return '↗';
    if (change.startsWith('-')) return '↘';
    return '→';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
          <h1 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Leaderboard
          </h1>
        </div>
        <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
          See how you rank against the best quiz players worldwide
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center`}>
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Users className="w-6 h-6 text-blue-400" />
          </div>
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>125k+</div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Active Players</div>
        </div>
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center`}>
          <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Target className="w-6 h-6 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-green-400 mb-1">$2.5M</div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Total Earned</div>
        </div>
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center`}>
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Award className="w-6 h-6 text-purple-400" />
          </div>
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>50k+</div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Quizzes Completed</div>
        </div>
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center`}>
          <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Star className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="text-2xl font-bold text-yellow-400 mb-1">4.8</div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Avg Rating</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Period Filter */}
        <div className="flex flex-wrap gap-2">
          {periods.map((period) => (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedPeriod === period.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : `${isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : `${isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Leaderboard */}
        <div className="lg:col-span-2">
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl overflow-hidden`}>
            {/* Top 3 Podium */}
            <div className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-orange-600 p-8">
              <div className="flex items-end justify-center gap-8">
                {/* 2nd Place */}
                <div className="text-center">
                  <div className="relative mb-4">
                    <img 
                      src={leaderboardData.overall[1].avatar} 
                      alt={leaderboardData.overall[1].name}
                      className="w-16 h-16 rounded-full border-4 border-white mx-auto"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                  </div>
                  <div className="text-white font-bold">{leaderboardData.overall[1].name}</div>
                  <div className="text-white/80 text-sm">{leaderboardData.overall[1].points.toLocaleString()} pts</div>
                  <div className="w-16 h-20 bg-gray-400 rounded-t-lg mt-4 mx-auto"></div>
                </div>

                {/* 1st Place */}
                <div className="text-center">
                  <div className="relative mb-4">
                    <img 
                      src={leaderboardData.overall[0].avatar} 
                      alt={leaderboardData.overall[0].name}
                      className="w-20 h-20 rounded-full border-4 border-white mx-auto"
                    />
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Crown className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="text-white font-bold text-lg">{leaderboardData.overall[0].name}</div>
                  <div className="text-white/80">{leaderboardData.overall[0].points.toLocaleString()} pts</div>
                  <div className="w-20 h-24 bg-yellow-500 rounded-t-lg mt-4 mx-auto"></div>
                </div>

                {/* 3rd Place */}
                <div className="text-center">
                  <div className="relative mb-4">
                    <img 
                      src={leaderboardData.overall[2].avatar} 
                      alt={leaderboardData.overall[2].name}
                      className="w-16 h-16 rounded-full border-4 border-white mx-auto"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                  </div>
                  <div className="text-white font-bold">{leaderboardData.overall[2].name}</div>
                  <div className="text-white/80 text-sm">{leaderboardData.overall[2].points.toLocaleString()} pts</div>
                  <div className="w-16 h-16 bg-amber-600 rounded-t-lg mt-4 mx-auto"></div>
                </div>
              </div>
            </div>

            {/* Leaderboard List */}
            <div className="p-6">
              <div className="space-y-4">
                {leaderboardData.overall.slice(3).map((player) => (
                  <div key={player.rank} className={`flex items-center p-4 ${isDarkMode ? 'bg-slate-700 hover:bg-slate-650' : 'bg-gray-50 hover:bg-gray-100'} rounded-lg transition-colors`}>
                    {/* Rank */}
                    <div className="w-12 flex justify-center mr-4">
                      {getRankIcon(player.rank)}
                    </div>

                    {/* Player Info */}
                    <div className="flex items-center flex-1">
                      <img src={player.avatar} alt={player.name} className="w-12 h-12 rounded-full mr-4" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{player.name}</h3>
                          <span className="text-lg">{player.countryFlag}</span>
                          <span className={`${player.badgeColor} text-white px-2 py-1 rounded text-xs font-bold`}>
                            {player.badge}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                            Level {player.level}
                          </span>
                          <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                            {player.winRate}% win rate
                          </span>
                          <span className="text-orange-400">
                            {player.streak} day streak
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="text-right mr-4">
                      <div className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {player.points.toLocaleString()}
                      </div>
                      <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                        {player.quizzesCompleted} quizzes
                      </div>
                    </div>

                    {/* Change */}
                    <div className={`text-sm font-bold ${getChangeColor(player.change)} flex items-center gap-1`}>
                      <span>{getChangeIcon(player.change)}</span>
                      <span>{player.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Top Countries */}
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-6`}>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6 flex items-center gap-2`}>
              <TrendingUp className="w-5 h-5 text-blue-400" />
              Top Countries
            </h3>
            <div className="space-y-4">
              {topCountries.map((country, index) => (
                <div key={country.country} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{country.flag}</span>
                    <div>
                      <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {country.country}
                      </div>
                      <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                        {country.players.toLocaleString()} players
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-blue-400 font-bold">{country.avgScore}</div>
                    <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>avg score</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Achievements */}
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-6`}>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6 flex items-center gap-2`}>
              <Award className="w-5 h-5 text-purple-400" />
              Popular Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={achievement.title} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${achievement.color.replace('text-', 'bg-').replace('400', '500/20')}`}>
                      <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
                    </div>
                    <div>
                      <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {achievement.title}
                      </div>
                      <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                        {achievement.holders} holders
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Your Rank */}
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-6`}>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              Your Rank
            </h3>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">#42</span>
              </div>
              <div className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                You're doing great!
              </div>
              <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-4`}>
                You're in the top 5% of all players
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors">
                View Your Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;