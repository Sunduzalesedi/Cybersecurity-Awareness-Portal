import { AlertTriangle, Mail, Upload, Shield, Award, CheckCircle, ArrowRight, ArrowLeft, X, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { useState } from 'react';
import { motion } from 'motion/react';

interface IncidentReportingTrainingModuleProps {
  onComplete?: () => void;
  onExit?: () => void;
}

export function IncidentReportingTrainingModule({ onComplete, onExit }: IncidentReportingTrainingModuleProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showPracticeForm, setShowPracticeForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    incidentType: '',
    description: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showBadge, setShowBadge] = useState(false);

  const totalSteps = 4;
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  const steps = [
    {
      id: 1,
      title: 'Recognize the Incident',
      description: 'The first step is identifying that a security incident has occurred. Trust your instincts - if something feels wrong, it probably is.',
      icon: AlertTriangle,
      color: 'red',
      details: [
        'Suspicious emails or attachments',
        'Unusual system behavior or pop-ups',
        'Unauthorized access attempts',
        'Lost or stolen devices',
        'Data breaches or leaks',
      ],
      tip: 'When in doubt, report it. False alarms are better than missed incidents.',
    },
    {
      id: 2,
      title: 'Gather Information',
      description: 'Collect relevant details about the incident to help the security team respond quickly and effectively.',
      icon: FileText,
      color: 'orange',
      details: [
        'When did it happen? (Date and time)',
        'What type of incident? (Phishing, malware, data leak, etc.)',
        'Who is affected? (Just you or others?)',
        'What actions did you take?',
        'Any evidence? (Screenshots, emails, files)',
      ],
      tip: 'Don\'t delete anything - preserve evidence for investigation.',
    },
    {
      id: 3,
      title: 'Submit the Report',
      description: 'Use the official incident reporting system to notify the security team. Provide as much detail as possible.',
      icon: Mail,
      color: 'blue',
      details: [
        'Access the incident reporting portal',
        'Fill in all required fields accurately',
        'Attach relevant files or screenshots',
        'Include your contact information',
        'Submit and note your ticket number',
      ],
      tip: 'Reports are confidential and help protect everyone in the organization.',
    },
    {
      id: 4,
      title: 'Follow Up & Learn',
      description: 'After reporting, follow any instructions from the security team and use the experience to stay vigilant.',
      icon: Shield,
      color: 'teal',
      details: [
        'Check your email for ticket confirmation',
        'Follow security team instructions',
        'Change passwords if advised',
        'Watch for similar threats',
        'Share lessons learned with your team',
      ],
      tip: 'Your quick action helps prevent future incidents and protects the organization.',
    },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePracticeSubmit = () => {
    setFormSubmitted(true);
    setTimeout(() => {
      setShowBadge(true);
      if (onComplete) onComplete();
    }, 1000);
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      red: { bg: 'bg-red-500/10', text: 'text-red-500', border: 'border-red-500' },
      orange: { bg: 'bg-orange-500/10', text: 'text-orange-500', border: 'border-orange-500' },
      blue: { bg: 'bg-blue-500/10', text: 'text-blue-500', border: 'border-blue-500' },
      teal: { bg: 'bg-teal-500/10', text: 'text-teal-500', border: 'border-teal-500' },
    };
    return colors[color] || colors.teal;
  };

  const currentStepData = steps[currentStep];
  const Icon = currentStepData.icon;
  const colors = getColorClasses(currentStepData.color);

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-white text-3xl mb-2">Learn How to Report a Security Incident</h1>
              <p className="text-slate-400">Lesson 3 of 4</p>
            </div>
            <Button onClick={onExit} variant="ghost" className="text-slate-400 hover:text-white">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </div>

        {/* Step Progress Tracker */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const stepColors = getColorClasses(step.color);
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;

              return (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                        isActive
                          ? `${stepColors.bg} ${stepColors.border} border-2`
                          : isCompleted
                          ? 'bg-teal-600 border-2 border-teal-600'
                          : 'bg-slate-800 border-2 border-slate-700'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="h-6 w-6 text-white" />
                      ) : (
                        <StepIcon className={`h-6 w-6 ${isActive ? stepColors.text : 'text-slate-500'}`} />
                      )}
                    </div>
                    <span className={`text-xs text-center hidden md:block ${isActive ? 'text-white' : 'text-slate-500'}`}>
                      Step {step.id}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-0.5 flex-1 ${isCompleted ? 'bg-teal-600' : 'bg-slate-700'}`}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <Card className="bg-slate-900 border-slate-800 mb-6">
          <CardHeader>
            <div className="flex items-center gap-4 mb-2">
              <div className={`${colors.bg} w-16 h-16 rounded-xl flex items-center justify-center`}>
                <Icon className={`h-8 w-8 ${colors.text}`} />
              </div>
              <div>
                <Badge className={`${colors.bg} ${colors.text} mb-2`}>
                  Step {currentStepData.id} of {totalSteps}
                </Badge>
                <CardTitle className="text-white text-2xl">
                  {currentStepData.title}
                </CardTitle>
              </div>
            </div>
            <CardDescription className="text-slate-300 text-lg">
              {currentStepData.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-white mb-3">What to do:</h3>
              <div className="space-y-3">
                {currentStepData.details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3 text-slate-300 bg-slate-800/50 p-4 rounded-lg">
                    <div className={`${colors.bg} w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <span className={`text-sm ${colors.text}`}>{index + 1}</span>
                    </div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${colors.bg} p-4 rounded-lg border ${colors.border}`}>
              <div className="flex gap-3">
                <AlertTriangle className={`h-5 w-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                <div>
                  <h4 className={`${colors.text} mb-1`}>Pro Tip:</h4>
                  <p className="text-slate-300 text-sm">{currentStepData.tip}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practice Form */}
        {currentStep === 2 && (
          <Card className="bg-slate-900 border-slate-800 mb-6">
            <CardHeader>
              <CardTitle className="text-white">Practice Reporting</CardTitle>
              <CardDescription className="text-slate-400">
                Try filling out a sample incident report
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!showPracticeForm ? (
                <Button
                  onClick={() => setShowPracticeForm(true)}
                  className="bg-red-600 hover:bg-red-700 text-white w-full py-6"
                >
                  Practice Reporting Now
                </Button>
              ) : (
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="practice-name" className="text-slate-300">Name</Label>
                      <Input
                        id="practice-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="bg-slate-800 border-slate-700 text-white"
                        disabled={formSubmitted}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="practice-dept" className="text-slate-300">Department</Label>
                      <Input
                        id="practice-dept"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        placeholder="Your department"
                        className="bg-slate-800 border-slate-700 text-white"
                        disabled={formSubmitted}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="practice-type" className="text-slate-300">Incident Type</Label>
                    <Select
                      value={formData.incidentType}
                      onValueChange={(value) => setFormData({ ...formData, incidentType: value })}
                      disabled={formSubmitted}
                    >
                      <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                        <SelectValue placeholder="Select incident type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phishing">Phishing Email</SelectItem>
                        <SelectItem value="malware">Suspected Malware</SelectItem>
                        <SelectItem value="data-breach">Potential Data Breach</SelectItem>
                        <SelectItem value="unauthorized">Unauthorized Access</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="practice-desc" className="text-slate-300">Description</Label>
                    <Textarea
                      id="practice-desc"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe what happened..."
                      className="bg-slate-800 border-slate-700 text-white min-h-[100px]"
                      disabled={formSubmitted}
                    />
                  </div>

                  <div className="border-2 border-dashed border-slate-700 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-slate-500 mx-auto mb-2" />
                    <p className="text-slate-400 text-sm">Attach files or screenshots (optional)</p>
                  </div>

                  {!formSubmitted ? (
                    <Button
                      onClick={handlePracticeSubmit}
                      disabled={!formData.name || !formData.department || !formData.incidentType || !formData.description}
                      className="bg-red-600 hover:bg-red-700 text-white w-full py-6"
                    >
                      Submit Practice Report
                    </Button>
                  ) : (
                    <div className="bg-teal-500/10 border-2 border-teal-600 rounded-lg p-6 text-center">
                      <CheckCircle className="h-12 w-12 text-teal-500 mx-auto mb-3" />
                      <h4 className="text-white text-xl mb-2">Great Job!</h4>
                      <p className="text-teal-200">
                        You've successfully completed a practice incident report. In a real scenario, the security team would be notified immediately.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            variant="outline"
            className="border-slate-700 text-black hover:bg-slate-800 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          <Button
            onClick={handleNext}
            disabled={currentStep === totalSteps - 1}
            className="bg-teal-600 hover:bg-teal-700 text-white"
          >
            Next Step
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Badge Reward Dialog */}
      <Dialog open={showBadge} onOpenChange={setShowBadge}>
        <DialogContent className="bg-slate-900 border-slate-800 text-center">
          <DialogHeader>
            <DialogTitle className="text-white text-2xl text-center">Excellent Work! 🎉</DialogTitle>
            <DialogDescription className="text-slate-400 text-center">
              You've completed the Incident Reporting Training
            </DialogDescription>
          </DialogHeader>
          <div className="py-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', duration: 0.8 }}
              className="bg-gradient-to-br from-red-500 to-orange-600 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl"
            >
              <Award className="h-16 w-16 text-white" />
            </motion.div>
            <h3 className="text-white text-xl mb-2">Incident Responder Badge Earned!</h3>
            <p className="text-slate-400 mb-4">
              You now know how to effectively report security incidents
            </p>
            <Badge className="bg-red-600 text-white text-lg px-6 py-2">
              Incident Responder
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
