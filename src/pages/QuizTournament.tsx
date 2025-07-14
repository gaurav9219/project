import React, { useState } from 'react';
import { Trophy, Calendar, Users, Clock, Star, Play, Award, Crown, Target, Zap } from 'lucide-react';

interface QuizTournamentProps {
  isDarkMode: boolean;
}

const QuizTournament: React.FC<QuizTournamentProps> = ({ isDarkMode }) => {
  const [selectedTab, setSelectedTab] = useState('active');

  const tabs = [
    { id: 'active', label: 'Active Tournaments', icon: Trophy },
    { id: 'upcoming', label: 'Upcoming', icon: Calendar },
    { id: 'completed', label: 'Completed', icon: Award }
  ];

  const activeTournaments = [
    {
      id: 1,
      title: 'Global Science Championship 2025',
      description: 'The ultimate test of scientific knowledge across all disciplines',
      category: 'Science',
      format: 'Single Elimination',
      participants: 2048,
      maxParticipants: 4096,
      prizePool: '$50,000',
      entryFee: '$25',
      startDate: '2025-01-20',
      endDate: '2025-01-27',
      currentRound: 'Round of 512',
      timeLeft: '2d 14h 32m',
      difficulty: 'Expert',
      image: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=600',
      status: 'active',
      featured: true,
      rounds: [
        { name: 'Qualification', status: 'completed', participants: 4096 },
        { name: 'Round of 2048', status: 'completed', participants: 2048 },
        { name: 'Round of 1024', status: 'completed', participants: 1024 },
        { name: 'Round of 512', status: 'active', participants: 512 },
        { name: 'Round of 256', status: 'upcoming', participants: 256 },
        { name: 'Finals', status: 'upcoming', participants: 8 }
      ]
    },
    {
      id: 2,
      title: 'History Masters Tournament',
      description: 'Journey through time in this comprehensive history competition',
      category: 'History',
      format: 'Swiss System',
      participants: 1024,
      maxParticipants: 1024,
      prizePool: '$25,000',
      entryFee: '$15',
      startDate: '2025-01-18',
      endDate: '2025-01-25',
      currentRound: 'Round 5 of 7',
      timeLeft: '4d 8h 15m',
      difficulty: 'Hard',
      image: 'https://images.pexels.com/photos/161815/architecture-building-palace-castle-161815.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'active',
      featured: false,
      rounds: [
        { name: 'Round 1', status: 'completed', participants: 1024 },
        { name: 'Round 2', status: 'completed', participants: 1024 },
        { name: 'Round 3', status: 'completed', participants: 1024 },
        { name: 'Round 4', status: 'completed', participants: 1024 },
        { name: 'Round 5', status: 'active', participants: 1024 },
        { name: 'Round 6', status: 'upcoming', participants: 1024 },
        { name: 'Round 7', status: 'upcoming', participants: 1024 }
      ]
    }
  ];

  const upcomingTournaments = [
    {
      id: 3,
      title: 'Mathematics Olympiad',
      description: 'Elite mathematical competition for the brightest minds',
      category: 'Mathematics',
      format: 'Single Elimination',
      participants: 0,
      maxParticipants: 2048,
      prizePool: '$75,000',
      entryFee: '$50',
      startDate: '2025-02-01',
      endDate: '2025-02-08',
      registrationDeadline: '2025-01-28',
      difficulty: 'Expert',
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'registration',
      featured: true
    },
    {
      id: 4,
      title: 'Literature & Arts Festival',
      description: 'Celebrate the world of literature, poetry, and fine arts',
      category: 'Literature',
      format: 'Round Robin',
      participants: 0,
      maxParticipants: 512,
      prizePool: '$20,000',
      entryFee: '$20',
      startDate: '2025-02-10',
      endDate: '2025-02-17',
      registrationDeadline: '2025-02-05',
      difficulty: 'Medium',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'registration',
      featured: false
    }
  ];

  const completedTournaments = [
    {
      id: 5,
      title: 'Geography World Cup 2024',
      description: 'The ultimate geography competition that spanned the globe',
      category: 'Geography',
      format: 'Single Elimination',
      participants: 8192,
      prizePool: '$100,000',
      winner: 'Alex Johnson',
      winnerAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      completedDate: '2024-12-15',
      difficulty: 'Expert',
      image: 'https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'completed',
      featured: true
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-400 bg-green-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'hard': return 'text-red-400 bg-red-500/20';
      case 'expert': return 'text-purple-400 bg-purple-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/20';
      case 'registration': return 'text-blue-400 bg-blue-500/20';
      case 'completed': return 'text-gray-400 bg-gray-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const renderTournamentCard = (tournament: any) => (
    <div key={tournament.id} className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer`}>
      {/* Tournament Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={tournament.image} 
          alt={tournament.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {tournament.featured && (
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Crown className="w-3 h-3" />
              Featured
            </span>
          )}
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(tournament.status)}`}>
            {tournament.status === 'active' ? 'Live' : 
             tournament.status === 'registration' ? 'Open' : 'Completed'}
          </span>
        </div>

        {/* Prize Pool */}
        <div className="absolute top-4 right-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            {tournament.prizePool}
          </span>
        </div>

        {/* Tournament Title */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl font-bold mb-1">{tournament.title}</h3>
          <p className="text-white/80 text-sm">{tournament.description}</p>
        </div>
      </div>

      {/* Tournament Details */}
      <div className="p-6">
        {/* Category and Difficulty */}
        <div className="flex items-center justify-between mb-4">
          <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-medium`}>
            {tournament.category}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(tournament.difficulty)}`}>
            {tournament.difficulty}
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-bold`}>
              {tournament.participants.toLocaleString()}
              {tournament.maxParticipants && `/${tournament.maxParticipants.toLocaleString()}`}
            </div>
            <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>Participants</div>
          </div>
          <div>
            <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-bold`}>
              {tournament.format}
            </div>
            <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>Format</div>
          </div>
        </div>

        {/* Status Specific Info */}
        {tournament.status === 'active' && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium`}>
                {tournament.currentRound}
              </span>
              <span className="text-orange-400 font-bold">{tournament.timeLeft}</span>
            </div>
            <div className={`w-full ${isDarkMode ? 'bg-slate-700' : 'bg-gray-200'} rounded-full h-2`}>
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        )}

        {tournament.status === 'registration' && (
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>
                Registration closes: {formatDate(tournament.registrationDeadline)}
              </span>
              <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold`}>
                {tournament.entryFee}
              </span>
            </div>
          </div>
        )}

        {tournament.status === 'completed' && tournament.winner && (
          <div className="mb-4">
            <div className="flex items-center">
              <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
              <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium mr-2`}>Winner:</span>
              <img src={tournament.winnerAvatar} alt={tournament.winner} className="w-6 h-6 rounded-full mr-2" />
              <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold`}>{tournament.winner}</span>
            </div>
          </div>
        )}

        {/* Action Button */}
        <button className={`w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
          tournament.status === 'active' ? 'bg-green-600 hover:bg-green-700 text-white' :
          tournament.status === 'registration' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
          `${isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`
        }`}>
          {tournament.status === 'active' && (
            <>
              <Play className="w-4 h-4" />
              Watch Live
            </>
          )}
          {tournament.status === 'registration' && (
            <>
              <Target className="w-4 h-4" />
              Register Now
            </>
          )}
          {tournament.status === 'completed' && (
            <>
              <Award className="w-4 h-4" />
              View Results
            </>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
          <h1 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Quiz Tournaments
          </h1>
        </div>
        <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
          Compete in high-stakes tournaments and win amazing prizes
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center`}>
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Trophy className="w-6 h-6 text-blue-400" />
          </div>
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>12</div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Active Tournaments</div>
        </div>
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center`}>
          <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Users className="w-6 h-6 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-green-400 mb-1">45.2k</div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Total Players</div>
        </div>
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center`}>
          <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Award className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="text-2xl font-bold text-yellow-400 mb-1">$2.5M</div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Total Prizes</div>
        </div>
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center`}>
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Zap className="w-6 h-6 text-purple-400" />
          </div>
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>8</div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Live Now</div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
              selectedTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg'
                : `${isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`
            }`}
          >
            <tab.icon className="w-5 h-5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tournament Content */}
      {selectedTab === 'active' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeTournaments.map(renderTournamentCard)}
          </div>
        </div>
      )}

      {selectedTab === 'upcoming' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingTournaments.map(renderTournamentCard)}
          </div>
        </div>
      )}

      {selectedTab === 'completed' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedTournaments.map(renderTournamentCard)}
          </div>
        </div>
      )}

      {/* Create Tournament CTA */}
      <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-8 text-center`}>
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
          Host Your Own Tournament
        </h3>
        <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-6 max-w-2xl mx-auto`}>
          Create custom tournaments for your community, set prize pools, and manage competitions with our advanced tournament system.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Create Tournament
        </button>
      </div>
    </div>
  );
};

export default QuizTournament;