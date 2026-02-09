import { Shield, AlertTriangle, Phone, FileText, CheckCircle, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface IncidentResponseQuickGuideProps {
  onClose?: () => void;
}

export function IncidentResponseQuickGuide({ onClose }: IncidentResponseQuickGuideProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 print:mb-4">
          <div className="flex items-center gap-4">
            <div className="bg-red-500/10 w-16 h-16 rounded-2xl flex items-center justify-center print:w-12 print:h-12">
              <Shield className="h-8 w-8 text-red-500 print:h-6 print:w-6" />
            </div>
            <div>
              <h1 className="text-white text-3xl print:text-2xl">Incident Response Quick Guide</h1>
              <p className="text-slate-400 print:text-sm">Immediate Action Steps During Security Incidents</p>
            </div>
          </div>
          <div className="flex gap-2 print:hidden">
            <Button onClick={handlePrint} variant="outline" className="border-slate-700 text-slate-300">
              <FileText className="mr-2 h-4 w-4" />
              Print/Save
            </Button>
            {onClose && (
              <Button onClick={onClose} variant="ghost" size="icon" className="text-slate-400">
                <X className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>

        {/* Emergency Contact */}
        <Card className="bg-red-900/20 border-red-700 mb-6 print:mb-4">
          <CardContent className="p-6 print:p-4">
            <div className="flex items-center gap-3 mb-3">
              <Phone className="h-6 w-6 text-red-500" />
              <h2 className="text-white text-xl print:text-lg">Emergency Security Hotline</h2>
            </div>
            <p className="text-red-200 text-2xl print:text-xl">1-800-SECURE-NOW (24/7)</p>
            <p className="text-red-300 text-sm mt-2">Email: security@company.com</p>
          </CardContent>
        </Card>

        {/* Step-by-Step Response */}
        <div className="space-y-4 print:space-y-3">
          <h2 className="text-white text-2xl mb-4 print:text-xl print:mb-3">Immediate Response Steps</h2>

          <Card className="bg-slate-900 border-slate-800 print:border-slate-700">
            <CardHeader className="pb-3 print:pb-2">
              <div className="flex items-start gap-3">
                <Badge className="bg-red-600 text-white text-lg w-10 h-10 flex items-center justify-center rounded-full print:w-8 print:h-8 print:text-base">1</Badge>
                <div className="flex-1">
                  <CardTitle className="text-white print:text-base">STOP & ASSESS</CardTitle>
                  <p className="text-slate-400 text-sm mt-1">Don't panic. Evaluate the situation carefully.</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="print:text-sm">
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Stay calm and do not take any hasty actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Note the time and what you observed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Do NOT attempt to investigate on your own</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800 print:border-slate-700">
            <CardHeader className="pb-3 print:pb-2">
              <div className="flex items-start gap-3">
                <Badge className="bg-red-600 text-white text-lg w-10 h-10 flex items-center justify-center rounded-full print:w-8 print:h-8 print:text-base">2</Badge>
                <div className="flex-1">
                  <CardTitle className="text-white print:text-base">DISCONNECT & ISOLATE</CardTitle>
                  <p className="text-slate-400 text-sm mt-1">Prevent further damage or spread.</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="print:text-sm">
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Disconnect affected device from network (Wi-Fi/Ethernet)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Do NOT shut down the computer (preserves evidence)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Take photos of screen if possible</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800 print:border-slate-700">
            <CardHeader className="pb-3 print:pb-2">
              <div className="flex items-start gap-3">
                <Badge className="bg-red-600 text-white text-lg w-10 h-10 flex items-center justify-center rounded-full print:w-8 print:h-8 print:text-base">3</Badge>
                <div className="flex-1">
                  <CardTitle className="text-white print:text-base">REPORT IMMEDIATELY</CardTitle>
                  <p className="text-slate-400 text-sm mt-1">Contact the security team right away.</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="print:text-sm">
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Call Security Hotline: 1-800-SECURE-NOW</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Email incident report to security@company.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Notify your immediate supervisor</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800 print:border-slate-700">
            <CardHeader className="pb-3 print:pb-2">
              <div className="flex items-start gap-3">
                <Badge className="bg-red-600 text-white text-lg w-10 h-10 flex items-center justify-center rounded-full print:w-8 print:h-8 print:text-base">4</Badge>
                <div className="flex-1">
                  <CardTitle className="text-white print:text-base">DOCUMENT EVERYTHING</CardTitle>
                  <p className="text-slate-400 text-sm mt-1">Preserve all evidence for investigation.</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="print:text-sm">
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Write down exactly what happened (who, what, when, where)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Save any suspicious emails, messages, or files</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Record all actions you took</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800 print:border-slate-700">
            <CardHeader className="pb-3 print:pb-2">
              <div className="flex items-start gap-3">
                <Badge className="bg-red-600 text-white text-lg w-10 h-10 flex items-center justify-center rounded-full print:w-8 print:h-8 print:text-base">5</Badge>
                <div className="flex-1">
                  <CardTitle className="text-white print:text-base">COOPERATE & FOLLOW UP</CardTitle>
                  <p className="text-slate-400 text-sm mt-1">Work with security team until resolved.</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="print:text-sm">
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Follow instructions from security team</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Provide any requested information promptly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Wait for all-clear before resuming normal operations</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Common Incident Types */}
        <div className="mt-8 print:mt-4">
          <h2 className="text-white text-2xl mb-4 print:text-xl print:mb-3">Common Incident Types</h2>
          <div className="grid md:grid-cols-2 gap-4 print:gap-3">
            <Card className="bg-slate-900 border-slate-800 print:border-slate-700">
              <CardContent className="p-4 print:p-3">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-white mb-1 print:text-sm">Phishing Email</h3>
                    <p className="text-slate-400 text-sm print:text-xs">Do not click links or download attachments. Forward to security@company.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 print:border-slate-700">
              <CardContent className="p-4 print:p-3">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-white mb-1 print:text-sm">Ransomware</h3>
                    <p className="text-slate-400 text-sm print:text-xs">Disconnect immediately. Do NOT pay ransom. Call security hotline.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 print:border-slate-700">
              <CardContent className="p-4 print:p-3">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-white mb-1 print:text-sm">Lost/Stolen Device</h3>
                    <p className="text-slate-400 text-sm print:text-xs">Report within 1 hour. Device will be remotely wiped to protect data.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 print:border-slate-700">
              <CardContent className="p-4 print:p-3">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-white mb-1 print:text-sm">Data Breach</h3>
                    <p className="text-slate-400 text-sm print:text-xs">Report any unauthorized access to data. Preserve all evidence.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 p-4 bg-slate-900 border border-slate-800 rounded-lg text-center print:mt-4 print:p-3">
          <p className="text-slate-400 text-sm print:text-xs">
            SecureGuard Portal • Version 2025.1 • Last Updated: January 2025
          </p>
        </div>
      </div>
    </div>
  );
}
