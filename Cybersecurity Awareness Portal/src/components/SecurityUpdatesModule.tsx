import { Shield, TrendingUp, CheckCircle, Award, AlertTriangle, Globe, Lock, X, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Separator } from './ui/separator';
import { useState } from 'react';
import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SecurityUpdatesModuleProps {
  onComplete?: () => void;
  onExit?: () => void;
}

export function SecurityUpdatesModule({ onComplete, onExit }: SecurityUpdatesModuleProps) {
  const [acknowledgedUpdates, setAcknowledgedUpdates] = useState<number[]>([]);
  const [completedActions, setCompletedActions] = useState<number[]>([]);
  const [showBadge, setShowBadge] = useState(false);

  const globalThreats = [
    {
      id: 1,
      title: 'Ransomware Surge Targeting Healthcare',
      severity: 'critical',
      date: 'Oct 14, 2025',
      category: 'Malware',
      icon: AlertTriangle,
      summary: 'A new ransomware variant is actively targeting healthcare organizations worldwide. Enhanced monitoring and backup protocols recommended.',
      impact: 'High',
    },
    {
      id: 2,
      title: 'Phishing Campaign Using AI-Generated Content',
      severity: 'high',
      date: 'Oct 12, 2025',
      category: 'Phishing',
      icon: Globe,
      summary: 'Attackers are using AI to create highly convincing phishing emails. Extra vigilance required when reviewing email authenticity.',
      impact: 'Medium',
    },
    {
      id: 3,
      title: 'Zero-Day Vulnerability in Popular Browser',
      severity: 'high',
      date: 'Oct 10, 2025',
      category: 'Vulnerability',
      icon: Lock,
      summary: 'Critical security flaw discovered in browser software. Immediate patching required for all systems.',
      impact: 'High',
    },
  ];

  const internalBulletins = [
    {
      id: 1,
      title: 'MFA Enrollment Now Mandatory',
      date: 'Oct 13, 2025',
      priority: 'high',
      content: 'All employees must enable Multi-Factor Authentication (MFA) by October 31, 2025. This adds an essential layer of security to protect your account.',
      action: 'Enable MFA in your account settings',
    },
    {
      id: 2,
      title: 'Updated Password Policy Effective Nov 1',
      date: 'Oct 11, 2025',
      priority: 'medium',
      content: 'New password requirements: minimum 14 characters, including uppercase, lowercase, numbers, and symbols. Passwords must be changed every 120 days.',
      action: 'Update your password to meet new requirements',
    },
    {
      id: 3,
      title: 'Annual Security Training Completion',
      date: 'Oct 8, 2025',
      priority: 'medium',
      content: 'Complete your annual cybersecurity awareness training by October 31. This is required for all employees and contractors.',
      action: 'Complete training modules',
    },
  ];

  const requiredActions = [
    { id: 1, text: 'Enable Multi-Factor Authentication (MFA)', deadline: 'Oct 31, 2025' },
    { id: 2, text: 'Update password to meet new policy', deadline: 'Nov 1, 2025' },
    { id: 3, text: 'Complete annual security training', deadline: 'Oct 31, 2025' },
    { id: 4, text: 'Review and sign data handling policy', deadline: 'Oct 25, 2025' },
  ];

  const threatTrendData = [
    { month: 'May', threats: 145 },
    { month: 'Jun', threats: 178 },
    { month: 'Jul', threats: 156 },
    { month: 'Aug', threats: 203 },
    { month: 'Sep', threats: 234 },
    { month: 'Oct', threats: 267 },
  ];

  const handleAcknowledge = (id: number) => {
    if (!acknowledgedUpdates.includes(id)) {
      setAcknowledgedUpdates([...acknowledgedUpdates, id]);
    }
  };

  const handleActionComplete = (id: number) => {
    if (completedActions.includes(id)) {
      setCompletedActions(completedActions.filter((actionId) => actionId !== id));
    } else {
      setCompletedActions([...completedActions, id]);
      
      // Check if all actions are completed
      if (completedActions.length + 1 === requiredActions.length) {
        setTimeout(() => {
          setShowBadge(true);
          if (onComplete) onComplete();
        }, 500);
      }
    }
  };

  const getSeverityColor = (severity: string) => {
    const colors: Record<string, string> = {
      critical: 'bg-red-600',
      high: 'bg-orange-600',
      medium: 'bg-yellow-600',
      low: 'bg-blue-600',
    };
    return colors[severity] || 'bg-slate-600';
  };

  const viewedPercentage = (acknowledgedUpdates.length / (globalThreats.length + internalBulletins.length)) * 100;
  const actionsPercentage = (completedActions.length / requiredActions.length) * 100;

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-white text-4xl mb-2">Stay Informed. Stay Secure.</h1>
              <p className="text-slate-400 text-lg">Latest security updates and awareness briefings</p>
            </div>
            <Button onClick={onExit} variant="ghost" className="text-slate-400 hover:text-white">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Progress Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400">Updates Viewed</span>
                  <span className="text-teal-400">{acknowledgedUpdates.length} / {globalThreats.length + internalBulletins.length}</span>
                </div>
                <Progress value={viewedPercentage} className="h-2" />
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400">Actions Completed</span>
                  <span className="text-teal-400">{completedActions.length} / {requiredActions.length}</span>
                </div>
                <Progress value={actionsPercentage} className="h-2" />
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400">Security Score</span>
                  <span className="text-teal-400 text-2xl">
                    {Math.round((viewedPercentage + actionsPercentage) / 2)}%
                  </span>
                </div>
                <Progress value={(viewedPercentage + actionsPercentage) / 2} className="h-2" />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Global Threats */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-6 w-6 text-teal-500" />
                <h2 className="text-white text-2xl">Latest Global Threats</h2>
              </div>

              <div className="space-y-4">
                {globalThreats.map((threat) => {
                  const Icon = threat.icon;
                  const isAcknowledged = acknowledgedUpdates.includes(threat.id);

                  return (
                    <Card
                      key={threat.id}
                      className={`bg-slate-900 transition-all ${
                        isAcknowledged ? 'border-slate-700 opacity-75' : 'border-slate-800 hover:border-orange-600'
                      }`}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex gap-4 flex-1">
                            <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="h-6 w-6 text-orange-500" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2 flex-wrap">
                                <CardTitle className="text-white">{threat.title}</CardTitle>
                                <Badge className={`${getSeverityColor(threat.severity)} text-white`}>
                                  {threat.severity.toUpperCase()}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                                <span>{threat.date}</span>
                                <span>•</span>
                                <span>{threat.category}</span>
                                <span>•</span>
                                <span>Impact: {threat.impact}</span>
                              </div>
                              <CardDescription className="text-slate-300">
                                {threat.summary}
                              </CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-3">
                          <Button
                            onClick={() => handleAcknowledge(threat.id)}
                            disabled={isAcknowledged}
                            className={isAcknowledged ? 'bg-slate-700 text-slate-400' : 'bg-orange-600 hover:bg-orange-700 text-white'}
                          >
                            {isAcknowledged ? (
                              <>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Acknowledged
                              </>
                            ) : (
                              'Acknowledge Update'
                            )}
                          </Button>
                          <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                            Read More
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Threat Trends Chart */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-teal-500" />
                  Threat Trends (Last 6 Months)
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Global cybersecurity threat activity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={threatTrendData}>
                    <defs>
                      <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                      labelStyle={{ color: '#e2e8f0' }}
                    />
                    <Area type="monotone" dataKey="threats" stroke="#f97316" fill="url(#colorThreats)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Internal Bulletins */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-teal-500" />
                <h2 className="text-white text-2xl">Internal Security Bulletins</h2>
              </div>

              <div className="space-y-4">
                {internalBulletins.map((bulletin) => {
                  const isAcknowledged = acknowledgedUpdates.includes(bulletin.id + 100);

                  return (
                    <Card
                      key={bulletin.id}
                      className={`bg-slate-900 transition-all ${
                        isAcknowledged ? 'border-slate-700 opacity-75' : 'border-slate-800 hover:border-teal-600'
                      }`}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-white">{bulletin.title}</CardTitle>
                          <Badge className={bulletin.priority === 'high' ? 'bg-red-600 text-white' : 'bg-yellow-600 text-white'}>
                            {bulletin.priority.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-slate-400 text-sm">{bulletin.date}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-slate-300">{bulletin.content}</p>
                        
                        <div className="bg-teal-500/10 border border-teal-600 rounded-lg p-4">
                          <p className="text-teal-300 text-sm">
                            <strong>Required Action:</strong> {bulletin.action}
                          </p>
                        </div>

                        <Button
                          onClick={() => handleAcknowledge(bulletin.id + 100)}
                          disabled={isAcknowledged}
                          className={isAcknowledged ? 'bg-slate-700 text-slate-400' : 'bg-teal-600 hover:bg-teal-700 text-white'}
                        >
                          {isAcknowledged ? (
                            <>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Acknowledged
                            </>
                          ) : (
                            'Acknowledge Bulletin'
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Required Actions Checklist */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Required Actions</CardTitle>
                <CardDescription className="text-slate-400">
                  Complete these security tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {requiredActions.map((action) => {
                    const isCompleted = completedActions.includes(action.id);

                    return (
                      <div key={action.id} className="space-y-2">
                        <div className="flex items-start gap-3">
                          <Checkbox
                            id={`action-${action.id}`}
                            checked={isCompleted}
                            onCheckedChange={() => handleActionComplete(action.id)}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <label
                              htmlFor={`action-${action.id}`}
                              className={`cursor-pointer ${isCompleted ? 'text-slate-500 line-through' : 'text-slate-300'}`}
                            >
                              {action.text}
                            </label>
                            <p className="text-slate-500 text-xs mt-1">Due: {action.deadline}</p>
                          </div>
                        </div>
                        {action.id < requiredActions.length && <Separator className="bg-slate-800" />}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* AI Summary */}
            <Card className="bg-gradient-to-br from-teal-900 to-blue-900 border-teal-700">
              <CardHeader>
                <CardTitle className="text-white">AI Threat Summary</CardTitle>
                <CardDescription className="text-teal-200">
                  Key threats explained simply
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-teal-100 text-sm mb-4">
                  This month, cybercriminals are heavily targeting organizations with ransomware and AI-powered phishing. Stay vigilant when reviewing emails, enable MFA on all accounts, and report anything suspicious immediately.
                </p>
                <Button className="bg-white text-teal-900 hover:bg-teal-50 w-full">
                  View Full Analysis
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">This Week</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">New Threats</span>
                  <span className="text-orange-400 text-xl">12</span>
                </div>
                <Separator className="bg-slate-800" />
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Bulletins Posted</span>
                  <span className="text-teal-400 text-xl">3</span>
                </div>
                <Separator className="bg-slate-800" />
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Incidents Reported</span>
                  <span className="text-blue-400 text-xl">8</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Badge Reward Dialog */}
      <Dialog open={showBadge} onOpenChange={setShowBadge}>
        <DialogContent className="bg-slate-900 border-slate-800 text-center">
          <DialogHeader>
            <DialogTitle className="text-white text-2xl text-center">Outstanding! 🎉</DialogTitle>
            <DialogDescription className="text-slate-400 text-center">
              You've completed all required security actions
            </DialogDescription>
          </DialogHeader>
          <div className="py-8">
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', duration: 0.8 }}
              className="bg-gradient-to-br from-teal-400 to-blue-600 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl"
            >
              <Award className="h-16 w-16 text-white" />
            </motion.div>
            <h3 className="text-white text-xl mb-2">Security Sentinel Badge Earned!</h3>
            <p className="text-slate-400 mb-4">
              You're keeping our organization secure and informed
            </p>
            <Badge className="bg-teal-600 text-white text-lg px-6 py-2">
              Security Sentinel
            </Badge>
          </div>
          <Button onClick={() => { setShowBadge(false); if (onExit) onExit(); }} className="bg-teal-600 hover:bg-teal-700 text-white">
            Continue Learning
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
