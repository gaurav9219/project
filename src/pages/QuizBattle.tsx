import React, { useState } from 'react';
import { Swords, Users, Clock, Trophy, Zap, Target, Crown, Play } from 'lucide-react';

interface QuizBattleProps {
  isDarkMode: boolean;
}

const QuizBattle: React.FC<QuizBattleProps> = ({ isDarkMode }) => {
  const [selectedMode, setSelectedMode] = useState('1v1');

  const battleModes = [
    {
      id: '1v1',
      title: '1v1 Duel',
      description: 'Challenge another player to a head-to-head quiz battle',
      icon: Swords,
      players: 2,
      duration: '10 min',
      reward: '$5-25',
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      gradient: 'from-red-500 to-orange-600'
    },
    {
      id: 'team',
      title: 'Team Battle',
      description: 'Form teams and compete against other groups',
      icon: Users,
      players: '4-8',
      duration: '15 min',
      reward: '$10-50',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'tournament',
      title: 'Tournament',
      description: 'Compete in elimination-style tournaments',
      icon: Crown,
      players: '16-64',
      duration: '45 min',
      reward: '$25-200',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      gradient: 'from-yellow-500 to-orange-600'
    }
  ];

  const activeBattles = [
    {
      id: 1,
      mode: '1v1 Duel',
      category: 'Science',
      players: ['Alex Johnson', 'Sarah Williams'],
      avatars: [
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
      ],
      timeLeft: '5:32',
      reward: '$15.00',
      status: 'live'
    },
    {
      id: 2,
      mode: 'Team Battle',
      category: 'History',
      players: ['Team Alpha', 'Team Beta'],
      avatars: [
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
        'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100'
      ],
      timeLeft: '12:45',
      reward: '$35.00',
      status: 'live'
    },
    {
      id: 3,
      mode: 'Tournament',
      category: 'Mixed',
      players: ['32 Players'],
      avatars: [
        'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100'
      ],
      timeLeft: 'Starting soon',
      reward: '$150.00',
      status: 'waiting'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Johnson', wins: 127, winRate: 89, avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { rank: 2, name: 'Sarah Williams', wins: 115, winRate: 85, avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { rank: 3, name: 'Michael Brown', wins: 98, winRate: 82, avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { rank: 4, name: 'Emma Davis', wins: 87, winRate: 78, avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { rank: 5, name: 'David Kim', wins: 76, winRate: 75, avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Swords className="w-8 h-8 text-red-400 mr-3" />
          <h1 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Quiz Battle Arena
          </h1>
        </div>
        <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
          Challenge players worldwide in real-time quiz battles
        </p>
      </div>

      {/* Battle Modes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {battleModes.map((mode) => (
          <div
            key={mode.id}
            onClick={() => setSelectedMode(mode.id)}
            className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
              selectedMode === mode.id ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div className={`w-16 h-16 ${mode.bgColor} rounded-xl flex items-center justify-center mb-4`}>
              <mode.icon className={`w-8 h-8 ${mode.color}`} />
            </div>
            
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              {mode.title}
            </h3>
            <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-4`}>
              {mode.description}
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Players:</span>
                <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium`}>{mode.players}</span>
              </div>
              <div className="flex justify-between">
                <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Duration:</span>
                <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium`}>{mode.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Reward:</span>
                <span className="text-green-400 font-bold">{mode.reward}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Battle */}
      <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-8`}>
        <div className="text-center mb-6">
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
            Quick Battle
          </h2>
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            Jump into a battle instantly with our matchmaking system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-lg`}>Smart Matching</div>
            <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>Matched by skill level</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-green-400" />
            </div>
            <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-lg`}>Instant Start</div>
            <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>No waiting time</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-6 h-6 text-purple-400" />
            </div>
            <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-lg`}>Fair Rewards</div>
            <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>Based on performance</div>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3">
          <Play className="w-6 h-6" />
          Start Quick Battle
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Active Battles */}
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-6`}>
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Live Battles</h3>
          </div>
          
          <div className="space-y-4">
            {activeBattles.map((battle) => (
              <div key={battle.id} className={`p-4 ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'} rounded-lg`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-3">
                      {battle.avatars.map((avatar, index) => (
                        <img key={index} src={avatar} alt="" className="w-8 h-8 rounded-full border-2 border-white" />
                      ))}
                    </div>
                    <div>
                      <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{battle.mode}</div>
                      <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{battle.category}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold">{battle.reward}</div>
                    <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{battle.timeLeft}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm">
                    {battle.status === 'live' ? (
                      <>
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-red-400">Live</span>
                      </>
                    ) : (
                      <>
                        <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-yellow-400">Waiting</span>
                      </>
                    )}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    {battle.status === 'live' ? 'Watch' : 'Join'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Battle Leaderboard */}
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-6`}>
          <div className="flex items-center mb-6">
            <Trophy className="w-6 h-6 text-yellow-400 mr-3" />
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Battle Champions</h3>
          </div>
          
          <div className="space-y-4">
            {leaderboard.map((player) => (
              <div key={player.rank} className={`flex items-center p-4 ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'} rounded-lg`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4 ${
                  player.rank === 1 ? 'bg-yellow-500 text-white' :
                  player.rank === 2 ? 'bg-gray-400 text-white' :
                  player.rank === 3 ? 'bg-amber-600 text-white' :
                  `${isDarkMode ? 'bg-slate-600 text-white' : 'bg-gray-200 text-gray-700'}`
                }`}>
                  {player.rank}
                </div>
                <img src={player.avatar} alt={player.name} className="w-10 h-10 rounded-full mr-4" />
                <div className="flex-1">
                  <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{player.name}</div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                    {player.wins} wins • {player.winRate}% win rate
                  </div>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors">
                  Challenge
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizBattle;