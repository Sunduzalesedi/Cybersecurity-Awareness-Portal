import { Lock, X, CheckCircle, AlertTriangle, Shield, FileText, Key } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface PasswordSecurityCheatSheetProps {
  onClose?: () => void;
}

export function PasswordSecurityCheatSheet({ onClose }: PasswordSecurityCheatSheetProps) {
  const handlePrint = () => {
    window.print();
  };

  const goodPractices = [
    {
      title: 'Use 12+ Characters',
      description: 'Longer passwords are exponentially harder to crack',
      icon: CheckCircle,
    },
    {
      title: 'Mix Character Types',
      description: 'Uppercase, lowercase, numbers, and symbols',
      icon: CheckCircle,
    },
    {
      title: 'Use Passphrases',
      description: 'e.g., "Coffee@Sunrise#Mountain2025"',
      icon: CheckCircle,
    },
    {
      title: 'Enable 2FA/MFA',
      description: 'Add an extra layer of security beyond passwords',
      icon: CheckCircle,
    },
    {
      title: 'Use Password Manager',
      description: 'Securely store and generate unique passwords',
      icon: CheckCircle,
    },
    {
      title: 'Change Compromised Passwords',
      description: 'Update immediately if account may be breached',
      icon: CheckCircle,
    },
  ];

  const badPractices = [
    {
      title: 'Short Passwords',
      description: 'Less than 8 characters (easily cracked)',
      example: 'pass123',
    },
    {
      title: 'Personal Information',
      description: 'Names, birthdays, addresses',
      example: 'john1990',
    },
    {
      title: 'Common Words',
      description: 'Dictionary words, keyboard patterns',
      example: 'password, qwerty',
    },
    {
      title: 'Password Reuse',
      description: 'Using same password across multiple sites',
      example: 'Same for email, bank, social media',
    },
    {
      title: 'Sequential Characters',
      description: 'Predictable patterns',
      example: '12345678, abcdefgh',
    },
    {
      title: 'Sharing Passwords',
      description: 'Never share via email, chat, or phone',
      example: 'Sent in plaintext message',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 print:mb-4">
          <div className="flex items-center gap-4">
            <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center print:w-12 print:h-12">
              <Lock className="h-8 w-8 text-green-500 print:h-6 print:w-6" />
            </div>
            <div>
              <h1 className="text-white text-3xl print:text-2xl">Password Security Cheat Sheet</h1>
              <p className="text-slate-400 print:text-sm">Best Practices for Creating & Managing Passwords</p>
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

        {/* Password Strength Formula */}
        <Card className="bg-gradient-to-r from-green-900/30 to-teal-900/30 border-green-700 mb-8 print:mb-4">
          <CardContent className="p-6 print:p-4">
            <div className="flex items-center gap-3 mb-4 print:mb-3">
              <Shield className="h-8 w-8 text-green-500" />
              <h2 className="text-white text-2xl print:text-xl">Strong Password Formula</h2>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg mb-4 print:p-3 print:mb-3">
              <p className="text-green-400 text-xl text-center print:text-lg">
                Length + Complexity + Uniqueness = Security
              </p>
            </div>
            <p className="text-green-100 print:text-sm">
              A strong password should be at least 12 characters long, include a mix of character types, and be unique for each account.
            </p>
          </CardContent>
        </Card>

        {/* Good Practices */}
        <div className="mb-8 print:mb-4">
          <h2 className="text-white text-2xl mb-4 flex items-center gap-2 print:text-xl print:mb-3">
            <CheckCircle className="h-6 w-6 text-green-500" />
            DO: Best Practices
          </h2>
          <div className="grid md:grid-cols-2 gap-4 print:gap-3">
            {goodPractices.map((practice, index) => {
              const Icon = practice.icon;
              return (
                <Card key={index} className="bg-slate-900 border-green-800/50 print:border-slate-700">
                  <CardContent className="p-4 print:p-3">
                    <div className="flex items-start gap-3">
                      <Icon className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <div>
                        <h3 className="text-white mb-1 print:text-sm">{practice.title}</h3>
                        <p className="text-slate-400 text-sm print:text-xs">{practice.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bad Practices */}
        <div className="mb-8 print:mb-4">
          <h2 className="text-white text-2xl mb-4 flex items-center gap-2 print:text-xl print:mb-3">
            <X className="h-6 w-6 text-red-500" />
            DON'T: Common Mistakes
          </h2>
          <div className="grid md:grid-cols-2 gap-4 print:gap-3">
            {badPractices.map((practice, index) => (
              <Card key={index} className="bg-slate-900 border-red-800/50 print:border-slate-700">
                <CardContent className="p-4 print:p-3">
                  <div className="flex items-start gap-3">
                    <X className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-white mb-1 print:text-sm">{practice.title}</h3>
                      <p className="text-slate-400 text-sm mb-2 print:text-xs print:mb-1">{practice.description}</p>
                      <p className="text-red-400 text-xs bg-red-950/30 px-2 py-1 rounded inline-block">
                        Example: {practice.example}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Password Examples */}
        <div className="mb-8 print:mb-4">
          <h2 className="text-white text-2xl mb-4 print:text-xl print:mb-3">Password Strength Comparison</h2>
          <div className="space-y-3 print:space-y-2">
            <Card className="bg-slate-900 border-red-700">
              <CardContent className="p-4 print:p-3">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-red-600 text-white print:text-xs">WEAK</Badge>
                      <span className="text-slate-300 print:text-sm">password123</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 w-1/4"></div>
                      </div>
                      <span className="text-red-400 text-sm print:text-xs">Cracked in &lt;1 second</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-yellow-700">
              <CardContent className="p-4 print:p-3">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-yellow-600 text-white print:text-xs">MEDIUM</Badge>
                      <span className="text-slate-300 print:text-sm">MyP@ssw0rd</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 w-1/2"></div>
                      </div>
                      <span className="text-yellow-400 text-sm print:text-xs">Cracked in ~3 hours</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-green-700">
              <CardContent className="p-4 print:p-3">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-green-600 text-white print:text-xs">STRONG</Badge>
                      <span className="text-slate-300 print:text-sm">Coffee@Sunrise#Mountain2025!</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-full"></div>
                      </div>
                      <span className="text-green-400 text-sm print:text-xs">Cracked in 34,000 years</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Passphrase Method */}
        <div className="mb-8 print:mb-4">
          <h2 className="text-white text-2xl mb-4 print:text-xl print:mb-3">Recommended: Passphrase Method</h2>
          <Card className="bg-slate-900 border-teal-700">
            <CardContent className="p-6 print:p-4">
              <div className="space-y-4 print:space-y-3">
                <div>
                  <h3 className="text-white mb-2 flex items-center gap-2 print:text-base">
                    <Key className="h-5 w-5 text-teal-500" />
                    Create Memorable, Strong Passphrases
                  </h3>
                  <ol className="space-y-2 text-slate-300 list-decimal list-inside print:text-sm print:space-y-1">
                    <li>Think of 4-5 random words: "coffee", "sunrise", "mountain", "blue"</li>
                    <li>Add numbers and symbols: "Coffee@Sunrise#Mountain2025!"</li>
                    <li>Mix capitalization: "Coffee@Sunrise#Mountain2025!"</li>
                    <li>Make it unique per account: "Coffee@Sunrise#Gmail2025!"</li>
                  </ol>
                </div>
                <div className="bg-teal-950/30 p-4 rounded-lg border border-teal-800 print:p-3">
                  <p className="text-teal-300 mb-2 print:text-sm">✓ Easy to remember</p>
                  <p className="text-teal-300 mb-2 print:text-sm">✓ Hard to crack (29 characters, mixed types)</p>
                  <p className="text-teal-300 print:text-sm">✓ Unique and personal</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Multi-Factor Authentication */}
        <div className="mb-8 print:mb-4">
          <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-700">
            <CardContent className="p-6 print:p-4">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-white text-xl mb-2 print:text-lg">Enable Multi-Factor Authentication (MFA)</h3>
                  <p className="text-purple-200 mb-3 print:text-sm">
                    Even the strongest password can be compromised. MFA adds an extra verification step, reducing account takeover risk by 99.9%.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-600 text-white print:text-xs">Authenticator Apps (Best)</Badge>
                    <Badge className="bg-purple-700 text-white print:text-xs">SMS Codes</Badge>
                    <Badge className="bg-purple-700 text-white print:text-xs">Hardware Keys</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Reference Table */}
        <div className="mb-8 print:mb-4">
          <h2 className="text-white text-2xl mb-4 print:text-xl print:mb-3">Quick Reference</h2>
          <Card className="bg-slate-900 border-slate-800 print:border-slate-700">
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left p-4 text-slate-400 print:p-2 print:text-sm">Requirement</th>
                    <th className="text-left p-4 text-slate-400 print:p-2 print:text-sm">Minimum</th>
                    <th className="text-left p-4 text-slate-400 print:p-2 print:text-sm">Recommended</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800">
                    <td className="p-4 print:p-2 print:text-sm">Length</td>
                    <td className="p-4 print:p-2 print:text-sm">8 characters</td>
                    <td className="p-4 text-green-400 print:p-2 print:text-sm">12+ characters</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="p-4 print:p-2 print:text-sm">Complexity</td>
                    <td className="p-4 print:p-2 print:text-sm">Upper + lower + numbers</td>
                    <td className="p-4 text-green-400 print:p-2 print:text-sm">All types + symbols</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="p-4 print:p-2 print:text-sm">Uniqueness</td>
                    <td className="p-4 print:p-2 print:text-sm">Different per system</td>
                    <td className="p-4 text-green-400 print:p-2 print:text-sm">Unique everywhere</td>
                  </tr>
                  <tr>
                    <td className="p-4 print:p-2 print:text-sm">Change Frequency</td>
                    <td className="p-4 print:p-2 print:text-sm">Every 90 days</td>
                    <td className="p-4 text-green-400 print:p-2 print:text-sm">When compromised</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-center print:p-3">
          <p className="text-slate-400 text-sm print:text-xs">
            SecureGuard Portal • Password Security Guidelines 2025
          </p>
        </div>
      </div>
    </div>
  );
}
