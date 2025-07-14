import React from 'react';
import { Search, Bell, MessageCircle, Sun, Moon, User, Settings, LogOut, UserCircle, Check, X, Clock, Menu } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme, toggleSidebar }) => {
  const [showChatDropdown, setShowChatDropdown] = React.useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] = React.useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = React.useState(false);

  // Sample chat data
  const chatMessages = [
    {
      id: 1,
      name: 'Sarah Johnson',
      message: 'Great quiz on space exploration!',
      time: '2 min ago',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      unread: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      message: 'Thanks for the geography tips',
      time: '15 min ago',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      unread: true
    },
    {
      id: 3,
      name: 'Quiz Team',
      message: 'Your quiz has been approved!',
      time: '1 hour ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      unread: false
    }
  ];

  // Sample notification data
  const notifications = [
    {
      id: 1,
      type: 'achievement',
      title: 'New Achievement Unlocked!',
      message: 'You completed 10 science quizzes',
      time: '5 min ago',
      icon: '🏆',
      unread: true
    },
    {
      id: 2,
      type: 'quiz',
      title: 'Quiz Reminder',
      message: 'Daily challenge expires in 2 hours',
      time: '30 min ago',
      icon: '⏰',
      unread: true
    },
    {
      id: 3,
      type: 'reward',
      title: 'Reward Earned',
      message: 'You earned $5.50 from your last quiz',
      time: '2 hours ago',
      icon: '💰',
      unread: true
    },
    {
      id: 4,
      type: 'social',
      title: 'New Follower',
      message: 'Alex Smith started following you',
      time: '1 day ago',
      icon: '👤',
      unread: false
    }
  ];

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setShowChatDropdown(false);
        setShowNotificationDropdown(false);
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 lg:left-64 ${isDarkMode ? 'bg-slate-900/95 border-slate-700' : 'bg-white/95 border-gray-200'} backdrop-blur-sm border-b px-4 lg:px-6 py-3 lg:py-4 flex items-center justify-between transition-colors duration-200 z-30`}>
      <div className="flex items-center space-x-3 lg:space-x-6">
        {/* Mobile menu button */}
        <button 
          onClick={toggleSidebar}
          className={`lg:hidden p-2 ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-400 hover:text-gray-600'} transition-colors`}
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <h1 className={`text-lg lg:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} flex items-center`}>
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mr-3 flex items-center justify-center">
            <span className="text-white font-bold text-sm">Q</span>
          </div>
          <span className="hidden md:inline">QuizHub</span>
        </h1>
      </div>
      
      <div className="flex-1 max-w-2xl mx-4 lg:mx-8 hidden lg:block">
        <div className="relative">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-gray-400'} w-5 h-5`} />
          <input
            type="text"
            placeholder="Search quizzes, categories, creators..."
            className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400' : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200`}
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-2 lg:space-x-4">
        {/* Balance - Hidden on mobile, shown on tablet+ */}
        <div className="hidden md:flex items-center space-x-2">
          <span className="text-yellow-400 font-bold text-lg">$124.50</span>
          <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-slate-900">💰</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 lg:space-x-2 relative">
          {/* Chat Dropdown */}
          <div className="relative dropdown-container">
            <button 
              onClick={() => {
                setShowChatDropdown(!showChatDropdown);
                setShowNotificationDropdown(false);
                setShowProfileDropdown(false);
              }}
              className={`relative p-2 ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-400 hover:text-gray-600'} transition-colors`}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">2</span>
            </button>
            
            {showChatDropdown && (
              <div className={`absolute right-0 top-12 w-80 sm:w-96 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border rounded-lg shadow-xl z-50 animate-in slide-in-from-top-2 duration-200`}>
                <div className="p-4 border-b border-slate-700">
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Messages</h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {chatMessages.map((chat) => (
                    <div key={chat.id} className={`p-4 border-b ${isDarkMode ? 'border-slate-700 hover:bg-slate-750' : 'border-gray-100 hover:bg-gray-50'} cursor-pointer transition-colors`}>
                      <div className="flex items-start gap-3">
                        <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} truncate`}>{chat.name}</p>
                            <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>{chat.time}</span>
                          </div>
                          <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} truncate`}>{chat.message}</p>
                        </div>
                        {chat.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors">
                    View All Messages
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Notification Dropdown */}
          <div className="relative dropdown-container">
            <button 
              onClick={() => {
                setShowNotificationDropdown(!showNotificationDropdown);
                setShowChatDropdown(false);
                setShowProfileDropdown(false);
              }}
              className={`relative p-2 ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-400 hover:text-gray-600'} transition-colors`}
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">3</span>
            </button>
            
            {showNotificationDropdown && (
              <div className={`absolute right-0 top-12 w-80 sm:w-96 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border rounded-lg shadow-xl z-50 animate-in slide-in-from-top-2 duration-200`}>
                <div className="p-4 border-b border-slate-700 flex items-center justify-between">
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Notifications</h3>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">Mark all read</button>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className={`p-4 border-b ${isDarkMode ? 'border-slate-700 hover:bg-slate-750' : 'border-gray-100 hover:bg-gray-50'} cursor-pointer transition-colors ${notification.unread ? 'bg-blue-500/5' : ''}`}>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-lg">
                          {notification.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} truncate`}>{notification.title}</p>
                            <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>{notification.time}</span>
                          </div>
                          <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{notification.message}</p>
                        </div>
                        {notification.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors">
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <button 
            onClick={toggleTheme}
            className={`p-2 ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-400 hover:text-gray-600'} transition-colors`}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          {/* Profile Dropdown */}
          <div className="relative dropdown-container">
            <button 
              onClick={() => {
                setShowProfileDropdown(!showProfileDropdown);
                setShowChatDropdown(false);
                setShowNotificationDropdown(false);
              }}
              className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            >
              <User className="w-4 h-4 text-white" />
            </button>
            
            {showProfileDropdown && (
              <div className={`absolute right-0 top-12 w-72 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border rounded-lg shadow-xl z-50 animate-in slide-in-from-top-2 duration-200`}>
                {/* Profile Header */}
                <div className="p-6 border-b border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>John Doe</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Quiz Master</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                          <span className="text-xs text-green-400">Online</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="p-4 border-b border-slate-700">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>42</div>
                      <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Quizzes</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-400">$124.50</div>
                      <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Earned</div>
                    </div>
                    <div>
                      <div className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>1.2k</div>
                      <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Followers</div>
                    </div>
                  </div>
                </div>
                
                {/* Menu Items */}
                <div className="py-2">
                  <button className={`w-full flex items-center gap-3 px-4 py-3 ${isDarkMode ? 'text-slate-300 hover:bg-slate-750 hover:text-white' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'} transition-colors`}>
                    <UserCircle className="w-5 h-5" />
                    <span>View Profile</span>
                  </button>
                  <button className={`w-full flex items-center gap-3 px-4 py-3 ${isDarkMode ? 'text-slate-300 hover:bg-slate-750 hover:text-white' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'} transition-colors`}>
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
                  </button>
                  <button className={`w-full flex items-center gap-3 px-4 py-3 ${isDarkMode ? 'text-slate-300 hover:bg-slate-750 hover:text-white' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'} transition-colors`}>
                    <Clock className="w-5 h-5" />
                    <span>Activity</span>
                  </button>
                  <div className="border-t border-slate-700 my-2"></div>
                  <button className={`w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 transition-colors`}>
                    <LogOut className="w-5 h-5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;