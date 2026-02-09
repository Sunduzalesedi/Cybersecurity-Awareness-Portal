import { Users, X, CheckCircle, AlertTriangle, Shield, FileText, Phone, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface SocialEngineeringDefenseGuideProps {
  onClose?: () => void;
}

export function SocialEngineeringDefenseGuide({ onClose }: SocialEngineeringDefenseGuideProps) {
  const handlePrint = () => {
    window.print();
  };

  const attackTypes = [
    {
      type: 'Pretexting',
      description: 'Attacker creates a fake scenario to gain trust',
      example: 'Calls claiming to be IT support needing your password',
      color: 'red',
      icon: Phone,
    },
    {
      type: 'Phishing',
      description: 'Fraudulent emails/messages requesting sensitive info',
      example: 'Email appearing to be from CEO asking for wire transfer',
      color: 'orange',
      icon: MessageSquare,
    },
    {
      type: 'Baiting',
      description: 'Offering something enticing to trick victims',
      example: 'Free USB drive left in parking lot contains malware',
      color: 'yellow',
      icon: AlertTriangle,
    },
    {
      type: 'Tailgating',
      description: 'Following authorized person into restricted area',
      example: 'Stranger asks you to hold door claiming to have forgotten badge',
      color: 'purple',
      icon: Users,
    },
  ];

  const warningSignals = [
    'Creates sense of urgency or fear',
    'Requests confidential information',
    'Claims authority or importance',
    'Offers too-good-to-be-true deals',
    'Refuses to provide verification',
    'Uses emotional manipulation',
    'Asks you to bypass security procedures',
    'Threatens negative consequences',
  ];

  const defenseTactics = [
    {
      principle: 'Verify Identity',
      actions: [
        'Always verify through official channels',
        'Call known phone numbers, not ones provided',
        'Check email addresses carefully',
        'Confirm with supervisor if request seems unusual',
      ],
    },
    {
      principle: 'Question Everything',
      actions: [
        'Ask "why" someone needs information',
        'Be skeptical of urgent requests',
        'Trust your instincts',
        'Don\'t be pressured into quick decisions',
      ],
    },
    {
      principle: 'Follow Protocols',
      actions: [
        'Never share passwords or credentials',
        'Don\'t bypass security procedures',
        'Report badge violations',
        'Follow data handling policies',
      ],
    },
    {
      principle: 'Report Suspicious Activity',
      actions: [
        'Report to security immediately',
        'Don\'t be embarrassed to report',
        'Document what happened',
        'Help protect others by reporting',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 print:mb-4">
          <div className="flex items-center gap-4">
            <div className="bg-purple-500/10 w-16 h-16 rounded-2xl flex items-center justify-center print:w-12 print:h-12">
              <Users className="h-8 w-8 text-purple-500 print:h-6 print:w-6" />
            </div>
            <div>
              <h1 className="text-white text-3xl print:text-2xl">Social Engineering Defense Guide</h1>
              <p className="text-slate-400 print:text-sm">Protect Against Manipulation & Deception Attacks</p>
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

        {/* What is Social Engineering */}
        <Card className="bg-gradient-to-r from-purple-900/30 to-red-900/30 border-purple-700 mb-8 print:mb-4">
          <CardContent className="p-6 print:p-4">
            <div className="flex items-center gap-3 mb-4 print:mb-3">
              <Shield className="h-8 w-8 text-purple-500" />
              <h2 className="text-white text-2xl print:text-xl">What is Social Engineering?</h2>
            </div>
            <p className="text-purple-100 text-lg mb-3 print:text-base">
              Social engineering is the psychological manipulation of people to divulge confidential information or perform actions that compromise security.
            </p>
            <p className="text-purple-200 print:text-sm">
              Unlike technical hacks, social engineering attacks exploit human psychology - trust, fear, curiosity, and helpfulness - making people the weakest link in security.
            </p>
          </CardContent>
        </Card>

        {/* Common Attack Types */}
        <div className="mb-8 print:mb-4">
          <h2 className="text-white text-2xl mb-4 print:text-xl print:mb-3">Common Social Engineering Attacks</h2>
          <div className="grid md:grid-cols-2 gap-4 print:gap-3">
            {attackTypes.map((attack, index) => {
              const Icon = attack.icon;
              return (
                <Card key={index} className="bg-slate-900 border-slate-800 print:border-slate-700">
                  <CardHeader className="pb-3 print:pb-2">
                    <div className="flex items-center gap-3">
                      <div className={`bg-${attack.color}-500/10 w-12 h-12 rounded-lg flex items-center justify-center`}>
                        <Icon className={`h-6 w-6 text-${attack.color}-500`} />
                      </div>
                      <CardTitle className="text-white print:text-base">{attack.type}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 print:space-y-1">
                    <p className="text-slate-300 text-sm print:text-xs">{attack.description}</p>
                    <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-${attack.color}-500 print:p-2">
                      <p className="text-xs text-slate-400 mb-1">Example:</p>
                      <p className="text-slate-300 text-sm print:text-xs">{attack.example}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Warning Signals */}
        <div className="mb-8 print:mb-4">
          <h2 className="text-white text-2xl mb-4 print:text-xl print:mb-3">Red Flags: Warning Signals</h2>
          <Card className="bg-slate-900 border-red-700">
            <CardContent className="p-6 print:p-4">
              <p className="text-red-200 mb-4 print:text-sm">
                Be alert when someone exhibits these behaviors:
              </p>
              <div className="grid md:grid-cols-2 gap-3 print:gap-2">
                {warningSignals.map((signal, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 print:text-sm">{signal}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Real-World Scenario */}
        <div className="mb-8 print:mb-4">
          <h2 className="text-white text-2xl mb-4 print:text-xl print:mb-3">Real-World Scenario</h2>
          <Card className="bg-slate-900 border-orange-700">
            <CardHeader className="bg-slate-800 print:bg-slate-900">
              <CardTitle className="text-white flex items-center gap-2 print:text-base">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                The "Urgent CEO Request" Attack
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 print:p-4">
              <div className="space-y-4 print:space-y-3">
                <div>
                  <Badge className="bg-red-600 text-white mb-2 print:text-xs">THE ATTACK</Badge>
                  <p className="text-slate-300 print:text-sm">
                    You receive an email appearing to be from the CEO requesting an urgent wire transfer to close a deal. The email says "Handle this discretely, don't mention to anyone." The sender creates urgency: "We'll lose this client if not done by 5 PM today."
                  </p>
                </div>
                <div>
                  <Badge className="bg-orange-600 text-white mb-2 print:text-xs">RED FLAGS PRESENT</Badge>
                  <ul className="space-y-1 text-slate-300 list-disc list-inside print:text-sm">
                    <li>Urgency and deadline pressure</li>
                    <li>Requests secrecy and bypassing normal procedures</li>
                    <li>Appeals to authority (CEO)</li>
                    <li>Unusual request outside normal workflow</li>
                  </ul>
                </div>
                <div>
                  <Badge className="bg-green-600 text-white mb-2 print:text-xs">CORRECT RESPONSE</Badge>
                  <ul className="space-y-2 print:space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 print:text-sm">Verify the request by calling the CEO directly using a known phone number</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 print:text-sm">Check the email address carefully for subtle misspellings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 print:text-sm">Contact finance department to verify through proper channels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 print:text-sm">Report the suspicious email to security@company.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Defense Tactics */}
        <div className="mb-8 print:mb-4">
          <h2 className="text-white text-2xl mb-4 print:text-xl print:mb-3">Defense Tactics: The 4 Principles</h2>
          <div className="space-y-4 print:space-y-3">
            {defenseTactics.map((tactic, index) => (
              <Card key={index} className="bg-slate-900 border-teal-700">
                <CardHeader className="pb-3 print:pb-2">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-teal-600 text-white text-lg w-10 h-10 flex items-center justify-center rounded-full print:w-8 print:h-8 print:text-base">
                      {index + 1}
                    </Badge>
                    <CardTitle className="text-white print:text-base">{tactic.principle}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 print:space-y-1">
                    {tactic.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 print:text-sm">{action}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Decision Tree */}
        <div className="mb-8 print:mb-4">
          <h2 className="text-white text-2xl mb-4 print:text-xl print:mb-3">Quick Decision Flowchart</h2>
          <Card className="bg-slate-900 border-slate-800 print:border-slate-700">
            <CardContent className="p-6 print:p-4">
              <div className="space-y-3 print:space-y-2">
                <div className="flex items-center gap-3 p-4 bg-blue-900/20 border border-blue-700 rounded-lg print:p-3">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 print:text-sm">?</div>
                  <p className="text-blue-200 print:text-sm">Does this request seem unusual or urgent?</p>
                </div>
                <div className="ml-8 border-l-2 border-slate-700 pl-6 space-y-3 print:ml-6 print:pl-4 print:space-y-2">
                  <div className="flex items-center gap-3 p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg print:p-3">
                    <div className="bg-yellow-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 print:text-sm">?</div>
                    <p className="text-yellow-200 print:text-sm">Can I verify through official channels?</p>
                  </div>
                  <div className="ml-8 border-l-2 border-slate-700 pl-6 space-y-3 print:ml-6 print:pl-4 print:space-y-2">
                    <div className="flex items-center gap-3 p-4 bg-green-900/20 border border-green-700 rounded-lg print:p-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <p className="text-green-200 print:text-sm"><strong>YES:</strong> Verify identity first, then proceed if legitimate</p>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-red-900/20 border border-red-700 rounded-lg print:p-3">
                      <X className="h-6 w-6 text-red-500 flex-shrink-0" />
                      <p className="text-red-200 print:text-sm"><strong>NO:</strong> Decline request and report to security@company.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-4 mb-8 print:grid-cols-3 print:gap-3 print:mb-4">
          <Card className="bg-slate-900 border-slate-800 text-center print:border-slate-700">
            <CardContent className="p-6 print:p-3">
              <div className="text-3xl text-purple-500 mb-2 print:text-2xl">98%</div>
              <p className="text-slate-400 text-sm print:text-xs">of cyberattacks involve social engineering</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900 border-slate-800 text-center print:border-slate-700">
            <CardContent className="p-6 print:p-3">
              <div className="text-3xl text-red-500 mb-2 print:text-2xl">$4.5M</div>
              <p className="text-slate-400 text-sm print:text-xs">average cost of successful attack</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900 border-slate-800 text-center print:border-slate-700">
            <CardContent className="p-6 print:p-3">
              <div className="text-3xl text-teal-500 mb-2 print:text-2xl">70%</div>
              <p className="text-slate-400 text-sm print:text-xs">can be prevented by employee awareness</p>
            </CardContent>
          </Card>
        </div>

        {/* Remember Section */}
        <Card className="bg-gradient-to-r from-teal-900/30 to-blue-900/30 border-teal-700 mb-8 print:mb-4">
          <CardContent className="p-6 print:p-4">
            <h3 className="text-white text-xl mb-3 print:text-lg">Remember: You Are The Last Line of Defense</h3>
            <p className="text-teal-100 mb-3 print:text-sm">
              Technology can't stop social engineering - only aware, vigilant employees can. Trust your instincts. If something feels wrong, it probably is.
            </p>
            <p className="text-teal-200 print:text-sm">
              <strong>When in doubt, verify. When suspicious, report.</strong>
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-center print:p-3">
          <p className="text-slate-400 text-sm print:text-xs">
            SecureGuard Portal • Social Engineering Awareness 2025
          </p>
        </div>
      </div>
    </div>
  );
}
