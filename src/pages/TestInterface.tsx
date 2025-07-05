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
import { getQuestionsBySubject, generateFullTestQuestions, GATEQuestion, gateQuestions } from '@/data/gateQuestions';

// Calculator state and functions
const useCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [isScientificMode, setIsScientificMode] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const toggleSign = () => {
    if (display.startsWith('-')) {
      setDisplay(display.substring(1));
    } else if (display !== '0') {
      setDisplay('-' + display);
    }
  };

  const percent = () => {
    const currentValue = parseFloat(display);
    setDisplay(String(currentValue / 100));
  };

  const inputOperation = (nextOperation: string) => {
    // Handle special operations that don't need a second operand
    if (['sin(', 'cos(', 'tan(', 'log(', 'ln(', 'e^(', '10^(', '√(', '!', '1/(', '|'].includes(nextOperation)) {
      try {
        let result;
        const currentValue = parseFloat(display);
        
        switch(nextOperation) {
          case 'sin(': result = Math.sin((currentValue * Math.PI) / 180); break;
          case 'cos(': result = Math.cos((currentValue * Math.PI) / 180); break;
          case 'tan(': result = Math.tan((currentValue * Math.PI) / 180); break;
          case 'log(': result = Math.log10(currentValue); break;
          case 'ln(': result = Math.log(currentValue); break;
          case 'e^(': result = Math.exp(currentValue); break;
          case '10^(': result = Math.pow(10, currentValue); break;
          case '√(': result = Math.sqrt(currentValue); break;
          case '!': 
            result = 1;
            for (let i = 2; i <= currentValue; i++) {
              result *= i;
            }
            break;
          case '1/(': result = 1 / currentValue; break;
          case '|': result = Math.abs(currentValue); break;
          default: result = currentValue;
        }
        
        setDisplay(String(result));
        setPreviousValue(result);
      } catch (e) {
        setDisplay('Error');
      }
      return;
    }

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
    inputDecimal,
    isScientificMode,
    setIsScientificMode,
    toggleSign,
    percent
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
    
    try {
      if (testType === 'subject' && subject) {
        // Subject-specific test - get all questions for the subject
        // Using a large number to ensure we get all questions
        return getQuestionsBySubject(branch, subject, 1000);
      } else if (testType === 'basicFull' || testType === 'mock') {
        // Full test - get questions from all subjects
        const questions: GATEQuestion[] = [];
        
        // Add General Aptitude questions (10)
        const aptitudeQuestions = getQuestionsBySubject(branch, 'General Aptitude', 10);
        questions.push(...aptitudeQuestions);
        
        // Add Engineering Mathematics questions (15)
        const mathQuestions = getQuestionsBySubject(branch, 'Engineering Mathematics', 15);
        questions.push(...mathQuestions);
        
        // Add core subject questions (40 total, distributed among subjects)
        const branchData = gateQuestions[branch as keyof typeof gateQuestions];
        if (branchData && typeof branchData === 'object') {
          const coreSubjects = Object.keys(branchData).filter(
            sub => sub !== 'General Aptitude' && sub !== 'Engineering Mathematics'
          );
          
          const questionsPerSubject = Math.ceil(40 / Math.max(1, coreSubjects.length));
          
          coreSubjects.forEach(sub => {
            const subjectQs = getQuestionsBySubject(branch, sub, questionsPerSubject);
            questions.push(...subjectQs);
          });
        }
        
        // Shuffle all questions for better distribution
        return questions.sort(() => Math.random() - 0.5);
      }
      
      return [];
    } catch (error) {
      console.error('Error generating questions:', error);
      return [];
    }
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
                <div className="max-h-[400px] overflow-y-auto pr-2 mb-4">
                  <div className="grid grid-cols-5 gap-2">
                    {questions.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentQuestion(index)}
                        className={`w-10 h-10 rounded text-sm font-medium transition-colors flex items-center justify-center ${
                          index === currentQuestion
                            ? 'bg-blue-600 text-white'
                            : answers[questions[index]?.id] !== undefined
                            ? 'bg-green-100 text-green-800 border border-green-300'
                            : flaggedQuestions.has(questions[index]?.id)
                            ? 'bg-red-100 text-red-800 border border-red-300'
                            : 'bg-gray-100 text-gray-600 border border-gray-300 hover:bg-gray-200'
                        }`}
                        title={`Question ${index + 1}${
                          answers[questions[index]?.id] !== undefined ? ' (Answered)' : ''
                        }${
                          flaggedQuestions.has(questions[index]?.id) ? ' (Flagged)' : ''
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
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

      {/* GATE Style Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-xs mx-auto">
            <Card className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="bg-blue-800 text-white p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-white" />
                    <CardTitle className="text-lg font-medium">GATE Calculator</CardTitle>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => calculator.setIsScientificMode(!calculator.isScientificMode)}
                    className="text-white hover:bg-white/20 h-8 px-3 text-xs"
                  >
                    {calculator.isScientificMode ? 'Standard' : 'Scientific'}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowCalculator(false)}
                    className="text-white hover:bg-white/20 h-8 w-8 p-0"
                  >
                    ×
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4 bg-gray-50">
                {/* Calculator Display */}
                <div className="bg-white border border-gray-300 rounded p-3 mb-4 shadow-inner">
                  <div className="text-right text-3xl font-mono text-gray-800 min-h-[40px] overflow-x-auto whitespace-nowrap">
                    {calculator.display}
                  </div>
                </div>

                {/* Calculator Grid */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {/* Row 1 - Functions */}
                  <Button
                    onClick={calculator.clear}
                    className="h-12 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors"
                  >
                    C
                  </Button>
                  <Button
                    onClick={() => calculator.inputOperation('±')}
                    className="h-12 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-md transition-colors"
                  >
                    ±
                  </Button>
                  <Button
                    onClick={() => calculator.inputOperation('%')}
                    className="h-12 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-md transition-colors"
                  >
                    %
                  </Button>
                  <Button
                    onClick={() => calculator.inputOperation('÷')}
                    className="h-12 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-md transition-colors"
                  >
                    ÷
                  </Button>

                  {/* Row 2 - Numbers 7,8,9 and × */}
                  <Button
                    onClick={() => calculator.inputNumber('7')}
                    className="h-12 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition-colors"
                  >
                    7
                  </Button>
                  <Button
                    onClick={() => calculator.inputNumber('8')}
                    className="h-12 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition-colors"
                  >
                    8
                  </Button>
                  <Button
                    onClick={() => calculator.inputNumber('9')}
                    className="h-12 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition-colors"
                  >
                    9
                  </Button>
                  <Button
                    onClick={() => calculator.inputOperation('×')}
                    className="h-12 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-md transition-colors"
                  >
                    ×
                  </Button>

                  {/* Rows 3-5 - Remaining numbers and operations */}
                  <>
                    <Button onClick={() => calculator.inputNumber('4')} className="h-12 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition-colors">4</Button>
                    <Button onClick={() => calculator.inputNumber('5')} className="h-12 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition-colors">5</Button>
                    <Button onClick={() => calculator.inputNumber('6')} className="h-12 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition-colors">6</Button>
                    <Button onClick={() => calculator.inputOperation('-')} className="h-12 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-md transition-colors">-</Button>
                    
                    <Button onClick={() => calculator.inputNumber('1')} className="h-12 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition-colors">1</Button>
                    <Button onClick={() => calculator.inputNumber('2')} className="h-12 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition-colors">2</Button>
                    <Button onClick={() => calculator.inputNumber('3')} className="h-12 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition-colors">3</Button>
                    <Button onClick={() => calculator.inputOperation('+')} className="h-12 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-md transition-colors">+</Button>
                    
                    <Button 
                      onClick={() => calculator.inputNumber('0')} 
                      className="h-12 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition-colors col-span-2"
                    >
                      0
                    </Button>
                    <Button onClick={() => calculator.inputDecimal()} className="h-12 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition-colors">.</Button>
                    <Button 
                      onClick={() => calculator.performCalculation()} 
                      className="h-12 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors"
                    >
                      =
                    </Button>
                  </>
                </div>

                {/* Scientific Functions */}
                {calculator.isScientificMode && (
                  <>
                    <div className="grid grid-cols-5 gap-2 mt-3">
                      <Button onClick={() => calculator.inputOperation('sin(')} className="h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium rounded-md transition-colors">sin</Button>
                      <Button onClick={() => calculator.inputOperation('cos(')} className="h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium rounded-md transition-colors">cos</Button>
                      <Button onClick={() => calculator.inputOperation('tan(')} className="h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium rounded-md transition-colors">tan</Button>
                      <Button onClick={() => calculator.inputOperation('log(')} className="h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium rounded-md transition-colors">log</Button>
                      <Button onClick={() => calculator.inputOperation('ln(')} className="h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium rounded-md transition-colors">ln</Button>
                    </div>

                    <div className="grid grid-cols-5 gap-2 mt-2">
                      <Button onClick={() => calculator.inputOperation('√(')} className="h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium rounded-md transition-colors">√</Button>
                      <Button onClick={() => calculator.inputOperation('^')} className="h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium rounded-md transition-colors">x^y</Button>
                      <Button onClick={() => calculator.inputOperation('(')} className="h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium rounded-md transition-colors">(</Button>
                      <Button onClick={() => calculator.inputOperation(')')} className="h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium rounded-md transition-colors">)</Button>
                      <Button onClick={() => calculator.inputOperation('π')} className="h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium rounded-md transition-colors">π</Button>
                    </div>

                    <div className="grid grid-cols-5 gap-2 mt-2">
                      <Button onClick={() => calculator.inputOperation('e^(')} className="h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium rounded-md transition-colors">e^x</Button>
                      <Button onClick={() => calculator.inputOperation('10^(')} className="h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium rounded-md transition-colors">10^x</Button>
                      <Button onClick={() => calculator.inputOperation('!')} className="h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium rounded-md transition-colors">n!</Button>
                      <Button onClick={() => calculator.inputOperation('1/(')} className="h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium rounded-md transition-colors">1/x</Button>
                      <Button onClick={() => calculator.inputOperation('|')} className="h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium rounded-md transition-colors">|x|</Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestInterface;
