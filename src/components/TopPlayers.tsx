import React from 'react';
import { ChevronLeft, ChevronRight, Trophy, Star, Users, UserPlus } from 'lucide-react';

interface TopPlayersProps {
  isDarkMode: boolean;
}

const TopPlayers: React.FC<TopPlayersProps> = ({ isDarkMode }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  
  const topPlayers = [
    {
      id: 1,
      name: 'Alex Johnson',
      country: 'United States',
      countryFlag: '🇺🇸',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      rank: 1,
      wins: 42,
      earned: '$1,250.75',
      followers: '1.2k',
      following: '356',
      badge: 'Grandmaster',
      badgeColor: 'bg-yellow-500',
      gradient: 'from-pink-500 via-purple-600 to-blue-600'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      country: 'Canada',
      countryFlag: '🇨🇦',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      rank: 2,
      wins: 38,
      earned: '$980.5',
      followers: '987',
      following: '412',
      badge: 'Master',
      badgeColor: 'bg-blue-500',
      gradient: 'from-pink-500 via-purple-600 to-blue-600'
    },
    {
      id: 3,
      name: 'Michael Brown',
      country: 'United Kingdom',
      countryFlag: '🇬🇧',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
      rank: 3,
      wins: 35,
      earned: '$875.25',
      followers: '756',
      following: '289',
      badge: 'Expert',
      badgeColor: 'bg-green-500',
      gradient: 'from-pink-500 via-purple-600 to-blue-600'
    },
    {
      id: 4,
      name: 'Emma Davis',
      country: 'Australia',
      countryFlag: '🇦🇺',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100',
      rank: 4,
      wins: 32,
      earned: '$720.00',
      followers: '642',
      following: '198',
      badge: 'Expert',
      badgeColor: 'bg-green-500',
      gradient: 'from-pink-500 via-purple-600 to-blue-600'
    },
    {
      id: 5,
      name: 'David Kim',
      country: 'South Korea',
      countryFlag: '🇰🇷',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
      rank: 5,
      wins: 29,
      earned: '$650.00',
      followers: '523',
      following: '167',
      badge: 'Expert',
      badgeColor: 'bg-green-500',
      gradient: 'from-green-500 via-teal-600 to-blue-600'
    },
    {
      id: 6,
      name: 'Maria Garcia',
      country: 'Spain',
      countryFlag: '🇪🇸',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      rank: 6,
      wins: 27,
      earned: '$590.25',
      followers: '478',
      following: '234',
      badge: 'Advanced',
      badgeColor: 'bg-orange-500',
      gradient: 'from-orange-500 via-red-600 to-pink-600'
    },
    {
      id: 7,
      name: 'James Wilson',
      country: 'New Zealand',
      countryFlag: '🇳🇿',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      rank: 7,
      wins: 25,
      earned: '$525.50',
      followers: '412',
      following: '189',
      badge: 'Advanced',
      badgeColor: 'bg-orange-500',
      gradient: 'from-purple-500 via-indigo-600 to-blue-600'
    },
    {
      id: 8,
      name: 'Lisa Chen',
      country: 'Singapore',
      countryFlag: '🇸🇬',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      rank: 8,
      wins: 23,
      earned: '$475.75',
      followers: '356',
      following: '145',
      badge: 'Advanced',
      badgeColor: 'bg-orange-500',
      gradient: 'from-teal-500 via-green-600 to-blue-600'
    },
    {
      id: 9,
      name: 'Ahmed Hassan',
      country: 'Egypt',
      countryFlag: '🇪🇬',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
      rank: 9,
      wins: 21,
      earned: '$420.00',
      followers: '298',
      following: '123',
      badge: 'Skilled',
      badgeColor: 'bg-purple-500',
      gradient: 'from-amber-500 via-orange-600 to-red-600'
    },
    {
      id: 10,
      name: 'Sophie Martin',
      country: 'France',
      countryFlag: '🇫🇷',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100',
      rank: 10,
      wins: 19,
      earned: '$380.25',
      followers: '267',
      following: '98',
      badge: 'Skilled',
      badgeColor: 'bg-purple-500',
      gradient: 'from-rose-500 via-pink-600 to-purple-600'
    },
    {
      id: 11,
      name: 'Roberto Silva',
      country: 'Brazil',
      countryFlag: '🇧🇷',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      rank: 11,
      wins: 18,
      earned: '$350.50',
      followers: '234',
      following: '87',
      badge: 'Skilled',
      badgeColor: 'bg-purple-500',
      gradient: 'from-green-500 via-yellow-600 to-orange-600'
    },
    {
      id: 12,
      name: 'Yuki Tanaka',
      country: 'Japan',
      countryFlag: '🇯🇵',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100',
      rank: 12,
      wins: 16,
      earned: '$320.75',
      followers: '198',
      following: '76',
      badge: 'Rising',
      badgeColor: 'bg-cyan-500',
      gradient: 'from-cyan-500 via-blue-600 to-indigo-600'
    }
  ];

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(topPlayers.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-play functionality
  React.useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [totalSlides, isPaused]);

  const getCurrentItems = () => {
    const start = currentSlide * itemsPerSlide;
    return topPlayers.slice(start, start + itemsPerSlide);
  };
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
          <div>
            <h2 className={`text-2xl lg:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Top Players</h2>
            <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mt-1 hidden sm:block`}>Leading quiz champions</p>
          </div>
        </div>
        <div className="hidden sm:flex gap-2">
          <button 
            onClick={prevSlide}
            className={`p-2 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} rounded-lg transition-colors`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className={`p-2 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} rounded-lg transition-colors`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {getCurrentItems().map((player) => (
          <div key={player.id} className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer`}>
            {/* Header with gradient background */}
            <div className={`relative h-20 lg:h-24 bg-gradient-to-r ${player.gradient} overflow-hidden`}>
              {/* Decorative elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-2 right-2 w-12 h-12 lg:w-16 lg:h-16 bg-white/10 rounded-full -translate-y-4 translate-x-4"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 lg:w-12 lg:h-12 bg-white/10 rounded-full translate-y-2 -translate-x-2"></div>
              </div>
              
              {/* Rank badge */}
              <div className="absolute top-3 left-3 lg:top-4 lg:left-4 w-6 h-6 lg:w-8 lg:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs lg:text-sm">{player.rank}</span>
              </div>
              
              {/* Badge */}
              <div className="absolute top-3 right-3 lg:top-4 lg:right-4">
                <span className={`${player.badgeColor} text-white px-2 lg:px-3 py-1 rounded-full text-xs font-bold`}>
                  {player.badge}
                </span>
              </div>
            </div>
            
            {/* Player info */}
            <div className="p-4 lg:p-6 relative">
              {/* Avatar */}
              <div className={`absolute -top-6 lg:-top-8 left-1/2 transform -translate-x-1/2`}>
                <img 
                  src={player.avatar} 
                  alt={player.name}
                  className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full border-4 ${isDarkMode ? 'border-slate-800' : 'border-white'} object-cover`}
                />
              </div>
              
              <div className="pt-6 lg:pt-8 text-center">
                <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-base lg:text-lg font-bold mb-1`}>{player.name}</h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-base lg:text-lg mr-1">{player.countryFlag}</span>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'} text-xs lg:text-sm`}>{player.country}</span>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 lg:gap-4 mb-4">
                  <div className="text-center">
                    <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg lg:text-xl font-bold`}>{player.wins}</div>
                    <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'} text-xs`}>Wins</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 text-sm lg:text-xl font-bold">{player.earned}</div>
                    <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'} text-xs`}>Earned</div>
                  </div>
                  <div className="text-center">
                    <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg lg:text-xl font-bold`}>{player.rank}</div>
                    <div className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'} text-xs`}>Rank</div>
                  </div>
                </div>
                
                {/* Social stats */}
                <div className="flex justify-between mb-4 gap-2">
                  <div className={`flex items-center ${isDarkMode ? 'bg-slate-700' : 'bg-gray-100'} rounded-lg px-2 lg:px-3 py-2 flex-1`}>
                    <Users className={`w-3 h-3 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mr-1`} />
                    <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'} text-xs mr-1 hidden lg:inline`}>Followers</span>
                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-xs lg:text-sm font-bold`}>{player.followers}</span>
                  </div>
                  <div className={`flex items-center ${isDarkMode ? 'bg-slate-700' : 'bg-gray-100'} rounded-lg px-2 lg:px-3 py-2 flex-1`}>
                    <UserPlus className={`w-3 h-3 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mr-1`} />
                    <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'} text-xs mr-1 hidden lg:inline`}>Following</span>
                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-xs lg:text-sm font-bold`}>{player.following}</span>
                  </div>
                </div>
                
                {/* Follow button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm lg:text-base font-medium transition-colors flex items-center justify-center">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Follow
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination dots */}
      <div className="flex justify-center mb-6 gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide 
                ? 'bg-blue-500' 
                : isDarkMode ? 'bg-slate-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      
      <div className="text-center">
        <button className={`${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} px-8 py-3 rounded-lg font-medium transition-colors`}>
          View Full Leaderboard
        </button>
      </div>
    </section>
  );
};

export default TopPlayers;