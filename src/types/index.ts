export interface Quiz {
  id: number;
  title: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  image: string;
  creator: {
    name: string;
    avatar: string;
    rating: number;
  };
  reward: string;
  timeLeft?: string;
  playersJoined: string;
  spotsAvailable: string;
  completionRate: string;
  badge?: {
    type: string;
    label: string;
  };
  gradient: string;
}

export interface Player {
  id: number;
  name: string;
  country: string;
  countryFlag: string;
  avatar: string;
  rank: number;
  wins: number;
  earned: string;
  followers: string;
  following: string;
  badge: string;
  badgeColor: string;
  gradient: string;
}

export interface Category {
  title: string;
  subtitle: string;
  count: number;
  color: string;
  icon: string;
  gradient: string;
  decorativeElements: string[];
}