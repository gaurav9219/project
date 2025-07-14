import React, { useState } from 'react';
import { Plus, Save, Eye, Settings, Image, Type, Clock, Users, Star, ChevronDown, X, Upload, Palette } from 'lucide-react';

interface CreateQuizProps {
  isDarkMode: boolean;
}

interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  question: string;
  options: string[];
  correctAnswer: string | number;
  explanation?: string;
  timeLimit?: number;
  points?: number;
}

const CreateQuiz: React.FC<CreateQuizProps> = ({ isDarkMode }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [quizData, setQuizData] = useState({
    title: '',
    description: '',
    category: '',
    difficulty: 'medium',
    timeLimit: 30,
    isPublic: true,
    allowRetakes: true,
    showCorrectAnswers: true,
    coverImage: '',
    tags: [] as string[]
  });

  const [questions, setQuestions] = useState<Question[]>([
    {
      id: '1',
      type: 'multiple-choice',
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      explanation: '',
      timeLimit: 30,
      points: 10
    }
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [newTag, setNewTag] = useState('');

  const categories = [
    'Science', 'History', 'Geography', 'Mathematics', 'Literature',
    'Sports', 'Music', 'Movies', 'Technology', 'Art', 'Politics', 'General Knowledge'
  ];

  const difficulties = [
    { value: 'easy', label: 'Easy', color: 'text-green-400' },
    { value: 'medium', label: 'Medium', color: 'text-yellow-400' },
    { value: 'hard', label: 'Hard', color: 'text-red-400' },
    { value: 'expert', label: 'Expert', color: 'text-purple-400' }
  ];

  const questionTypes = [
    { value: 'multiple-choice', label: 'Multiple Choice', icon: '📝' },
    { value: 'true-false', label: 'True/False', icon: '✅' },
    { value: 'short-answer', label: 'Short Answer', icon: '💭' }
  ];

  const addQuestion = () => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      type: 'multiple-choice',
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      explanation: '',
      timeLimit: 30,
      points: 10
    };
    setQuestions([...questions, newQuestion]);
    setCurrentQuestion(questions.length);
  };

  const updateQuestion = (index: number, field: keyof Question, value: any) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = { ...updatedQuestions[index], [field]: value };
    setQuestions(updatedQuestions);
  };

  const updateQuestionOption = (questionIndex: number, optionIndex: number, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const removeQuestion = (index: number) => {
    if (questions.length > 1) {
      const updatedQuestions = questions.filter((_, i) => i !== index);
      setQuestions(updatedQuestions);
      if (currentQuestion >= updatedQuestions.length) {
        setCurrentQuestion(updatedQuestions.length - 1);
      }
    }
  };

  const addTag = () => {
    if (newTag.trim() && !quizData.tags.includes(newTag.trim())) {
      setQuizData({
        ...quizData,
        tags: [...quizData.tags, newTag.trim()]
      });
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setQuizData({
      ...quizData,
      tags: quizData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  const steps = [
    { id: 1, title: 'Basic Info', icon: Settings },
    { id: 2, title: 'Questions', icon: Type },
    { id: 3, title: 'Settings', icon: Settings },
    { id: 4, title: 'Preview', icon: Eye }
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              Basic Information
            </h2>

            {/* Cover Image */}
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                Cover Image
              </label>
              <div className={`border-2 border-dashed ${isDarkMode ? 'border-slate-600 bg-slate-800' : 'border-gray-300 bg-gray-50'} rounded-lg p-8 text-center`}>
                <Upload className={`w-12 h-12 ${isDarkMode ? 'text-slate-400' : 'text-gray-400'} mx-auto mb-4`} />
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-2`}>
                  Click to upload or drag and drop
                </p>
                <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>
                  PNG, JPG up to 10MB
                </p>
              </div>
            </div>

            {/* Title */}
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                Quiz Title *
              </label>
              <input
                type="text"
                value={quizData.title}
                onChange={(e) => setQuizData({ ...quizData, title: e.target.value })}
                className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter an engaging title for your quiz"
              />
            </div>

            {/* Description */}
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                Description
              </label>
              <textarea
                value={quizData.description}
                onChange={(e) => setQuizData({ ...quizData, description: e.target.value })}
                rows={4}
                className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
                placeholder="Describe what your quiz is about..."
              />
            </div>

            {/* Category and Difficulty */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                  Category *
                </label>
                <select
                  value={quizData.category}
                  onChange={(e) => setQuizData({ ...quizData, category: e.target.value })}
                  className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                  Difficulty
                </label>
                <select
                  value={quizData.difficulty}
                  onChange={(e) => setQuizData({ ...quizData, difficulty: e.target.value })}
                  className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty.value} value={difficulty.value}>{difficulty.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                Tags
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {quizData.tags.map((tag, index) => (
                  <span key={index} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    {tag}
                    <button onClick={() => removeTag(tag)} className="hover:bg-blue-700 rounded-full p-1">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTag()}
                  className={`flex-1 ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Add a tag..."
                />
                <button
                  onClick={addTag}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Questions ({questions.length})
              </h2>
              <button
                onClick={addQuestion}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Question
              </button>
            </div>

            {/* Question Navigation */}
            <div className="flex flex-wrap gap-2 mb-6">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                    currentQuestion === index
                      ? 'bg-blue-600 text-white'
                      : `${isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Current Question Editor */}
            {questions[currentQuestion] && (
              <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Question {currentQuestion + 1}
                  </h3>
                  {questions.length > 1 && (
                    <button
                      onClick={() => removeQuestion(currentQuestion)}
                      className="text-red-400 hover:text-red-300 p-2"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Question Type */}
                <div className="mb-6">
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                    Question Type
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {questionTypes.map(type => (
                      <button
                        key={type.value}
                        onClick={() => updateQuestion(currentQuestion, 'type', type.value)}
                        className={`p-3 rounded-lg border-2 transition-colors ${
                          questions[currentQuestion].type === type.value
                            ? 'border-blue-500 bg-blue-500/10'
                            : `${isDarkMode ? 'border-slate-600 hover:border-slate-500' : 'border-gray-300 hover:border-gray-400'}`
                        }`}
                      >
                        <div className="text-2xl mb-2">{type.icon}</div>
                        <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {type.label}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question Text */}
                <div className="mb-6">
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                    Question *
                  </label>
                  <textarea
                    value={questions[currentQuestion].question}
                    onChange={(e) => updateQuestion(currentQuestion, 'question', e.target.value)}
                    rows={3}
                    className={`w-full ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
                    placeholder="Enter your question here..."
                  />
                </div>

                {/* Answer Options */}
                {questions[currentQuestion].type === 'multiple-choice' && (
                  <div className="mb-6">
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                      Answer Options
                    </label>
                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center gap-3">
                          <input
                            type="radio"
                            name={`correct-${currentQuestion}`}
                            checked={questions[currentQuestion].correctAnswer === optionIndex}
                            onChange={() => updateQuestion(currentQuestion, 'correctAnswer', optionIndex)}
                            className="w-4 h-4 text-blue-600"
                          />
                          <input
                            type="text"
                            value={option}
                            onChange={(e) => updateQuestionOption(currentQuestion, optionIndex, e.target.value)}
                            className={`flex-1 ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            placeholder={`Option ${optionIndex + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {questions[currentQuestion].type === 'true-false' && (
                  <div className="mb-6">
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                      Correct Answer
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={`tf-${currentQuestion}`}
                          checked={questions[currentQuestion].correctAnswer === 'true'}
                          onChange={() => updateQuestion(currentQuestion, 'correctAnswer', 'true')}
                          className="w-4 h-4 text-blue-600 mr-2"
                        />
                        True
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={`tf-${currentQuestion}`}
                          checked={questions[currentQuestion].correctAnswer === 'false'}
                          onChange={() => updateQuestion(currentQuestion, 'correctAnswer', 'false')}
                          className="w-4 h-4 text-blue-600 mr-2"
                        />
                        False
                      </label>
                    </div>
                  </div>
                )}

                {/* Explanation */}
                <div className="mb-6">
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                    Explanation (Optional)
                  </label>
                  <textarea
                    value={questions[currentQuestion].explanation || ''}
                    onChange={(e) => updateQuestion(currentQuestion, 'explanation', e.target.value)}
                    rows={2}
                    className={`w-full ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
                    placeholder="Explain why this is the correct answer..."
                  />
                </div>

                {/* Question Settings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                      Time Limit (seconds)
                    </label>
                    <input
                      type="number"
                      value={questions[currentQuestion].timeLimit || 30}
                      onChange={(e) => updateQuestion(currentQuestion, 'timeLimit', parseInt(e.target.value))}
                      className={`w-full ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      min="10"
                      max="300"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                      Points
                    </label>
                    <input
                      type="number"
                      value={questions[currentQuestion].points || 10}
                      onChange={(e) => updateQuestion(currentQuestion, 'points', parseInt(e.target.value))}
                      className={`w-full ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      min="1"
                      max="100"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              Quiz Settings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* General Settings */}
              <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                  General Settings
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Public Quiz
                      </label>
                      <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                        Allow anyone to take this quiz
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={quizData.isPublic}
                        onChange={(e) => setQuizData({ ...quizData, isPublic: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <label className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Allow Retakes
                      </label>
                      <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                        Let users retake the quiz
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={quizData.allowRetakes}
                        onChange={(e) => setQuizData({ ...quizData, allowRetakes: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <label className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Show Correct Answers
                      </label>
                      <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                        Display correct answers after completion
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={quizData.showCorrectAnswers}
                        onChange={(e) => setQuizData({ ...quizData, showCorrectAnswers: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Timing Settings */}
              <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                  Timing Settings
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                      Overall Time Limit (minutes)
                    </label>
                    <input
                      type="number"
                      value={quizData.timeLimit}
                      onChange={(e) => setQuizData({ ...quizData, timeLimit: parseInt(e.target.value) })}
                      className={`w-full ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      min="5"
                      max="180"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              Preview & Publish
            </h2>

            {/* Quiz Summary */}
            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                {quizData.title || 'Untitled Quiz'}
              </h3>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-4`}>
                {quizData.description || 'No description provided'}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {questions.length}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Questions</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {quizData.timeLimit}m
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Time Limit</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} capitalize`}>
                    {quizData.difficulty}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Difficulty</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {quizData.category || 'None'}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Category</div>
                </div>
              </div>

              {quizData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {quizData.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Questions Preview */}
            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
              <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Questions Preview
              </h3>
              <div className="space-y-4">
                {questions.map((question, index) => (
                  <div key={question.id} className={`${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'} rounded-lg p-4`}>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {index + 1}. {question.question || 'No question text'}
                      </h4>
                      <span className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-slate-600 text-slate-300' : 'bg-gray-200 text-gray-600'} capitalize`}>
                        {question.type.replace('-', ' ')}
                      </span>
                    </div>
                    {question.type === 'multiple-choice' && (
                      <div className="space-y-1">
                        {question.options.map((option, optionIndex) => (
                          <div key={optionIndex} className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} ${question.correctAnswer === optionIndex ? 'font-bold text-green-400' : ''}`}>
                            {String.fromCharCode(65 + optionIndex)}. {option || `Option ${optionIndex + 1}`}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Plus className="w-8 h-8 text-green-400 mr-3" />
          <h1 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Create Quiz
          </h1>
        </div>
        <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
          Build engaging quizzes and share your knowledge with the world
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  currentStep >= step.id
                    ? 'bg-blue-600 text-white'
                    : `${isDarkMode ? 'bg-slate-700 text-slate-400' : 'bg-gray-200 text-gray-500'}`
                }`}>
                  {currentStep > step.id ? '✓' : step.id}
                </div>
                <span className={`ml-2 font-medium ${
                  currentStep >= step.id
                    ? isDarkMode ? 'text-white' : 'text-gray-900'
                    : isDarkMode ? 'text-slate-400' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-8 h-0.5 ${
                  currentStep > step.id
                    ? 'bg-blue-600'
                    : isDarkMode ? 'bg-slate-700' : 'bg-gray-200'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="max-w-4xl mx-auto">
        {renderStepContent()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between max-w-4xl mx-auto">
        <button
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            currentStep === 1
              ? `${isDarkMode ? 'bg-slate-800 text-slate-500' : 'bg-gray-200 text-gray-400'} cursor-not-allowed`
              : `${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`
          }`}
        >
          Previous
        </button>

        <div className="flex gap-4">
          <button className={`px-6 py-3 rounded-lg font-medium transition-colors ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'} flex items-center gap-2`}>
            <Save className="w-4 h-4" />
            Save Draft
          </button>

          {currentStep < 4 ? (
            <button
              onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Next
            </button>
          ) : (
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Publish Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;