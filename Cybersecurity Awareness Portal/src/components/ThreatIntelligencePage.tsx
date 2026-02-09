import { AlertTriangle, TrendingUp, Globe, Filter, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function ThreatIntelligencePage() {
  const alerts = [
    {
      id: 1,
      title: 'Critical: Zero-Day Vulnerability in Email Client',
      severity: 'critical',
      time: '12 minutes ago',
      region: 'Global',
      type: 'Vulnerability',
    },
    {
      id: 2,
      title: 'High: Phishing Campaign Targeting Financial Sector',
      severity: 'high',
      time: '1 hour ago',
      region: 'North America',
      type: 'Phishing',
    },
    {
      id: 3,
      title: 'Medium: Suspicious Login Attempts Detected',
      severity: 'medium',
      time: '2 hours ago',
      region: 'Asia Pacific',
      type: 'Authentication',
    },
    {
      id: 4,
      title: 'High: Ransomware Activity Surge',
      severity: 'high',
      time: '3 hours ago',
      region: 'Europe',
      type: 'Malware',
    },
    {
      id: 5,
      title: 'Low: Outdated Software Detected on 15 Devices',
      severity: 'low',
      time: '5 hours ago',
      region: 'Internal',
      type: 'Compliance',
    },
  ];

  const weeklyData = [
    { day: 'Mon', threats: 45, blocked: 43, incidents: 2 },
    { day: 'Tue', threats: 52, blocked: 50, incidents: 2 },
    { day: 'Wed', threats: 38, blocked: 36, incidents: 2 },
    { day: 'Thu', threats: 61, blocked: 58, incidents: 3 },
    { day: 'Fri', threats: 71, blocked: 67, incidents: 4 },
    { day: 'Sat', threats: 28, blocked: 27, incidents: 1 },
    { day: 'Sun', threats: 22, blocked: 22, incidents: 0 },
  ];

  const threatTypeData = [
    { type: 'Phishing', count: 145 },
    { type: 'Malware', count: 89 },
    { type: 'Ransomware', count: 34 },
    { type: 'DDoS', count: 23 },
    { type: 'Other', count: 56 },
  ];

  const getSeverityColor = (severity: string) => {
    const colors: Record<string, string> = {
      critical: 'bg-red-600 text-white',
      high: 'bg-orange-600 text-white',
      medium: 'bg-yellow-600 text-white',
      low: 'bg-blue-600 text-white',
    };
    return colors[severity] || 'bg-slate-600 text-white';
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-white text-4xl mb-2">Real-Time Threats & Alerts</h1>
            <p className="text-slate-400">Monitor global cybersecurity threats and organizational security status</p>
          </div>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Data
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-3">
              <CardDescription className="text-slate-400">Active Threats</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white">247</div>
              <div className="flex items-center gap-1 text-red-500 text-sm mt-1">
                <TrendingUp className="h-4 w-4" />
                <span>+12% from last week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-3">
              <CardDescription className="text-slate-400">Threats Blocked</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white">2,341</div>
              <div className="flex items-center gap-1 text-teal-500 text-sm mt-1">
                <TrendingUp className="h-4 w-4" />
                <span>98.3% success rate</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-3">
              <CardDescription className="text-slate-400">Open Incidents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white">14</div>
              <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                <AlertTriangle className="h-4 w-4" />
                <span>3 critical priority</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-3">
              <CardDescription className="text-slate-400">Avg Response Time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white">4.2m</div>
              <div className="flex items-center gap-1 text-teal-500 text-sm mt-1">
                <TrendingUp className="h-4 w-4 rotate-180" />
                <span>-18% improvement</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Threat Map */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Globe className="h-5 w-5 text-teal-500" />
                  Global Threat Activity
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Real-time visualization of cyberattack trends worldwide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative rounded-lg overflow-hidden bg-slate-800/50 p-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1760275496880-98960e20e44b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwNTExODgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Global Threat Map"
                    className="w-full h-64 object-cover rounded opacity-60"
                  />
                  <div className="absolute top-8 left-8 bg-red-600 w-3 h-3 rounded-full animate-pulse"></div>
                  <div className="absolute top-16 right-20 bg-yellow-600 w-2 h-2 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-16 left-24 bg-orange-600 w-4 h-4 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-20 right-16 bg-red-600 w-3 h-3 rounded-full animate-pulse"></div>
                </div>
                <div className="flex gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <span className="text-slate-400">Critical</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                    <span className="text-slate-400">High</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
                    <span className="text-slate-400">Medium</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Statistics */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Weekly Threat Statistics</CardTitle>
                <CardDescription className="text-slate-400">
                  Threats detected vs. blocked over the past 7 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={weeklyData}>
                    <defs>
                      <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorBlocked" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="day" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                      labelStyle={{ color: '#e2e8f0' }}
                    />
                    <Legend />
                    <Area type="monotone" dataKey="threats" stroke="#ef4444" fill="url(#colorThreats)" name="Threats Detected" />
                    <Area type="monotone" dataKey="blocked" stroke="#14b8a6" fill="url(#colorBlocked)" name="Blocked" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Threat Types */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Threat Types Distribution</CardTitle>
                <CardDescription className="text-slate-400">
                  Breakdown of detected threat categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={threatTypeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="type" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                      labelStyle={{ color: '#e2e8f0' }}
                    />
                    <Bar dataKey="count" fill="#14b8a6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Filters */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Filter className="h-5 w-5 text-teal-500" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Region</label>
                  <Select defaultValue="all">
                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Regions</SelectItem>
                      <SelectItem value="na">North America</SelectItem>
                      <SelectItem value="eu">Europe</SelectItem>
                      <SelectItem value="ap">Asia Pacific</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Threat Type</label>
                  <Select defaultValue="all">
                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="phishing">Phishing</SelectItem>
                      <SelectItem value="malware">Malware</SelectItem>
                      <SelectItem value="ransomware">Ransomware</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Severity</label>
                  <Select defaultValue="all">
                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Severities</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Live Alerts Feed */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Live Alerts</CardTitle>
                <CardDescription className="text-slate-400">
                  Recent threat notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {alerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors cursor-pointer border border-slate-700"
                    >
                      <div className="flex items-start gap-2 mb-2">
                        <Badge className={`${getSeverityColor(alert.severity)} text-xs`}>
                          {alert.severity.toUpperCase()}
                        </Badge>
                        <span className="text-xs text-slate-500">{alert.time}</span>
                      </div>
                      <p className="text-white text-sm mb-2">{alert.title}</p>
                      <div className="flex gap-2 text-xs">
                        <span className="text-slate-500">{alert.region}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-500">{alert.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
