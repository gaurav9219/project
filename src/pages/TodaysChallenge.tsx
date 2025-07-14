import React, { useState } from 'react';
import { Calendar, Clock, Trophy, Users, Star, Play, Target, Zap, Award } from 'lucide-react';

interface TodaysChallengeProps {
  isDarkMode: boolean;
}

const TodaysChallenge: React.FC<TodaysChallengeProps> = ({ isDarkMode }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  const todaysQuiz = {
    title: "Science Spectacular: Space & Physics",
    description: "Test your knowledge of space exploration, quantum physics, and the mysteries of the universe",
    category: "Science",
    difficulty: "Medium",
    questions: 25,
    timeLimit: "30 minutes",
    reward: "$50.00",
    participants: "2,847",
    image: "https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-blue-600 to-purple-700"
  };

  const leaderboard = [
    { rank: 1, name: "Alex Johnson", score: 2450, avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { rank: 2, name: "Sarah Williams", score: 2380, avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { rank: 3, name: "Michael Brown", score: 2320, avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { rank: 4, name: "Emma Davis", score: 2280, avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { rank: 5, name: "David Kim", score: 2240, avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100" }
  ];

  const achievements = [
    { icon: Target, title: "Perfect Score", description: "Score 100% on today's challenge", progress: 85, color: "text-yellow-400" },
    { icon: Zap, title: "Speed Demon", description: "Complete in under 15 minutes", progress: 60, color: "text-blue-400" },
    { icon: Award, title: "Streak Master", description: "Complete 7 daily challenges", progress: 4, total: 7, color: "text-purple-400" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Calendar className="w-8 h-8 text-blue-400 mr-3" />
          <h1 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Today's Challenge
          </h1>
        </div>
        <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
          Daily quiz challenge - compete with players worldwide!
        </p>
      </div>

      {/* Main Challenge Card */}
      <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl overflow-hidden shadow-xl`}>
        <div className="relative h-64 overflow-hidden">
          <img 
            src={todaysQuiz.image} 
            alt={todaysQuiz.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${todaysQuiz.gradient} opacity-70`}></div>
          
          {/* Timer */}
          <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center text-white mb-2">
              <Clock className="w-5 h-5 mr-2" />
              <span className="font-medium">Time Remaining</span>
            </div>
            <div className="flex gap-2 text-white">
              <div className="text-center">
                <div className="text-2xl font-bold">{timeLeft.hours}</div>
                <div className="text-xs">Hours</div>
              </div>
              <div className="text-2xl font-bold">:</div>
              <div className="text-center">
                <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                <div className="text-xs">Minutes</div>
              </div>
              <div className="text-2xl font-bold">:</div>
              <div className="text-center">
                <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                <div className="text-xs">Seconds</div>
              </div>
            </div>
          </div>

          {/* Reward Badge */}
          <div className="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
            Prize: {todaysQuiz.reward}
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-white text-3xl font-bold mb-2">{todaysQuiz.title}</h2>
            <p className="text-white/90 text-lg">{todaysQuiz.description}</p>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-2xl font-bold`}>{todaysQuiz.questions}</div>
              <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>Questions</div>
            </div>
            <div className="text-center">
              <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-2xl font-bold`}>{todaysQuiz.timeLimit}</div>
              <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>Time Limit</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-500 text-2xl font-bold">{todaysQuiz.difficulty}</div>
              <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>Difficulty</div>
            </div>
            <div className="text-center">
              <div className="text-blue-400 text-2xl font-bold">{todaysQuiz.participants}</div>
              <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>Participants</div>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3">
            <Play className="w-6 h-6" />
            Start Today's Challenge
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Today's Leaderboard */}
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-6`}>
          <div className="flex items-center mb-6">
            <Trophy className="w-6 h-6 text-yellow-400 mr-3" />
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Today's Leaderboard</h3>
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
                  <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Score: {player.score}</div>
                </div>
                {player.rank <= 3 && (
                  <Trophy className={`w-5 h-5 ${
                    player.rank === 1 ? 'text-yellow-500' :
                    player.rank === 2 ? 'text-gray-400' :
                    'text-amber-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Daily Achievements */}
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl p-6`}>
          <div className="flex items-center mb-6">
            <Award className="w-6 h-6 text-purple-400 mr-3" />
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Daily Achievements</h3>
          </div>
          
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center">
                  <achievement.icon className={`w-5 h-5 ${achievement.color} mr-3`} />
                  <div className="flex-1">
                    <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{achievement.title}</div>
                    <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{achievement.description}</div>
                  </div>
                </div>
                <div className="ml-8">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                      Progress: {achievement.progress}{achievement.total ? `/${achievement.total}` : '%'}
                    </span>
                  </div>
                  <div className={`w-full ${isDarkMode ? 'bg-slate-700' : 'bg-gray-200'} rounded-full h-2`}>
                    <div 
                      className={`h-2 rounded-full ${achievement.color.replace('text-', 'bg-')}`}
                      style={{ width: `${achievement.total ? (achievement.progress / achievement.total) * 100 : achievement.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysChallenge;