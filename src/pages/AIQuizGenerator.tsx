import React, { useState } from 'react';
import { Bot, Sparkles, Upload, FileText, Globe, Zap, Settings, Download, Play, RefreshCw, Copy, Check } from 'lucide-react';

interface AIQuizGeneratorProps {
  isDarkMode: boolean;
}

const AIQuizGenerator: React.FC<AIQuizGeneratorProps> = ({ isDarkMode }) => {
  const [inputMethod, setInputMethod] = useState<'text' | 'url' | 'file'>('text');
  const [inputText, setInputText] = useState('');
  const [inputUrl, setInputUrl] = useState('');
  const [quizSettings, setQuizSettings] = useState({
    numQuestions: 10,
    difficulty: 'medium',
    questionTypes: ['multiple-choice'],
    language: 'english',
    tone: 'professional'
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedQuiz, setGeneratedQuiz] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  const inputMethods = [
    { id: 'text', label: 'Text Input', icon: FileText, description: 'Paste or type your content' },
    { id: 'url', label: 'Website URL', icon: Globe, description: 'Generate from web content' },
    { id: 'file', label: 'File Upload', icon: Upload, description: 'Upload PDF, DOC, or TXT' }
  ];

  const difficulties = [
    { value: 'easy', label: 'Easy', color: 'text-green-400' },
    { value: 'medium', label: 'Medium', color: 'text-yellow-400' },
    { value: 'hard', label: 'Hard', color: 'text-red-400' },
    { value: 'expert', label: 'Expert', color: 'text-purple-400' }
  ];

  const questionTypes = [
    { value: 'multiple-choice', label: 'Multiple Choice' },
    { value: 'true-false', label: 'True/False' },
    { value: 'short-answer', label: 'Short Answer' },
    { value: 'fill-blank', label: 'Fill in the Blank' }
  ];

  const tones = [
    { value: 'professional', label: 'Professional' },
    { value: 'casual', label: 'Casual' },
    { value: 'academic', label: 'Academic' },
    { value: 'fun', label: 'Fun & Engaging' }
  ];

  const sampleQuiz = {
    title: 'Introduction to Artificial Intelligence',
    description: 'Test your knowledge about AI fundamentals, machine learning, and modern applications.',
    questions: [
      {
        id: 1,
        question: 'What does AI stand for?',
        type: 'multiple-choice',
        options: ['Artificial Intelligence', 'Automated Intelligence', 'Advanced Intelligence', 'Algorithmic Intelligence'],
        correctAnswer: 0,
        explanation: 'AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines.'
      },
      {
        id: 2,
        question: 'Machine Learning is a subset of Artificial Intelligence.',
        type: 'true-false',
        correctAnswer: true,
        explanation: 'Machine Learning is indeed a subset of AI that focuses on algorithms that can learn from data.'
      },
      {
        id: 3,
        question: 'Which of the following is NOT a type of machine learning?',
        type: 'multiple-choice',
        options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Quantum Learning'],
        correctAnswer: 3,
        explanation: 'Quantum Learning is not a recognized type of machine learning. The three main types are supervised, unsupervised, and reinforcement learning.'
      }
    ]
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedQuiz(sampleQuiz);
      setIsGenerating(false);
    }, 3000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(generatedQuiz, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleQuestionTypeChange = (type: string) => {
    const updatedTypes = quizSettings.questionTypes.includes(type)
      ? quizSettings.questionTypes.filter(t => t !== type)
      : [...quizSettings.questionTypes, type];
    
    setQuizSettings({ ...quizSettings, questionTypes: updatedTypes });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Bot className="w-8 h-8 text-purple-400 mr-3" />
          <h1 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            AI Quiz Generator
          </h1>
        </div>
        <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
          Transform any content into engaging quizzes with the power of AI
        </p>
      </div>

      {/* Features Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center`}>
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Smart Generation</h3>
          <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            AI analyzes your content and creates relevant, engaging questions automatically
          </p>
        </div>
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center`}>
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Zap className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Lightning Fast</h3>
          <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            Generate comprehensive quizzes in seconds, not hours
          </p>
        </div>
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6 text-center`}>
          <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Settings className="w-6 h-6 text-green-400" />
          </div>
          <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Customizable</h3>
          <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            Fine-tune difficulty, question types, and style to match your needs
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Content Input
          </h2>

          {/* Input Method Selection */}
          <div className="grid grid-cols-3 gap-3">
            {inputMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setInputMethod(method.id as any)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  inputMethod === method.id
                    ? 'border-purple-500 bg-purple-500/10'
                    : `${isDarkMode ? 'border-slate-600 hover:border-slate-500' : 'border-gray-300 hover:border-gray-400'}`
                }`}
              >
                <method.icon className={`w-6 h-6 mx-auto mb-2 ${inputMethod === method.id ? 'text-purple-400' : isDarkMode ? 'text-slate-400' : 'text-gray-500'}`} />
                <div className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {method.label}
                </div>
                <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mt-1`}>
                  {method.description}
                </div>
              </button>
            ))}
          </div>

          {/* Input Content */}
          {inputMethod === 'text' && (
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                Paste your content here
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={8}
                className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none`}
                placeholder="Paste your article, notes, or any text content here. The AI will analyze it and generate relevant quiz questions..."
              />
            </div>
          )}

          {inputMethod === 'url' && (
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                Website URL
              </label>
              <input
                type="url"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder="https://example.com/article"
              />
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mt-2`}>
                Enter a URL to extract content and generate quiz questions from web articles, blog posts, or documentation.
              </p>
            </div>
          )}

          {inputMethod === 'file' && (
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                Upload File
              </label>
              <div className={`border-2 border-dashed ${isDarkMode ? 'border-slate-600 bg-slate-800' : 'border-gray-300 bg-gray-50'} rounded-lg p-8 text-center`}>
                <Upload className={`w-12 h-12 ${isDarkMode ? 'text-slate-400' : 'text-gray-400'} mx-auto mb-4`} />
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-2`}>
                  Click to upload or drag and drop
                </p>
                <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>
                  PDF, DOC, DOCX, TXT up to 10MB
                </p>
              </div>
            </div>
          )}

          {/* Quiz Settings */}
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Quiz Settings
            </h3>

            <div className="space-y-4">
              {/* Number of Questions */}
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                  Number of Questions: {quizSettings.numQuestions}
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={quizSettings.numQuestions}
                  onChange={(e) => setQuizSettings({ ...quizSettings, numQuestions: parseInt(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5</span>
                  <span>50</span>
                </div>
              </div>

              {/* Difficulty */}
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                  Difficulty Level
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {difficulties.map((difficulty) => (
                    <button
                      key={difficulty.value}
                      onClick={() => setQuizSettings({ ...quizSettings, difficulty: difficulty.value })}
                      className={`p-2 rounded-lg text-sm font-medium transition-colors ${
                        quizSettings.difficulty === difficulty.value
                          ? 'bg-purple-600 text-white'
                          : `${isDarkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`
                      }`}
                    >
                      {difficulty.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question Types */}
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                  Question Types
                </label>
                <div className="space-y-2">
                  {questionTypes.map((type) => (
                    <label key={type.value} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={quizSettings.questionTypes.includes(type.value)}
                        onChange={() => handleQuestionTypeChange(type.value)}
                        className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                      />
                      <span className={`ml-2 text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {type.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tone */}
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'} mb-2`}>
                  Tone & Style
                </label>
                <select
                  value={quizSettings.tone}
                  onChange={(e) => setQuizSettings({ ...quizSettings, tone: e.target.value })}
                  className={`w-full ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                >
                  {tones.map((tone) => (
                    <option key={tone.value} value={tone.value}>{tone.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating || (!inputText && !inputUrl)}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Generating Quiz...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate Quiz with AI
              </>
            )}
          </button>
        </div>

        {/* Output Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Generated Quiz
            </h2>
            {generatedQuiz && (
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className={`p-2 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} rounded-lg transition-colors`}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
                <button className={`p-2 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} rounded-lg transition-colors`}>
                  <Download className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {!generatedQuiz && !isGenerating && (
            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-8 text-center`}>
              <Bot className={`w-16 h-16 ${isDarkMode ? 'text-slate-600' : 'text-gray-400'} mx-auto mb-4`} />
              <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                Ready to Generate
              </h3>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                Add your content and click "Generate Quiz with AI" to create your quiz
              </p>
            </div>
          )}

          {isGenerating && (
            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-8 text-center`}>
              <div className="animate-pulse">
                <Bot className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  AI is Working...
                </h3>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-4`}>
                  Analyzing your content and generating quiz questions
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-purple-600 h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          )}

          {generatedQuiz && (
            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white border border-gray-200'} rounded-xl p-6`}>
              <div className="mb-6">
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  {generatedQuiz.title}
                </h3>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                  {generatedQuiz.description}
                </p>
              </div>

              <div className="space-y-4 mb-6">
                {generatedQuiz.questions.map((question: any, index: number) => (
                  <div key={question.id} className={`${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'} rounded-lg p-4`}>
                    <div className="flex items-start justify-between mb-3">
                      <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {index + 1}. {question.question}
                      </h4>
                      <span className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-slate-600 text-slate-300' : 'bg-gray-200 text-gray-600'} capitalize`}>
                        {question.type.replace('-', ' ')}
                      </span>
                    </div>

                    {question.type === 'multiple-choice' && (
                      <div className="space-y-2 mb-3">
                        {question.options.map((option: string, optionIndex: number) => (
                          <div key={optionIndex} className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} ${question.correctAnswer === optionIndex ? 'font-bold text-green-400' : ''}`}>
                            {String.fromCharCode(65 + optionIndex)}. {option}
                          </div>
                        ))}
                      </div>
                    )}

                    {question.type === 'true-false' && (
                      <div className="mb-3">
                        <span className={`text-sm font-bold ${question.correctAnswer ? 'text-green-400' : 'text-red-400'}`}>
                          Answer: {question.correctAnswer ? 'True' : 'False'}
                        </span>
                      </div>
                    )}

                    {question.explanation && (
                      <div className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-500'} italic`}>
                        Explanation: {question.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" />
                  Preview Quiz
                </button>
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Save to Library
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIQuizGenerator;