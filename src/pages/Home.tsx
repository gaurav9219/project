import React from 'react';
import HeroSection from '../components/HeroSection';
import QuizCategories from '../components/QuizCategories';
import LatestQuizzes from '../components/LatestQuizzes';
import FeaturedQuizzes from '../components/FeaturedQuizzes';
import StatsSection from '../components/StatsSection';
import TopPlayers from '../components/TopPlayers';
import QuizzesByDifficulty from '../components/QuizzesByDifficulty';
import HowItWorks from '../components/HowItWorks';
import SuccessStories from '../components/SuccessStories';
import ReferralAndTips from '../components/ReferralAndTips';
import NewsletterSection from '../components/NewsletterSection';

interface HomeProps {
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ isDarkMode }) => {
  return (
    <>
      <HeroSection />
      <QuizCategories isDarkMode={isDarkMode} />
      <LatestQuizzes />
      <FeaturedQuizzes />
      <StatsSection />
      <TopPlayers isDarkMode={isDarkMode} />
      <QuizzesByDifficulty isDarkMode={isDarkMode} />
      <HowItWorks />
      <SuccessStories />
      <ReferralAndTips isDarkMode={isDarkMode} />
      <NewsletterSection />
    </>
  );
};

export default Home;