import { Shield, Mail, Lock, Database, Award, Trophy, Medal, BookOpen, Clock, CheckCircle, Play } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';

interface TrainingPageProps {
  onStartModule?: (moduleId: string) => void;
}

export function TrainingPage({ onStartModule }: TrainingPageProps) {
  const modules = [
    {
      id: 1,
      title: 'Phishing Awareness',
      description: 'Learn to identify malicious emails, fake links, and social engineering tactics.',
      icon: Mail,
      color: 'yellow',
      progress: 65,
      duration: '45 min',
      status: 'In Progress',
      moduleId: 'phishing',
      interactive: true,
    },
    {
      id: 2,
      title: 'Ransomware Response',
      description: 'Understand ransomware attacks and proper response procedures to minimize damage.',
      icon: Lock,
      color: 'red',
      progress: 0,
      duration: '60 min',
      status: 'Not Started',
      moduleId: 'ransomware',
      interactive: true,
    },
    {
      id: 3,
      title: 'Incident Reporting Training',
      description: 'Learn the step-by-step process for reporting security incidents effectively.',
      icon: Shield,
      color: 'teal',
      progress: 0,
      duration: '30 min',
      status: 'Not Started',
      moduleId: 'incident-reporting',
      interactive: true,
    },
    {
      id: 4,
      title: 'Security Updates & Awareness',
      description: 'Stay informed about latest threats, bulletins, and required security actions.',
      icon: Database,
      color: 'blue',
      progress: 30,
      duration: '50 min',
      status: 'In Progress',
      moduleId: 'security-updates',
      interactive: true,
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'Sarah Chen', department: 'Engineering', score: 2850, badge: 'gold' },
    { rank: 2, name: 'Michael Torres', department: 'Marketing', score: 2720, badge: 'silver' },
    { rank: 3, name: 'Emily Watson', department: 'Finance', score: 2680, badge: 'bronze' },
    { rank: 4, name: 'David Kim', department: 'HR', score: 2540, badge: null },
    { rank: 5, name: 'Lisa Anderson', department: 'Operations', score: 2490, badge: null },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; icon: string }> = {
      yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-500', icon: 'text-yellow-500' },
      red: { bg: 'bg-red-500/10', text: 'text-red-500', icon: 'text-red-500' },
      teal: { bg: 'bg-teal-500/10', text: 'text-teal-500', icon: 'text-teal-500' },
      blue: { bg: 'bg-blue-500/10', text: 'text-blue-500', icon: 'text-blue-500' },
    };
    return colors[color] || colors.teal;
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-white text-4xl mb-4">Cybersecurity Training Center</h1>
          <p className="text-slate-400 text-lg">
            Enhance your security skills with interactive modules and earn badges as you progress.
          </p>
        </div>

        {/* Tabs for Navigation */}
        <Tabs defaultValue="courses" className="mb-8">
          <TabsList className="bg-slate-900 border border-slate-800">
            <TabsTrigger value="courses" className="data-[state=active]:bg-teal-600">
              All Courses
            </TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-teal-600">
              Completed
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-teal-600">
              Upcoming Sessions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="mt-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Training Modules */}
              <div className="lg:col-span-2 space-y-6">
                {modules.map((module) => {
                  const Icon = module.icon;
                  const colors = getColorClasses(module.color);

                  return (
                    <Card
                      key={module.id}
                      className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex gap-4">
                            <div className={`${colors.bg} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0`}>
                              <Icon className={`h-7 w-7 ${colors.icon}`} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <CardTitle className="text-white">{module.title}</CardTitle>
                                <Badge
                                  variant={module.status === 'Completed' ? 'default' : 'outline'}
                                  className={
                                    module.status === 'Completed'
                                      ? 'bg-teal-600 text-white'
                                      : 'border-slate-700 text-slate-400'
                                  }
                                >
                                  {module.status}
                                </Badge>
                              </div>
                              <CardDescription className="text-slate-400">
                                {module.description}
                              </CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {/* Progress */}
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-slate-400">Progress</span>
                              <span className="text-teal-400">{module.progress}%</span>
                            </div>
                            <Progress value={module.progress} className="h-2" />
                          </div>

                          {/* Meta Info */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                              <Clock className="h-4 w-4" />
                              <span>{module.duration}</span>
                              {module.interactive && (
                                <>
                                  <span>•</span>
                                  <Badge className="bg-teal-600 text-white text-xs">Interactive</Badge>
                                </>
                              )}
                            </div>
                            <Button
                              onClick={() => module.interactive && onStartModule?.(module.moduleId)}
                              className={
                                module.status === 'Completed'
                                  ? 'bg-slate-800 hover:bg-slate-700 text-white'
                                  : 'bg-teal-600 hover:bg-teal-700 text-white'
                              }
                            >
                              {module.interactive && <Play className="mr-2 h-4 w-4" />}
                              {module.status === 'Completed' ? 'Review Module' : 'Start Module'}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Leaderboard Sidebar */}
              <div className="space-y-6">
                <Card className="bg-slate-900 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-yellow-500" />
                      Top Learners
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      This month's security champions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {leaderboard.map((user) => (
                        <div
                          key={user.rank}
                          className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-slate-300 flex-shrink-0">
                            {user.badge === 'gold' && <Medal className="h-5 w-5 text-yellow-500" />}
                            {user.badge === 'silver' && <Medal className="h-5 w-5 text-slate-400" />}
                            {user.badge === 'bronze' && <Medal className="h-5 w-5 text-orange-600" />}
                            {!user.badge && <span className="text-sm">{user.rank}</span>}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white text-sm truncate">{user.name}</div>
                            <div className="text-slate-500 text-xs">{user.department}</div>
                          </div>
                          <div className="text-teal-400">{user.score}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Your Badges */}
                <Card className="bg-slate-900 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Award className="h-5 w-5 text-teal-500" />
                      Your Badges
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-slate-800/50">
                        <div className="bg-teal-500/10 w-12 h-12 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-6 w-6 text-teal-500" />
                        </div>
                        <span className="text-xs text-slate-400 text-center">Phishing Expert</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-slate-800/50">
                        <div className="bg-blue-500/10 w-12 h-12 rounded-full flex items-center justify-center">
                          <Shield className="h-6 w-6 text-blue-500" />
                        </div>
                        <span className="text-xs text-slate-400 text-center">Security Pro</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-slate-800/30 opacity-50">
                        <div className="bg-slate-700 w-12 h-12 rounded-full flex items-center justify-center">
                          <Lock className="h-6 w-6 text-slate-600" />
                        </div>
                        <span className="text-xs text-slate-500 text-center">Locked</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-8">
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-slate-700 mx-auto mb-4" />
              <h3 className="text-white text-xl mb-2">1 Module Completed</h3>
              <p className="text-slate-400">Keep up the great work on your security training!</p>
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="mt-8">
            <div className="text-center py-12">
              <Clock className="h-16 w-16 text-slate-700 mx-auto mb-4" />
              <h3 className="text-white text-xl mb-2">No Upcoming Sessions</h3>
              <p className="text-slate-400">Check back later for scheduled training events.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
