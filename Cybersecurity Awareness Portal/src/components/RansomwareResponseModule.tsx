import { Lock, Shield, AlertTriangle, CheckCircle, Award, ArrowRight, ArrowLeft, X, AlertOctagon, Server, FileX, Phone } from 'lucide-react';
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

interface RansomwareResponseModuleProps {
  onComplete?: () => void;
  onExit?: () => void;
}

export function RansomwareResponseModule({ onComplete, onExit }: RansomwareResponseModuleProps) {
  const [currentLesson, setCurrentLesson] = useState(1);
  const [showExample, setShowExample] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState('');
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [score, setScore] = useState(0);

  const totalLessons = 5;

  const lessons = [
    {
      id: 1,
      title: 'Understanding Ransomware',
      content: 'Ransomware is a type of malicious software that encrypts your files and systems, making them inaccessible until a ransom is paid. It can spread through phishing emails, malicious downloads, compromised websites, or vulnerabilities in software.',
      keyPoints: [
        'Encrypts files and demands payment for decryption key',
        'Can spread across networks, affecting multiple systems',
        'Payment does not guarantee file recovery',
        'Causes significant downtime and financial losses',
        'Prevention is far more effective than paying ransom',
      ],
    },
    {
      id: 2,
      title: 'Common Infection Methods',
      content: 'Understanding how ransomware infiltrates systems helps you recognize and prevent attacks before they happen.',
      keyPoints: [
        'Phishing Emails: Malicious attachments or links in emails',
        'Drive-by Downloads: Infected websites that download malware automatically',
        'Exploit Kits: Taking advantage of unpatched software vulnerabilities',
        'Remote Desktop Protocol (RDP): Weak or stolen credentials',
        'Malicious Ads: Infected advertisements on legitimate websites',
        'USB Drives: Infected external devices',
      ],
    },
    {
      id: 3,
      title: 'Early Warning Signs',
      content: 'Recognizing the early signs of a ransomware infection can help you act quickly to minimize damage.',
      keyPoints: [
        'Files suddenly become inaccessible or encrypted',
        'File extensions change to unknown formats',
        'Pop-up ransom notes demanding payment',
        'Unusual system slowdown or high CPU usage',
        'Desktop wallpaper changed to ransom message',
        'Network drives or shared folders become unavailable',
        'Antivirus software disabled or unresponsive',
      ],
    },
    {
      id: 4,
      title: 'Immediate Response Actions',
      content: 'If you suspect a ransomware attack, quick action is critical to prevent further damage and contain the threat.',
      keyPoints: [
        'STEP 1: Immediately disconnect from network (Wi-Fi and ethernet)',
        'STEP 2: Do NOT turn off your computer - preserve evidence',
        'STEP 3: Call IT Security hotline: 1-800-SECURE-NOW',
        'STEP 4: Document what happened and when',
        'STEP 5: Alert nearby colleagues to check their systems',
        'STEP 6: Do NOT pay the ransom without consulting security team',
      ],
    },
    {
      id: 5,
      title: 'Prevention Best Practices',
      content: 'Protecting yourself and the organization from ransomware requires constant vigilance and following security best practices.',
      keyPoints: [
        'Keep all software and systems up to date with latest patches',
        'Never open suspicious email attachments or links',
        'Use strong, unique passwords with multi-factor authentication',
        'Regular backups stored offline or in secure cloud storage',
        'Install and maintain updated antivirus software',
        'Disable macros in Microsoft Office documents',
        'Use application whitelisting where possible',
        'Attend regular security awareness training',
      ],
    },
  ];

  const ransomwareExample = {
    type: 'WannaCry Simulation',
    scenario: `You arrive at work on Monday morning and turn on your computer. After logging in, you notice:

1. Your desktop wallpaper has changed to a red screen
2. A large pop-up window appears with a countdown timer
3. The message reads: "Your files have been encrypted!"
4. It demands $300 in Bitcoin within 72 hours
5. You try to open your documents folder - all files show ".WNCRY" extension
6. Several colleagues are experiencing the same issue`,
    correctActions: [
      '✓ Immediately disconnect from network',
      '✓ Do not turn off computer',
      '✓ Call IT Security hotline immediately',
      '✓ Document the time and details',
      '✓ Alert colleagues to check their systems',
    ],
    incorrectActions: [
      '✗ Pay the ransom immediately',
      '✗ Try to decrypt files yourself',
      '✗ Restart your computer multiple times',
      '✗ Delete suspicious files',
      '✗ Keep working on the infected machine',
    ],
  };

  const quizQuestions = [
    {
      question: 'You notice a colleague\'s computer showing a ransom message demanding payment. What should be the FIRST action?',
      options: [
        'Pay the ransom to get the files back quickly',
        'Immediately disconnect the computer from the network',
        'Try to remove the ransomware with antivirus software',
        'Restart the computer to see if it fixes the problem',
      ],
      correct: 1,
    },
    {
      question: 'Which of the following is the BEST defense against ransomware?',
      options: [
        'Paying for cyber insurance',
        'Installing multiple antivirus programs',
        'Regular offline backups and keeping software updated',
        'Using the same password for all accounts',
      ],
      correct: 2,
    },
    {
      question: 'What should you do if you receive an email with an unexpected attachment from a known contact?',
      options: [
        'Open it immediately since you know the sender',
        'Verify with the sender through a different communication method before opening',
        'Forward it to your entire department',
        'Delete it without checking with anyone',
      ],
      correct: 1,
    },
    {
      question: 'Why should you NOT pay the ransom if infected by ransomware?',
      options: [
        'Payment guarantees file recovery',
        'It funds criminal activities and there\'s no guarantee of file recovery',
        'The ransom amount is always too expensive',
        'It will automatically remove the malware',
      ],
      correct: 1,
    },
    {
      question: 'Which of these is an early warning sign of a potential ransomware infection?',
      options: [
        'Computer running normally',
        'Successfully opening all your files',
        'Files suddenly becoming inaccessible or showing strange extensions',
        'Receiving a legitimate software update notification',
      ],
      correct: 2,
    },
  ];

  const currentQuestion = quizQuestions[currentLesson - 1] || quizQuestions[0];

  const handleNextLesson = () => {
    if (currentLesson < totalLessons) {
      setCurrentLesson(currentLesson + 1);
      setShowExample(false);
      setShowQuiz(false);
      setQuizSubmitted(false);
      setQuizAnswer('');
    }
  };

  const handlePreviousLesson = () => {
    if (currentLesson > 1) {
      setCurrentLesson(currentLesson - 1);
      setShowExample(false);
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
              <h1 className="text-white text-3xl mb-2">Ransomware Response Training</h1>
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
                  <div className="bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Lock className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl">
                      {lessons[currentLesson - 1].title}
                    </CardTitle>
                    <Badge className="bg-red-600 text-white mt-2">
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

        {/* Attack Scenario Example */}
        {currentLesson === 4 && (
          <Card className="bg-slate-900 border-slate-800 mb-6">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <AlertOctagon className="h-5 w-5 text-red-500" />
                Ransomware Attack Scenario
              </CardTitle>
              <CardDescription className="text-slate-400">
                Learn how to respond to a real attack situation
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!showExample ? (
                <Button
                  onClick={() => setShowExample(true)}
                  className="bg-red-600 hover:bg-red-700 text-white w-full"
                >
                  View Attack Scenario
                </Button>
              ) : (
                <div className="space-y-4">
                  <Alert className="bg-red-500/10 border-red-600">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    <AlertDescription className="text-red-200">
                      <strong>Simulation:</strong> This is a training scenario for educational purposes.
                    </AlertDescription>
                  </Alert>

                  <div className="bg-slate-800 rounded-lg p-6 border-2 border-red-500/50">
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-700">
                      <div className="bg-red-500/10 w-10 h-10 rounded-full flex items-center justify-center">
                        <FileX className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="text-white">Attack Type: {ransomwareExample.type}</h4>
                        <Badge className="bg-red-600 text-white mt-1">High Priority</Badge>
                      </div>
                    </div>
                    <div className="text-slate-300 whitespace-pre-line mb-6">
                      {ransomwareExample.scenario}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-green-400 mb-3 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5" />
                          Correct Response Actions
                        </h4>
                        <div className="space-y-2">
                          {ransomwareExample.correctActions.map((action, index) => (
                            <div key={index} className="text-green-300 bg-green-500/10 p-3 rounded-lg">
                              {action}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-red-400 mb-3 flex items-center gap-2">
                          <X className="h-5 w-5" />
                          Incorrect Actions
                        </h4>
                        <div className="space-y-2">
                          {ransomwareExample.incorrectActions.map((action, index) => (
                            <div key={index} className="text-red-300 bg-red-500/10 p-3 rounded-lg">
                              {action}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Alert className="bg-yellow-500/10 border-yellow-600">
                    <Phone className="h-4 w-4 text-yellow-500" />
                    <AlertDescription className="text-yellow-200">
                      <strong>Remember:</strong> Call IT Security Hotline immediately: <span className="text-yellow-400">1-800-SECURE-NOW</span>
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Quiz Section */}
        <Card className="bg-slate-900 border-slate-800 mb-6">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-teal-500" />
              Knowledge Check
            </CardTitle>
            <CardDescription className="text-slate-400">
              Test your understanding of ransomware response
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
                        ? 'Correct! You understand proper ransomware response procedures.'
                        : 'Incorrect. Review the lesson material and the correct response actions.'}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            )}
          </CardContent>
        </Card>

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
              You've completed the Ransomware Response Training
            </DialogDescription>
          </DialogHeader>
          <div className="py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.6 }}
              className="bg-gradient-to-br from-red-500 to-orange-600 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl"
            >
              <Shield className="h-16 w-16 text-white" />
            </motion.div>
            <h3 className="text-white text-xl mb-2">Ransomware Defense Badge Earned!</h3>
            <p className="text-slate-400 mb-4">
              Final Score: {score} / {totalLessons}
            </p>
            <Badge className="bg-red-600 text-white text-lg px-6 py-2">
              Ransomware Defender
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
