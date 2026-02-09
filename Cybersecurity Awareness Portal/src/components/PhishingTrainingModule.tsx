import { Mail, Link2, Shield, AlertTriangle, CheckCircle, Award, ArrowRight, ArrowLeft, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PhishingTrainingModuleProps {
  onComplete?: () => void;
  onExit?: () => void;
}

export function PhishingTrainingModule({ onComplete, onExit }: PhishingTrainingModuleProps) {
  const [currentLesson, setCurrentLesson] = useState(1);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState('');
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [score, setScore] = useState(0);

  const totalLessons = 4;

  const lessons = [
    {
      id: 1,
      title: 'What is Phishing?',
      content: 'Phishing is a cybercrime where attackers impersonate legitimate organizations to steal sensitive information like passwords, credit card numbers, or personal data. These attacks typically come via email, text message, or phone calls.',
      keyPoints: [
        'Attackers pretend to be trusted organizations',
        'Goal is to steal personal or financial information',
        'Can lead to identity theft or financial loss',
        'Often creates a sense of urgency or fear',
      ],
    },
    {
      id: 2,
      title: 'Recognizing Phishing Emails',
      content: 'Learn to identify the red flags that indicate a phishing attempt. Attackers use psychological tricks to make you act quickly without thinking.',
      keyPoints: [
        'Suspicious sender addresses that look similar but not exact',
        'Spelling and grammar errors',
        'Urgent or threatening language',
        'Requests for personal information or credentials',
        'Unexpected attachments or links',
      ],
    },
    {
      id: 3,
      title: 'Common Phishing Techniques',
      content: 'Understand the various methods attackers use to trick victims into revealing sensitive information.',
      keyPoints: [
        'Email Phishing: Fraudulent emails from fake companies',
        'Spear Phishing: Targeted attacks on specific individuals',
        'Whaling: Attacks targeting executives or high-value targets',
        'Smishing: Phishing via SMS text messages',
        'Vishing: Phone calls pretending to be from legitimate sources',
      ],
    },
    {
      id: 4,
      title: 'How to Protect Yourself',
      content: 'Follow these best practices to stay safe from phishing attacks and protect your organization.',
      keyPoints: [
        'Verify sender identity before clicking links',
        'Hover over links to preview the actual URL',
        'Never share passwords or sensitive data via email',
        'Use multi-factor authentication (MFA)',
        'Report suspicious emails immediately',
        'Keep software and antivirus up to date',
      ],
    },
  ];

  const quizQuestions = [
    {
      question: 'You receive an email from your bank asking you to verify your account by clicking a link. What should you do first?',
      options: [
        'Click the link immediately to secure your account',
        'Check the sender\'s email address and verify by contacting the bank directly',
        'Reply to the email asking if it\'s legitimate',
        'Forward it to all your colleagues',
      ],
      correct: 1,
    },
    {
      question: 'Which of these is a red flag for phishing?',
      options: [
        'Email from a known colleague',
        'Professional formatting and branding',
        'Urgent language demanding immediate action',
        'Email during business hours',
      ],
      correct: 2,
    },
  ];

  const currentQuestion = quizQuestions[currentLesson - 1] || quizQuestions[0];

  const handleNextLesson = () => {
    if (currentLesson < totalLessons) {
      setCurrentLesson(currentLesson + 1);
      setShowQuiz(false);
      setQuizSubmitted(false);
      setQuizAnswer('');
    }
  };

  const handlePreviousLesson = () => {
    if (currentLesson > 1) {
      setCurrentLesson(currentLesson - 1);
      setShowQuiz(false);
      setQuizSubmitted(false);
      setQuizAnswer('');
    }
  };

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
    const isCorrect = parseInt(quizAnswer) === currentQuestion.correct;
    if (isCorrect) {
      setScore(score + 1);
    }
    
    if (currentLesson === totalLessons && isCorrect) {
      setTimeout(() => {
        setShowBadge(true);
        if (onComplete) onComplete();
      }, 1000);
    }
  };

  const progressPercentage = (currentLesson / totalLessons) * 100;

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-white text-3xl mb-2">Phishing Awareness Training</h1>
              <p className="text-slate-400">Lesson {currentLesson} of {totalLessons}</p>
            </div>
            <Button onClick={onExit} variant="ghost" className="text-slate-400 hover:text-white">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLesson}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-slate-900 border-slate-800 mb-6">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-teal-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl">
                      {lessons[currentLesson - 1].title}
                    </CardTitle>
                    <Badge className="bg-teal-600 text-white mt-2">
                      Lesson {currentLesson}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-300 text-lg leading-relaxed">
                  {lessons[currentLesson - 1].content}
                </p>

                <div>
                  <h3 className="text-white mb-3">Key Points:</h3>
                  <div className="space-y-2">
                    {lessons[currentLesson - 1].keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>



        {/* Quiz Section */}
        {currentLesson <= 2 && (
          <Card className="bg-slate-900 border-slate-800 mb-6">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-teal-500" />
                Knowledge Check
              </CardTitle>
              <CardDescription className="text-slate-400">
                Test your understanding
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!showQuiz ? (
                <Button
                  onClick={() => setShowQuiz(true)}
                  className="bg-teal-600 hover:bg-teal-700 text-white w-full"
                >
                  Take Quiz
                </Button>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white mb-4">{currentQuestion.question}</h4>
                    <RadioGroup value={quizAnswer} onValueChange={setQuizAnswer}>
                      <div className="space-y-3">
                        {currentQuestion.options.map((option, index) => (
                          <div
                            key={index}
                            className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all ${
                              quizSubmitted
                                ? index === currentQuestion.correct
                                  ? 'border-green-500 bg-green-500/10'
                                  : parseInt(quizAnswer) === index
                                  ? 'border-red-500 bg-red-500/10'
                                  : 'border-slate-700 bg-slate-800/50'
                                : 'border-slate-700 bg-slate-800/50 hover:border-teal-600'
                            }`}
                          >
                            <RadioGroupItem value={index.toString()} id={`option-${index}`} disabled={quizSubmitted} />
                            <Label
                              htmlFor={`option-${index}`}
                              className={`flex-1 cursor-pointer ${
                                quizSubmitted && index === currentQuestion.correct
                                  ? 'text-green-400'
                                  : quizSubmitted && parseInt(quizAnswer) === index
                                  ? 'text-red-400'
                                  : 'text-slate-300'
                              }`}
                            >
                              {option}
                            </Label>
                            {quizSubmitted && index === currentQuestion.correct && (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            )}
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  {!quizSubmitted ? (
                    <Button
                      onClick={handleSubmitQuiz}
                      disabled={!quizAnswer}
                      className="bg-teal-600 hover:bg-teal-700 text-white w-full"
                    >
                      Submit Answer
                    </Button>
                  ) : (
                    <Alert className={parseInt(quizAnswer) === currentQuestion.correct ? 'bg-green-500/10 border-green-600' : 'bg-red-500/10 border-red-600'}>
                      <CheckCircle className={`h-4 w-4 ${parseInt(quizAnswer) === currentQuestion.correct ? 'text-green-500' : 'text-red-500'}`} />
                      <AlertDescription className={parseInt(quizAnswer) === currentQuestion.correct ? 'text-green-200' : 'text-red-200'}>
                        {parseInt(quizAnswer) === currentQuestion.correct
                          ? 'Correct! You identified the right answer.'
                          : 'Incorrect. Review the lesson material and try again.'}
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={handlePreviousLesson}
            disabled={currentLesson === 1}
            variant="outline"
            className="border-slate-700 text-black hover:bg-slate-800 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          <div className="text-slate-400 text-sm">
            Score: {score} / {totalLessons}
          </div>

          <Button
            onClick={handleNextLesson}
            disabled={currentLesson === totalLessons}
            className="bg-teal-600 hover:bg-teal-700 text-white"
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Badge Reward Dialog */}
      <Dialog open={showBadge} onOpenChange={setShowBadge}>
        <DialogContent className="bg-slate-900 border-slate-800 text-center">
          <DialogHeader>
            <DialogTitle className="text-white text-2xl text-center">Congratulations! 🎉</DialogTitle>
            <DialogDescription className="text-slate-400 text-center">
              You've completed the Phishing Awareness Training
            </DialogDescription>
          </DialogHeader>
          <div className="py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.6 }}
              className="bg-gradient-to-br from-yellow-400 to-orange-500 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl"
            >
              <Award className="h-16 w-16 text-white" />
            </motion.div>
            <h3 className="text-white text-xl mb-2">Phishing Expert Badge Earned!</h3>
            <p className="text-slate-400 mb-4">
              Final Score: {score} / {totalLessons}
            </p>
            <Badge className="bg-teal-600 text-white text-lg px-6 py-2">
              Phishing Expert
            </Badge>
          </div>
          <Button onClick={() => { setShowBadge(false); if (onExit) onExit(); }} className="bg-teal-600 hover:bg-teal-700 text-white">
            Back to Training
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
