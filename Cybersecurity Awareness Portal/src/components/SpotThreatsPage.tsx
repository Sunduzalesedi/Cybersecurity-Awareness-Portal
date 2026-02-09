import { Mail, AlertOctagon, Shield, AlertTriangle, CheckCircle, X, FileX, Server, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { useState } from 'react';

export function SpotThreatsPage() {
  const [showPhishingExample, setShowPhishingExample] = useState(false);
  const [showRansomwareExample, setShowRansomwareExample] = useState(false);

  const phishingExample = {
    from: 'security@paypa1-verify.com',
    subject: 'URGENT: Your Account Will Be Suspended!',
    body: `Dear Valued Customer,

We have detected unusual activity on your account. Your account will be SUSPENDED within 24 hours unless you verify your identity immediately.

Click here to verify: http://paypa1-verify.com/login

Failure to verify will result in permanent account closure.

Best regards,
PayPal Security Team`,
    warnings: [
      'Suspicious sender: "paypa1" with number 1 instead of letter l',
      'Creates urgency and fear',
      'Requests immediate action',
      'Suspicious link domain doesn\'t match PayPal',
      'Generic greeting instead of your name',
    ],
  };

  const ransomwareExample = {
    title: 'Real-Time System Monitoring',
    scenario: `You're working on your computer at 2:30 PM on a Tuesday when you notice unusual behavior:`,
    observations: [
      {
        warning: 'File extensions changing',
        description: 'Your recent Excel file "Q4_Report.xlsx" now shows as "Q4_Report.xlsx.locked"',
        severity: 'critical',
      },
      {
        warning: 'Unusual pop-up window',
        description: 'A window appeared saying "Oops, your files have been encrypted" with a countdown timer',
        severity: 'critical',
      },
      {
        warning: 'Cannot open files',
        description: 'When you try to open Word documents, you get "file is corrupted" errors',
        severity: 'critical',
      },
      {
        warning: 'High CPU usage',
        description: 'Task Manager shows CPU at 95% with unknown process "encrypt.exe" running',
        severity: 'high',
      },
      {
        warning: 'Desktop wallpaper changed',
        description: 'Your background changed to a red screen with payment instructions',
        severity: 'critical',
      },
      {
        warning: 'Network drives inaccessible',
        description: 'Shared company folders are showing "Access Denied" errors',
        severity: 'high',
      },
    ],
    immediateActions: [
      '1. STOP - Do not touch anything',
      '2. Disconnect network cable or turn off Wi-Fi immediately',
      '3. Leave your computer on - do NOT shut down',
      '4. Call IT Security: 1-800-SECURE-NOW',
      '5. Write down the time and what you observed',
      '6. Alert your supervisor and nearby colleagues',
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="bg-teal-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-teal-500" />
          </div>
          <h1 className="text-white text-4xl mb-4">Learn How to Spot Threats</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Master the art of identifying cybersecurity threats with real-world examples. Learn to recognize phishing emails and ransomware attacks before they cause damage.
          </p>
        </div>

        {/* Introduction */}
        <Card className="bg-slate-900 border-slate-800 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Why Threat Detection Matters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-300">
            <p>
              Cybercriminals constantly evolve their tactics to bypass security systems. The best defense is a well-trained workforce that can identify and report threats quickly. This page provides practical, real-world examples to help you recognize common attack patterns.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                <h3 className="text-white mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500" />
                  What You'll Learn
                </h3>
                <ul className="text-slate-400 text-sm space-y-2">
                  <li>• How to identify phishing emails</li>
                  <li>• Recognizing ransomware warning signs</li>
                  <li>• Immediate response actions</li>
                  <li>• Real-world attack scenarios</li>
                </ul>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                <h3 className="text-white mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  Key Principles
                </h3>
                <ul className="text-slate-400 text-sm space-y-2">
                  <li>• When in doubt, verify independently</li>
                  <li>• Never rush under pressure</li>
                  <li>• Report suspicious activity immediately</li>
                  <li>• Prevention is easier than recovery</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Phishing Email Example */}
        <Card className="bg-slate-900 border-slate-800 mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Mail className="h-6 w-6 text-orange-500" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-white">Phishing Email Example</CardTitle>
                <CardDescription className="text-slate-400">
                  Learn to identify suspicious emails and avoid falling victim to phishing attacks
                </CardDescription>
              </div>
              <Badge className="bg-yellow-600 text-white">Common Threat</Badge>
            </div>
          </CardHeader>
          <CardContent>
            {!showPhishingExample ? (
              <div className="text-center py-8">
                <p className="text-slate-400 mb-4">
                  Study a realistic phishing email and learn to recognize the warning signs
                </p>
                <Button
                  onClick={() => setShowPhishingExample(true)}
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                  View Phishing Example
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <Alert className="bg-orange-500/10 border-orange-600">
                  <AlertTriangle className="h-4 w-4 text-orange-500" />
                  <AlertDescription className="text-orange-200">
                    <strong>Warning:</strong> This is a fake phishing email for educational purposes only.
                  </AlertDescription>
                </Alert>

                {/* YouTube Video */}
                <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                  <h4 className="text-white mb-3">📹 Watch: Real Phishing Attack Example</h4>
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/Yz0PnAkeRiI"
                      title="Phishing Attack Example"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="bg-slate-800 rounded-lg p-6 border-2 border-orange-500/50">
                  <div className="space-y-3 mb-4 pb-4 border-b border-slate-700">
                    <div className="flex gap-2">
                      <span className="text-slate-500 w-20">From:</span>
                      <span className="text-white">{phishingExample.from}</span>
                      <Badge className="bg-orange-600 text-white ml-2">Suspicious!</Badge>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-slate-500 w-20">Subject:</span>
                      <span className="text-white">{phishingExample.subject}</span>
                    </div>
                  </div>
                  <div className="text-slate-300 whitespace-pre-line">
                    {phishingExample.body}
                  </div>
                </div>

                <div>
                  <h4 className="text-white mb-3">🚨 Red Flags Detected:</h4>
                  <div className="space-y-2">
                    {phishingExample.warnings.map((warning, index) => (
                      <div key={index} className="flex items-start gap-3 text-orange-300 bg-orange-500/10 p-3 rounded-lg">
                        <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>{warning}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Alert className="bg-teal-500/10 border-teal-600">
                  <CheckCircle className="h-4 w-4 text-teal-500" />
                  <AlertDescription className="text-teal-200">
                    <strong>What to do:</strong> Never click suspicious links. Verify by contacting PayPal directly through their official website or customer service number, not through email links.
                  </AlertDescription>
                </Alert>

                <div className="flex justify-center pt-4">
                  <Button
                    onClick={() => setShowPhishingExample(false)}
                    variant="outline"
                    className="border-slate-700 text-black hover:bg-slate-800 hover:text-white"
                  >
                    Hide Example
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Ransomware Attack Example */}
        <Card className="bg-slate-900 border-slate-800 mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <AlertOctagon className="h-6 w-6 text-red-500" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-white">Spotting a Ransomware Attack</CardTitle>
                <CardDescription className="text-slate-400">
                  Recognize the early warning signs of ransomware to respond quickly and minimize damage
                </CardDescription>
              </div>
              <Badge className="bg-red-600 text-white">Critical Threat</Badge>
            </div>
          </CardHeader>
          <CardContent>
            {!showRansomwareExample ? (
              <div className="text-center py-8">
                <p className="text-slate-400 mb-4">
                  Learn to identify ransomware warning signs and take immediate action
                </p>
                <Button
                  onClick={() => setShowRansomwareExample(true)}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  View Ransomware Example
                </Button>
              </div>
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
                    <div className="bg-orange-500/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <Server className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-white">{ransomwareExample.title}</h4>
                      <Badge className="bg-orange-600 text-white mt-1">Active Threat Detection</Badge>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-6">{ransomwareExample.scenario}</p>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-white flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                      Warning Signs Detected:
                    </h4>
                    {ransomwareExample.observations.map((obs, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border-2 ${
                          obs.severity === 'critical'
                            ? 'bg-red-500/10 border-red-500'
                            : 'bg-orange-500/10 border-orange-500'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`${
                            obs.severity === 'critical' ? 'bg-red-500' : 'bg-orange-500'
                          } text-white text-xs px-2 py-1 rounded flex-shrink-0 mt-0.5`}>
                            {obs.severity === 'critical' ? 'CRITICAL' : 'HIGH'}
                          </div>
                          <div className="flex-1">
                            <h5 className={`${
                              obs.severity === 'critical' ? 'text-red-300' : 'text-orange-300'
                            } mb-1`}>
                              🚨 {obs.warning}
                            </h5>
                            <p className="text-slate-300 text-sm">{obs.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Alert className="bg-red-500/10 border-red-600 mb-4">
                    <AlertOctagon className="h-4 w-4 text-red-500" />
                    <AlertDescription className="text-red-200">
                      <strong>Multiple critical indicators detected!</strong> This is likely an active ransomware attack.
                    </AlertDescription>
                  </Alert>

                  <div className="bg-green-500/10 border-2 border-green-500 rounded-lg p-4">
                    <h4 className="text-green-400 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Immediate Response Actions:
                    </h4>
                    <div className="space-y-2">
                      {ransomwareExample.immediateActions.map((action, index) => (
                        <div key={index} className="text-green-300 flex items-start gap-3">
                          <div className="bg-green-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <span>{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Alert className="bg-yellow-500/10 border-yellow-600">
                  <Phone className="h-4 w-4 text-yellow-500" />
                  <AlertDescription className="text-yellow-200">
                    <strong>Time is Critical:</strong> Every second counts. The faster you respond, the less damage occurs. Call IT Security immediately: <span className="text-yellow-400">1-800-SECURE-NOW</span>
                  </AlertDescription>
                </Alert>

                <div className="flex justify-center pt-4">
                  <Button
                    onClick={() => setShowRansomwareExample(false)}
                    variant="outline"
                    className="border-slate-700 text-black hover:bg-slate-800 hover:text-white"
                  >
                    Hide Example
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Tips */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Mail className="h-5 w-5 text-yellow-500" />
                Phishing Red Flags
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Urgent or threatening language</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Requests for personal information</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Suspicious sender addresses</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Unexpected attachments or links</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Poor grammar and spelling errors</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <FileX className="h-5 w-5 text-red-500" />
                Ransomware Warning Signs
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Files suddenly inaccessible</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Strange file extensions appear</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Pop-ups demanding payment</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Unusual CPU or network activity</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Desktop wallpaper changed</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
