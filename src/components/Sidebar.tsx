import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Calendar, 
  Grid3x3, 
  Swords, 
  Newspaper, 
  Compass, 
  Trophy, 
  Award,
  Lightbulb,
  MessageSquare,
  Plus,
  Bot,
  Link,
  CreditCard,
  HelpCircle,
  LogOut,
  User,
  Shield
} from 'lucide-react';

interface SidebarProps {
  isDarkMode: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isDarkMode, isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Calendar, label: "Today's Challenge", path: '/todays-challenge' },
    { icon: Grid3x3, label: 'Categories', path: '/categories' },
    { icon: Swords, label: 'Quiz Battle', path: '/quiz-battle' },
    { icon: Newspaper, label: 'News & Updates', path: '/news-updates' },
    { icon: User, label: 'User Profile', path: '/user-profile' },
    { icon: Compass, label: 'Explore Quizzes', path: '/explore-quizzes' },
    { icon: Trophy, label: 'Quiz Tournament', path: '/quiz-tournament' },
    { icon: Award, label: 'Leaderboard', path: '/leaderboard' },
    { icon: Lightbulb, label: 'Quiz Creator Tips', path: '/quiz-creator-tips' },
    { icon: MessageSquare, label: 'Quiz Discussions', path: '/quiz-discussions' },
    { icon: Plus, label: 'Create Quiz', path: '/create-quiz' },
    { icon: Bot, label: 'AI Quiz Generator', path: '/ai-quiz-generator' },
    { icon: Link, label: 'Affiliate Page', path: '/affiliate-page' },
    { icon: CreditCard, label: 'Pricing Plan', path: '/pricing-plan' },
    { icon: HelpCircle, label: 'Support', path: '/support' },
    { icon: Shield, label: 'Admin Dashboard', path: '/admin' },
    { icon: LogOut, label: 'Logout', path: '/logout' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose(); // Close sidebar on mobile after navigation
  };

  // Close sidebar when clicking outside on mobile
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.sidebar-container') && !target.closest('button[data-sidebar-toggle]')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={`sidebar-container fixed left-0 top-0 w-64 h-screen ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'} border-r transition-all duration-200 z-40 overflow-y-auto ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-blue-600 text-white shadow-lg'
                    : `${isDarkMode ? 'text-slate-300 hover:bg-slate-800 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
    </>
  );
};

export default Sidebar;