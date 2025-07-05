import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Clock,
  Calculator,
  Flag,
  ChevronLeft,
  ChevronRight,
  Save,
  Send,
  AlertTriangle,
  CheckCircle,
  Circle,
  Bookmark
} from 'lucide-react';
import { getQuestionsBySubject, generateFullTestQuestions, GATEQuestion } from '@/data/gateQuestions';

// Calculator state and functions
const useCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+': return firstValue + secondValue;
      case '-': return firstValue - secondValue;
      case '×': return firstValue * secondValue;
      case '÷': return firstValue / secondValue;
      case '=': return secondValue;
      default: return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  return {
    display,
    inputNumber,
    inputOperation,
    performCalculation,
    clear,
    inputDecimal
  };
};

const TestInterface = () => {
  const navigate = useNavigate();
  const [testConfig, setTestConfig] = useState<any>(null);
  const [questions, setQuestions] = useState<GATEQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour default
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set<number>());
  const calculator = useCalculator();

  // Load test configuration
  useEffect(() => {
    const config = localStorage.getItem('currentTestConfig');
    if (config) {
      const parsedConfig = JSON.parse(config);
      setTestConfig(parsedConfig);
      
      // Generate questions based on test type
      const generatedQuestions = generateQuestions(parsedConfig);
      setQuestions(generatedQuestions);
      
      // Set timer based on test type
      const duration = getTestDuration(parsedConfig.testType);
      setTimeLeft(duration);
    } else {
      navigate('/practice-tests');
    }
  }, [navigate]);

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
  }, [timeLeft, isSubmitted]);

  const generateQuestions = (config: any): GATEQuestion[] => {
    const { branch, testType, subject } = config;

    if (testType === 'subject' && subject) {
      // Subject-specific test - get real GATE questions
      return getQuestionsBySubject(branch, subject, 30);
    } else if (testType === 'basicFull' || testType === 'mock') {
      // Full test - mix of all subjects with real GATE questions
      return generateFullTestQuestions(branch);
    }

    return [];
  };

  const getTestDuration = (testType) => {
    switch (testType) {
      case 'subject': return 3600; // 1 hour
      case 'basicFull': return 10800; // 3 hours
      case 'mock': return 10800; // 3 hours
      default: return 3600;
    }
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId, optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const toggleFlag = (questionId) => {
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const handleSubmit = () => {
    // Calculate results
    let correctAnswers = 0;
    let totalMarks = 0;
    let scoredMarks = 0;
    
    questions.forEach(question => {
      totalMarks += question.marks;
      if (answers[question.id] === question.correct) {
        correctAnswers++;
        scoredMarks += question.marks;
      }
    });
    
    const percentage = Math.round((scoredMarks / totalMarks) * 100);
    
    // Store result
    const testResult = {
      id: Date.now(),
      testName: testConfig?.subject ? `${testConfig.subject} Test` : `${testConfig?.branch} ${testConfig?.testType}`,
      branch: testConfig?.branch,
      subject: testConfig?.subject || testConfig?.branch,
      totalQuestions: questions.length,
      correctAnswers,
      timeSpent: Math.round((getTestDuration(testConfig?.testType) - timeLeft) / 60),
      score: percentage,
      totalMarks,
      scoredMarks,
      difficulty: testConfig?.testType === 'mock' ? 'Hard' : 'Medium',
      topics: questions.map(q => q.subject).filter((v, i, a) => a.indexOf(v) === i),
      answers,
      questions,
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString()
    };
    
    // Add to practice test results
    const existingResults = JSON.parse(localStorage.getItem('practiceTestResults') || '[]');
    const updatedResults = [testResult, ...existingResults];
    localStorage.setItem('practiceTestResults', JSON.stringify(updatedResults));
    
    // Update performance analytics
    const currentData = JSON.parse(localStorage.getItem('practiceTestPerformance') || '{}');
    const updatedData = {
      ...currentData,
      testsCompleted: (currentData.testsCompleted || 0) + 1,
      totalQuestions: (currentData.totalQuestions || 0) + questions.length,
      correctAnswers: (currentData.correctAnswers || 0) + correctAnswers,
      practiceTestHours: (currentData.practiceTestHours || 0) + ((getTestDuration(testConfig?.testType) - timeLeft) / 3600),
      lastUpdated: new Date().toISOString(),
      hasPerformedActivity: true,
      isNewUser: false
    };
    
    // Calculate accuracy and average score
    if (updatedData.totalQuestions > 0) {
      updatedData.accuracy = Math.round((updatedData.correctAnswers / updatedData.totalQuestions) * 100);
    }
    
    const totalTests = updatedData.testsCompleted;
    updatedData.averageTestScore = Math.round(
      ((currentData.averageTestScore || 0) * (totalTests - 1) + percentage) / totalTests
    );
    updatedData.overallScore = updatedData.averageTestScore;
    
    // Update best and worst scores
    updatedData.bestScore = Math.max(currentData.bestScore || 0, percentage);
    updatedData.worstScore = totalTests === 1 ? percentage : Math.min(currentData.worstScore || 100, percentage);
    
    localStorage.setItem('practiceTestPerformance', JSON.stringify(updatedData));
    
    setIsSubmitted(true);
    
    // Navigate to results page
    setTimeout(() => {
      navigate('/practice-tests', { 
        state: { 
          showResult: true, 
          result: testResult 
        } 
      });
    }, 2000);
  };

  if (!testConfig || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading test...</p>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Test Submitted!</h2>
            <p className="text-gray-600 mb-4">Your answers have been saved and results are being processed.</p>
            <div className="animate-pulse text-blue-600">Redirecting to results...</div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">
                {testConfig.subject ? `${testConfig.subject} Test` : `${testConfig.branch} ${testConfig.testType}`}
              </h1>
              <p className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-red-600">
                <Clock className="h-5 w-5" />
                <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCalculator(!showCalculator)}
              >
                <Calculator className="h-4 w-4 mr-2" />
                Calculator
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Panel */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    Question {currentQuestion + 1}
                    <Badge variant="secondary" className="ml-2">
                      {currentQ?.marks} mark{currentQ?.marks > 1 ? 's' : ''}
                    </Badge>
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleFlag(currentQ?.id)}
                    className={flaggedQuestions.has(currentQ?.id) ? 'text-red-600' : ''}
                  >
                    <Flag className="h-4 w-4 mr-1" />
                    {flaggedQuestions.has(currentQ?.id) ? 'Flagged' : 'Flag'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-lg leading-relaxed whitespace-pre-line">
                    {currentQ?.question}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {currentQ?.options.map((option, index) => (
                    <div
                      key={index}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        answers[currentQ.id] === index
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleAnswerSelect(currentQ.id, index)}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                          answers[currentQ.id] === index
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300'
                        }`}>
                          {answers[currentQ.id] === index && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span className="font-medium mr-2">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        <span>{option}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                    disabled={currentQuestion === 0}
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        // Save and mark for review
                      }}
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save & Mark for Review
                    </Button>
                    
                    {currentQuestion === questions.length - 1 ? (
                      <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                        <Send className="h-4 w-4 mr-2" />
                        Submit Test
                      </Button>
                    ) : (
                      <Button
                        onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
                      >
                        Next
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Question Navigation Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-lg">Question Palette</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-2 mb-4">
                  {questions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentQuestion(index)}
                      className={`w-10 h-10 rounded text-sm font-medium transition-colors ${
                        index === currentQuestion
                          ? 'bg-blue-600 text-white'
                          : answers[questions[index]?.id] !== undefined
                          ? 'bg-green-100 text-green-800 border border-green-300'
                          : flaggedQuestions.has(questions[index]?.id)
                          ? 'bg-red-100 text-red-800 border border-red-300'
                          : 'bg-gray-100 text-gray-600 border border-gray-300 hover:bg-gray-200'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
                    <span>Answered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded"></div>
                    <span>Not Answered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-100 border border-red-300 rounded"></div>
                    <span>Flagged</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    <span>Current</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <div className="text-sm space-y-1">
                    <div>Answered: {Object.keys(answers).length}</div>
                    <div>Not Answered: {questions.length - Object.keys(answers).length}</div>
                    <div>Flagged: {flaggedQuestions.size}</div>
                  </div>
                </div>
                
                <Button
                  onClick={handleSubmit}
                  className="w-full mt-4 bg-green-600 hover:bg-green-700"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Submit Test
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Modern Scientific Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="w-full max-w-sm mx-auto my-8">
            <Card className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white p-4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 via-teal-400/30 to-cyan-400/30"></div>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Calculator className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white font-bold text-lg">Calculator</CardTitle>
                      <p className="text-white/80 text-xs">Scientific Mode</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowCalculator(false)}
                    className="text-white hover:bg-white/20 rounded-full h-10 w-10 p-0 transition-all duration-200 hover:rotate-90"
                  >
                    <span className="text-xl">×</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black">
                {/* Modern Display */}
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 mb-6 border border-emerald-500/30 shadow-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-2xl"></div>
                  <div className="relative">
                    <div className="text-right text-4xl font-light min-h-[60px] flex items-center justify-end text-emerald-400 tracking-wide font-mono">
                      {calculator.display}
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
                      </div>
                      <div className="text-xs text-gray-400 font-mono">GATE CALC</div>
                    </div>
                  </div>
                </div>

                {/* Modern Calculator Grid */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {/* Row 1 - Functions */}
                  <Button
                    onClick={calculator.clear}
                    className="h-14 bg-gradient-to-br from-red-500 via-red-600 to-red-700 hover:from-red-400 hover:via-red-500 hover:to-red-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 rounded-xl border-0 relative overflow-hidden group"
                  >
                    <span className="relative z-10">C</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                  <Button
                    onClick={() => calculator.inputOperation('±')}
                    className="h-14 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 hover:from-amber-400 hover:via-orange-400 hover:to-red-400 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 rounded-xl border-0 relative overflow-hidden group"
                  >
                    <span className="relative z-10">±</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                  <Button
                    onClick={() => calculator.inputOperation('%')}
                    className="h-14 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 hover:from-amber-400 hover:via-orange-400 hover:to-red-400 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 rounded-xl border-0 relative overflow-hidden group"
                  >
                    <span className="relative z-10">%</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                  <Button
                    onClick={() => calculator.inputOperation('÷')}
                    className="h-14 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-400 hover:via-indigo-400 hover:to-purple-400 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 rounded-xl border-0 relative overflow-hidden group"
                  >
                    <span className="relative z-10">÷</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>

                  {/* Row 2 - Numbers 7,8,9 and × */}
                  <Button
                    onClick={() => calculator.inputNumber('7')}
                    className="h-14 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 hover:from-gray-500 hover:via-gray-600 hover:to-gray-700 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 rounded-xl border-0 relative overflow-hidden group"
                  >
                    <span className="relative z-10">7</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                  <Button
                    onClick={() => calculator.inputNumber('8')}
                    className="h-14 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 hover:from-gray-500 hover:via-gray-600 hover:to-gray-700 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 rounded-xl border-0 relative overflow-hidden group"
                  >
                    <span className="relative z-10">8</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                  <Button
                    onClick={() => calculator.inputNumber('9')}
                    className="h-14 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 hover:from-gray-500 hover:via-gray-600 hover:to-gray-700 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 rounded-xl border-0 relative overflow-hidden group"
                  >
                    <span className="relative z-10">9</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                  <Button
                    onClick={() => calculator.inputOperation('×')}
                    className="h-14 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-400 hover:via-indigo-400 hover:to-purple-400 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 rounded-xl border-0 relative overflow-hidden group"
                  >
                    <span className="relative z-10">×</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>

                  {/* Rows 3-5 - Remaining numbers and operations */}
                  {[
                    ['4', '5', '6', '-'],
                    ['1', '2', '3', '+'],
                    ['0', '0', '.', '=']
                  ].map((row, rowIndex) =>
                    row.map((btn, btnIndex) => {
                      const isNumber = !isNaN(Number(btn));
                      const isOperation = ['+', '-', '×', '÷'].includes(btn);
                      const isEquals = btn === '=';
                      const isZero = btn === '0' && btnIndex === 0 && rowIndex === 2;

                      let className = "h-14 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 rounded-xl border-0 relative overflow-hidden group ";

                      if (isEquals) {
                        className += "bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-400 hover:via-green-400 hover:to-teal-400";
                      } else if (isOperation) {
                        className += "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-400 hover:via-indigo-400 hover:to-purple-400";
                      } else {
                        className += "bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 hover:from-gray-500 hover:via-gray-600 hover:to-gray-700";
                      }

                      if (isZero) className += " col-span-2";
                      if (btnIndex === 1 && rowIndex === 2) return null; // Skip second 0

                      return (
                        <Button
                          key={`${rowIndex}-${btnIndex}`}
                          onClick={() => {
                            if (isEquals) calculator.performCalculation();
                            else if (btn === '.') calculator.inputDecimal();
                            else if (isOperation) calculator.inputOperation(btn);
                            else calculator.inputNumber(btn);
                          }}
                          className={className + " text-white"}
                        >
                          <span className="relative z-10">{btn}</span>
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Button>
                      );
                    })
                  )}
                </div>

                {/* Scientific Functions */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'sin', color: 'from-violet-500 via-purple-500 to-fuchsia-500 hover:from-violet-400 hover:via-purple-400 hover:to-fuchsia-400' },
                    { label: 'cos', color: 'from-violet-500 via-purple-500 to-fuchsia-500 hover:from-violet-400 hover:via-purple-400 hover:to-fuchsia-400' },
                    { label: 'tan', color: 'from-violet-500 via-purple-500 to-fuchsia-500 hover:from-violet-400 hover:via-purple-400 hover:to-fuchsia-400' },
                    { label: 'log', color: 'from-indigo-500 via-blue-500 to-cyan-500 hover:from-indigo-400 hover:via-blue-400 hover:to-cyan-400' },
                    { label: 'ln', color: 'from-indigo-500 via-blue-500 to-cyan-500 hover:from-indigo-400 hover:via-blue-400 hover:to-cyan-400' },
                    { label: '√', color: 'from-indigo-500 via-blue-500 to-cyan-500 hover:from-indigo-400 hover:via-blue-400 hover:to-cyan-400' },
                    { label: 'x²', color: 'from-pink-500 via-rose-500 to-red-500 hover:from-pink-400 hover:via-rose-400 hover:to-red-400' },
                    { label: 'π', color: 'from-pink-500 via-rose-500 to-red-500 hover:from-pink-400 hover:via-rose-400 hover:to-red-400' },
                    { label: 'e', color: 'from-pink-500 via-rose-500 to-red-500 hover:from-pink-400 hover:via-rose-400 hover:to-red-400' }
                  ].map((btn) => (
                    <Button
                      key={btn.label}
                      onClick={() => calculator.inputOperation(btn.label === 'x²' ? '^' : btn.label)}
                      className={`h-12 bg-gradient-to-br ${btn.color} text-white text-sm font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 rounded-xl border-0 relative overflow-hidden group`}
                    >
                      <span className="relative z-10">{btn.label}</span>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestInterface;
