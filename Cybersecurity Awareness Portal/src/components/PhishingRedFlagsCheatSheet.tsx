import { Mail, AlertTriangle, X, CheckCircle, Shield, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface PhishingRedFlagsCheatSheetProps {
  onClose?: () => void;
}

export function PhishingRedFlagsCheatSheet({ onClose }: PhishingRedFlagsCheatSheetProps) {
  const handlePrint = () => {
    window.print();
  };

  const redFlags = [
    {
      category: 'Sender Information',
      color: 'red',
      flags: [
        'Email from unknown or suspicious sender',
        'Sender email doesn\'t match company domain',
        'Slight misspellings in domain (microsft.com vs microsoft.com)',
        'Generic greetings like "Dear Customer" instead of your name',
      ],
    },
    {
      category: 'Message Content',
      color: 'orange',
      flags: [
        'Urgency or threats ("Act now!" "Account will be suspended!")',
        'Requests for sensitive information (password, SSN, credit card)',
        'Too good to be true offers (lottery wins, inheritances)',
        'Poor grammar and spelling errors',
      ],
    },
    {
      category: 'Links & Attachments',
      color: 'yellow',
      flags: [
        'Suspicious links (hover to see real URL)',
        'Shortened URLs (bit.ly, tinyurl) from unknown sources',
        'Unexpected attachments, especially .exe, .zip files',
        'Links that don\'t match the sender\'s organization',
      ],
    },
    {
      category: 'Request Type',
      color: 'purple',
      flags: [
        'Asks you to update/verify account information',
        'Requests you to click a link to resolve an issue',
        'Asks for immediate action or decision',
        'Requests to bypass normal security procedures',
      ],
    },
  ];

  const safeActions = [
    'Verify sender through official channels',
    'Hover over links to check real URL',
    'Forward suspicious email to security@company.com',
    'Delete email without clicking anything',
    'Report through portal\'s Report Incident button',
    'Contact sender via known phone number (not one in email)',
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 print:mb-4">
          <div className="flex items-center gap-4">
            <div className="bg-orange-500/10 w-16 h-16 rounded-2xl flex items-center justify-center print:w-12 print:h-12">
              <Mail className="h-8 w-8 text-orange-500 print:h-6 print:w-6" />
            </div>
            <div>
              <h1 className="text-white text-3xl print:text-2xl">Phishing Red Flags Cheat Sheet</h1>
              <p className="text-slate-400 print:text-sm">Quick Reference for Identifying Phishing Emails</p>
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

        {/* Key Rule */}
        <Card className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border-orange-700 mb-6 print:mb-4">
          <CardContent className="p-6 print:p-4">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="h-8 w-8 text-orange-500" />
              <h2 className="text-white text-2xl print:text-xl">Golden Rule: When in Doubt, Don't Click!</h2>
            </div>
            <p className="text-orange-100 text-lg print:text-base">
              It's better to verify through official channels than to risk a security breach.
            </p>
          </CardContent>
        </Card>

        {/* Red Flags by Category */}
        <div className="space-y-6 mb-8 print:space-y-4 print:mb-4">
          <h2 className="text-white text-2xl print:text-xl">Warning Signs to Watch For</h2>
          
          {redFlags.map((category, index) => (
            <Card key={index} className="bg-slate-900 border-slate-800 print:border-slate-700">
              <CardHeader className="pb-3 print:pb-2">
                <div className="flex items-center gap-3">
                  <AlertTriangle className={`h-6 w-6 text-${category.color}-500`} />
                  <CardTitle className="text-white print:text-base">{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 print:space-y-1">
                  {category.flags.map((flag, flagIndex) => (
                    <li key={flagIndex} className="flex items-start gap-2 text-slate-300 print:text-sm">
                      <X className={`h-5 w-5 text-${category.color}-500 flex-shrink-0 mt-0.5`} />
                      <span>{flag}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Example Phishing Email */}
        <div className="mb-8 print:mb-4">
          <h2 className="text-white text-2xl mb-4 print:text-xl print:mb-3">Example: Spot the Red Flags</h2>
          <Card className="bg-slate-900 border-red-700">
            <CardHeader className="bg-slate-800 print:bg-slate-900">
              <div className="space-y-2 print:space-y-1">
                <div className="flex items-center gap-2 text-sm text-slate-400 print:text-xs">
                  <span className="text-red-500">⚠️ From:</span>
                  <span>security@amaz0n-verify.com</span>
                  <Badge className="bg-red-600 text-white print:text-xs">SUSPICIOUS DOMAIN</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400 print:text-xs">
                  <span>Subject:</span>
                  <span className="text-red-400">URGENT: Your Account Will Be Suspended!</span>
                  <Badge className="bg-orange-600 text-white print:text-xs">URGENCY TACTIC</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 print:p-4">
              <div className="space-y-3 print:space-y-2 text-slate-300 print:text-sm">
                <p>Dear Valued Customer,</p>
                <p className="text-red-400">
                  <Badge className="bg-yellow-600 text-white mr-2 print:text-xs">GENERIC GREETING</Badge>
                  We have detected suspicious activity on your account.
                </p>
                <p>
                  <Badge className="bg-red-600 text-white mr-2 print:text-xs">REQUESTS INFO</Badge>
                  Please click the link below to verify your information immediately:
                </p>
                <div className="bg-slate-800 p-3 rounded print:p-2">
                  <a className="text-blue-400 underline break-all print:text-xs">
                    http://amaz0n-verify.suspicious-site.ru/login
                  </a>
                  <Badge className="bg-red-600 text-white ml-2 print:text-xs">FAKE URL</Badge>
                </div>
                <p className="text-orange-400">
                  <Badge className="bg-orange-600 text-white mr-2 print:text-xs">THREAT</Badge>
                  If you do not respond within 24 hours, your account will be permanently closed.
                </p>
                <p className="text-slate-500 text-sm print:text-xs">
                  <Badge className="bg-yellow-600 text-white mr-2 print:text-xs">POOR GRAMMAR</Badge>
                  Thanking you for your cooperation in this matters.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Safe Actions */}
        <div className="mb-8 print:mb-4">
          <h2 className="text-white text-2xl mb-4 print:text-xl print:mb-3">What To Do If You Suspect Phishing</h2>
          <Card className="bg-slate-900 border-teal-700">
            <CardContent className="p-6 print:p-4">
              <ul className="space-y-3 print:space-y-2">
                {safeActions.map((action, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300 print:text-sm">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-8 print:grid-cols-3 print:gap-3 print:mb-4">
          <Card className="bg-slate-900 border-slate-800 text-center print:border-slate-700">
            <CardContent className="p-6 print:p-3">
              <div className="text-3xl text-red-500 mb-2 print:text-2xl">90%</div>
              <p className="text-slate-400 text-sm print:text-xs">of data breaches start with phishing</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900 border-slate-800 text-center print:border-slate-700">
            <CardContent className="p-6 print:p-3">
              <div className="text-3xl text-orange-500 mb-2 print:text-2xl">15M+</div>
              <p className="text-slate-400 text-sm print:text-xs">phishing emails sent daily</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900 border-slate-800 text-center print:border-slate-700">
            <CardContent className="p-6 print:p-3">
              <div className="text-3xl text-teal-500 mb-2 print:text-2xl">3 sec</div>
              <p className="text-slate-400 text-sm print:text-xs">average time to verify an email</p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-center print:p-3">
          <p className="text-slate-400 text-sm print:text-xs">
            SecureGuard Portal • Phishing Awareness Campaign 2025
          </p>
        </div>
      </div>
    </div>
  );
}
