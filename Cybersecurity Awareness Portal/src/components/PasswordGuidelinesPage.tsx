import { Lock, Key, Shield, Check, X, Eye, EyeOff, Smartphone, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { useState } from 'react';
import { motion } from 'motion/react';

export function PasswordGuidelinesPage() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showStrengthTest, setShowStrengthTest] = useState(false);

  const guidelines = [
    {
      icon: Key,
      title: 'Length',
      description: 'Use at least 14 characters',
      color: 'blue',
      details: 'Longer passwords are exponentially harder to crack. Each additional character increases security dramatically.',
    },
    {
      icon: Lock,
      title: 'Complexity',
      description: 'Mix uppercase, lowercase, numbers & symbols',
      color: 'purple',
      details: 'Combine different character types to make your password unpredictable and resistant to automated attacks.',
    },
    {
      icon: Smartphone,
      title: 'Multi-Factor Authentication',
      description: 'Enable MFA for extra protection',
      color: 'teal',
      details: 'MFA adds a second verification step, making it nearly impossible for attackers to access your account even if they have your password.',
    },
    {
      icon: Shield,
      title: 'Password Manager',
      description: 'Use a trusted password manager',
      color: 'green',
      details: 'Password managers generate and store complex passwords securely, so you only need to remember one master password.',
    },
  ];

  const dos = [
    'Use unique passwords for each account',
    'Create passwords with 14+ characters',
    'Use a mix of character types',
    'Enable MFA wherever possible',
    'Use a password manager',
    'Change passwords if compromised',
    'Use passphrases (e.g., "Coffee!Morning@2025#Sunshine")',
  ];

  const donts = [
    'Reuse passwords across accounts',
    'Use personal information (names, birthdays)',
    'Use common words or patterns',
    'Share passwords with anyone',
    'Write passwords on sticky notes',
    'Use simple substitutions (P@ssw0rd)',
    'Keep default passwords unchanged',
  ];

  const calculatePasswordStrength = (pwd: string) => {
    let strength = 0;
    let feedback: { text: string; status: string }[] = [];

    // Length check
    if (pwd.length >= 14) {
      strength += 25;
      feedback.push({ text: 'Good length (14+ characters)', status: 'good' });
    } else if (pwd.length >= 8) {
      strength += 10;
      feedback.push({ text: 'Acceptable length, but 14+ is better', status: 'warning' });
    } else {
      feedback.push({ text: 'Too short (minimum 8, recommended 14+)', status: 'bad' });
    }

    // Uppercase check
    if (/[A-Z]/.test(pwd)) {
      strength += 15;
      feedback.push({ text: 'Contains uppercase letters', status: 'good' });
    } else {
      feedback.push({ text: 'Add uppercase letters', status: 'bad' });
    }

    // Lowercase check
    if (/[a-z]/.test(pwd)) {
      strength += 15;
      feedback.push({ text: 'Contains lowercase letters', status: 'good' });
    } else {
      feedback.push({ text: 'Add lowercase letters', status: 'bad' });
    }

    // Numbers check
    if (/[0-9]/.test(pwd)) {
      strength += 15;
      feedback.push({ text: 'Contains numbers', status: 'good' });
    } else {
      feedback.push({ text: 'Add numbers', status: 'bad' });
    }

    // Special characters check
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) {
      strength += 15;
      feedback.push({ text: 'Contains special characters', status: 'good' });
    } else {
      feedback.push({ text: 'Add special characters', status: 'bad' });
    }

    // Common patterns check
    if (/^password|12345|qwerty/i.test(pwd)) {
      strength -= 30;
      feedback.push({ text: 'Avoids common patterns', status: 'bad' });
    }

    // Bonus for extra length
    if (pwd.length >= 20) {
      strength += 15;
      feedback.push({ text: 'Excellent length!', status: 'good' });
    }

    return { strength: Math.min(100, Math.max(0, strength)), feedback };
  };

  const { strength, feedback } = password ? calculatePasswordStrength(password) : { strength: 0, feedback: [] };

  const getStrengthColor = (strength: number) => {
    if (strength >= 75) return 'bg-green-600';
    if (strength >= 50) return 'bg-yellow-600';
    if (strength >= 25) return 'bg-orange-600';
    return 'bg-red-600';
  };

  const getStrengthLabel = (strength: number) => {
    if (strength >= 75) return 'Strong';
    if (strength >= 50) return 'Moderate';
    if (strength >= 25) return 'Weak';
    return 'Very Weak';
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      blue: { bg: 'bg-blue-500/10', text: 'text-blue-500' },
      purple: { bg: 'bg-purple-500/10', text: 'text-purple-500' },
      teal: { bg: 'bg-teal-500/10', text: 'text-teal-500' },
      green: { bg: 'bg-green-500/10', text: 'text-green-500' },
    };
    return colors[color] || colors.teal;
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-teal-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock className="h-10 w-10 text-teal-500" />
          </div>
          <h1 className="text-white text-4xl lg:text-5xl mb-4">
            Create & Manage Strong Passwords
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Your first line of defense against cyber threats. Learn to create and manage passwords that keep your accounts secure.
          </p>
        </div>

        {/* Dailymotion Video */}
        <Card className="bg-slate-900 border-slate-800 mb-12">
          <CardHeader>
            <CardTitle className="text-white">📹 Watch: Password Security Best Practices</CardTitle>
            <CardDescription className="text-slate-400">
              Learn essential password security techniques in this comprehensive video guide
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.dailymotion.com/embed/video/x8rts4m"
                title="Password Security Best Practices"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </CardContent>
        </Card>

        {/* Guidelines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {guidelines.map((guideline, index) => {
            const Icon = guideline.icon;
            const colors = getColorClasses(guideline.color);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all h-full">
                  <CardHeader>
                    <div className={`${colors.bg} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className={`h-8 w-8 ${colors.text}`} />
                    </div>
                    <CardTitle className="text-white text-xl">{guideline.title}</CardTitle>
                    <CardDescription className="text-teal-400">
                      {guideline.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 text-sm">{guideline.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Do's and Don'ts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Do's */}
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                Password Do's
              </CardTitle>
              <CardDescription className="text-slate-400">
                Best practices for secure passwords
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {dos.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-slate-300">
                    <div className="bg-green-500/10 rounded-full p-1 flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Don'ts */}
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <XCircle className="h-6 w-6 text-red-500" />
                Password Don'ts
              </CardTitle>
              <CardDescription className="text-slate-400">
                Common mistakes to avoid
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {donts.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-slate-300">
                    <div className="bg-red-500/10 rounded-full p-1 flex-shrink-0 mt-0.5">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Password Examples */}
        <Card className="bg-slate-900 border-slate-800 mb-12">
          <CardHeader>
            <CardTitle className="text-white">Password Examples</CardTitle>
            <CardDescription className="text-slate-400">
              See the difference between weak and strong passwords
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Weak Example */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge className="bg-red-600 text-white">Weak Password</Badge>
                </div>
                <div className="bg-red-500/10 border-2 border-red-600 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <XCircle className="h-5 w-5 text-red-500" />
                    <span className="text-red-300 text-lg">password123</span>
                  </div>
                  <ul className="text-slate-400 text-sm space-y-1">
                    <li>• Too short and simple</li>
                    <li>• Uses common word</li>
                    <li>• Predictable pattern</li>
                    <li>• No special characters</li>
                  </ul>
                </div>
              </div>

              {/* Strong Example */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-600 text-white">Strong Password</Badge>
                </div>
                <div className="bg-green-500/10 border-2 border-green-600 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-green-300 text-lg font-mono blur-sm hover:blur-none transition-all cursor-pointer">
                      C0ff3e!M0rn!ng@2025#
                    </span>
                  </div>
                  <ul className="text-slate-400 text-sm space-y-1">
                    <li>• 20 characters long</li>
                    <li>• Mix of all character types</li>
                    <li>• Memorable passphrase</li>
                    <li>• Unique and unpredictable</li>
                  </ul>
                  <p className="text-slate-500 text-xs mt-3 italic">
                    * Hover to reveal (blurred for privacy)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Password Strength Test */}
        <Card className="bg-gradient-to-br from-teal-900 to-blue-900 border-teal-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Test Your Password Strength</CardTitle>
            <CardDescription className="text-teal-200">
              Enter a password to see how strong it is (we don't store or transmit this data)
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!showStrengthTest ? (
              <Button
                onClick={() => setShowStrengthTest(true)}
                className="bg-white text-teal-900 hover:bg-teal-50 w-full py-6 text-lg"
              >
                Take the Password Strength Test
              </Button>
            ) : (
              <div className="space-y-6">
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter a password to test..."
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 pr-12"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                {password && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white">Password Strength:</span>
                        <Badge className={`${getStrengthColor(strength)} text-white`}>
                          {getStrengthLabel(strength)}
                        </Badge>
                      </div>
                      <Progress value={strength} className={`h-3 ${getStrengthColor(strength)}`} />
                      <p className="text-teal-200 text-sm mt-2">{strength}% strength score</p>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <h4 className="text-white mb-3 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-teal-400" />
                        Feedback:
                      </h4>
                      <div className="space-y-2">
                        {feedback.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            {item.status === 'good' && <Check className="h-4 w-4 text-green-500 flex-shrink-0" />}
                            {item.status === 'warning' && <AlertCircle className="h-4 w-4 text-yellow-500 flex-shrink-0" />}
                            {item.status === 'bad' && <X className="h-4 w-4 text-red-500 flex-shrink-0" />}
                            <span
                              className={
                                item.status === 'good'
                                  ? 'text-green-300'
                                  : item.status === 'warning'
                                  ? 'text-yellow-300'
                                  : 'text-red-300'
                              }
                            >
                              {item.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-600 rounded-lg p-4">
                      <p className="text-blue-200 text-sm">
                        <strong>Privacy Note:</strong> This test runs entirely in your browser. Your password is never sent to any server or stored anywhere.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Tips */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="pt-6">
              <Key className="h-8 w-8 text-teal-500 mb-3" />
              <h3 className="text-white mb-2">Use Passphrases</h3>
              <p className="text-slate-400 text-sm">
                String together random words with numbers and symbols for memorable yet secure passwords.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="pt-6">
              <Smartphone className="h-8 w-8 text-teal-500 mb-3" />
              <h3 className="text-white mb-2">Enable MFA</h3>
              <p className="text-slate-400 text-sm">
                Multi-factor authentication adds critical protection even if your password is compromised.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="pt-6">
              <Shield className="h-8 w-8 text-teal-500 mb-3" />
              <h3 className="text-white mb-2">Update Regularly</h3>
              <p className="text-slate-400 text-sm">
                Change passwords every 90-120 days and immediately if you suspect a breach.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
