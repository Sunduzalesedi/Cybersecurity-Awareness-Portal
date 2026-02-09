import { Download, FileText, AlertTriangle, Shield, CheckCircle, Clock, Users, BookOpen, Printer } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function IncidentResponseGuide() {
  const handlePrint = () => {
    window.print();
  };

  const severityMatrix = [
    {
      level: 'Critical',
      description: 'Active ransomware, confirmed data exfiltration, major system outage',
      sla: 'Immediate 24/7 response',
      color: 'red',
    },
    {
      level: 'High',
      description: 'Malware infection on multiple systems, confirmed credential compromise',
      sla: 'Acknowledge within 1 hour',
      color: 'orange',
    },
    {
      level: 'Medium',
      description: 'Single infected workstation, suspicious email clicked',
      sla: 'Acknowledge within 4 hours',
      color: 'yellow',
    },
    {
      level: 'Low',
      description: 'General suspicion with no interaction',
      sla: 'Acknowledge within 24 hours',
      color: 'blue',
    },
  ];

  const responseSteps = [
    {
      step: 1,
      title: 'Triage / Acknowledge',
      icon: CheckCircle,
      color: 'teal',
      actions: [
        'Acknowledge the report to the reporter (auto or manual)',
        'Assign severity (Low / Medium / High / Critical)',
        'Create or update incident ticket in SIEM/ITSM',
        'Document initial triage notes',
      ],
    },
    {
      step: 2,
      title: 'Containment',
      icon: Shield,
      color: 'blue',
      actions: [
        'Isolate infected systems from network',
        'Block malicious IPs/domains at firewall/proxy',
        'Disable compromised accounts or revoke sessions',
        'Document all containment steps in the ticket',
      ],
    },
    {
      step: 3,
      title: 'Investigation',
      icon: FileText,
      color: 'purple',
      actions: [
        'Preserve logs and snapshot affected systems',
        'Collect artifacts: email headers, file hashes, screenshots',
        'Use sandboxing/VM to analyze suspicious files',
        'Correlate with SIEM and threat intel',
        'Maintain chain-of-custody for evidence',
      ],
    },
    {
      step: 4,
      title: 'Eradication',
      icon: AlertTriangle,
      color: 'orange',
      actions: [
        'Remove malware and clean infected hosts',
        'Patch vulnerabilities',
        'Reset compromised credentials',
        'Clean up persistence mechanisms',
        'Validate threat is eradicated',
      ],
    },
    {
      step: 5,
      title: 'Recovery',
      icon: Clock,
      color: 'green',
      actions: [
        'Restore systems from known-good backups',
        'Reconnect systems after verification',
        'Monitor for re-infection (14-30 days)',
        'Verify normal operations',
      ],
    },
    {
      step: 6,
      title: 'Post-Incident Review',
      icon: Users,
      color: 'teal',
      actions: [
        'Conduct review within 7-14 days',
        'Document root cause and timeline',
        'Identify gaps and improvements',
        'Create action items with owners',
        'Publish anonymized summary to employees',
      ],
    },
  ];

  const employeeChecklist = [
    'Stop activity related to the suspected incident',
    'Isolate the affected device (unplug network, disable Wi-Fi)',
    'Do NOT attempt remediation or reboot',
    'Capture evidence (screenshots, time, sender address, URLs)',
    'Report immediately using the portal or hotline',
  ];

  const evidenceChecklist = [
    'Save original email as .eml or forward as attachment',
    'Export endpoint logs (process list, services)',
    'Take screenshots of suspicious content',
    'Record exact timestamps and actions',
    'Preserve disk images if forensic investigation needed',
  ];

  const getSeverityColor = (color: string) => {
    const colors: Record<string, string> = {
      red: 'bg-red-600',
      orange: 'bg-orange-600',
      yellow: 'bg-yellow-600',
      blue: 'bg-blue-600',
    };
    return colors[color] || 'bg-slate-600';
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-red-500/10 w-16 h-16 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                </div>
                <div>
                  <h1 className="text-white text-4xl">Incident Response Playbook</h1>
                  <p className="text-slate-400">Complete guide for reporting and responding to security incidents</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button onClick={handlePrint} className="bg-slate-800 hover:bg-slate-700 text-white">
                <Printer className="mr-2 h-4 w-4" />
                Print Guide
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>

          <Card className="bg-orange-500/10 border-orange-600">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <BookOpen className="h-6 w-6 text-orange-400 flex-shrink-0" />
                <div>
                  <h3 className="text-orange-300 mb-2">Purpose of This Guide</h3>
                  <p className="text-orange-200 text-sm">
                    This playbook provides step-by-step instructions for employees and security teams to effectively identify, report, and respond to security incidents. Following these procedures helps minimize damage and enables faster recovery.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="employee" className="mb-12">
          <TabsList className="bg-slate-900 border border-slate-800">
            <TabsTrigger value="employee" className="data-[state=active]:bg-teal-600">
              Employee Actions
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-teal-600">
              Security Team Response
            </TabsTrigger>
            <TabsTrigger value="reference" className="data-[state=active]:bg-teal-600">
              Reference Materials
            </TabsTrigger>
          </TabsList>

          {/* Employee Actions Tab */}
          <TabsContent value="employee" className="mt-8 space-y-8">
            {/* Quick Checklist */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-red-500" />
                  Quick Employee Checklist (First 10 Minutes)
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Immediate actions when you suspect a security incident
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {employeeChecklist.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-lg">
                      <div className="bg-red-500/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-red-400">{index + 1}</span>
                      </div>
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* How to Report */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">How to Report (Step-by-Step)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="bg-teal-500/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-400">1</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white mb-2">Access the Reporting Portal</h4>
                      <p className="text-slate-400 text-sm">
                        Click <strong className="text-teal-400">"Report an Incident"</strong> in the header or navigate to the Incident Reporting page.
                      </p>
                    </div>
                  </div>

                  <Separator className="bg-slate-800" />

                  <div className="flex gap-4">
                    <div className="bg-teal-500/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-400">2</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white mb-2">Fill Required Fields</h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• Name (optional if anonymous reporting permitted)</li>
                        <li>• Department / Location</li>
                        <li>• Contact phone / email</li>
                        <li>• Incident Type (dropdown menu)</li>
                        <li>• Date & Time observed</li>
                        <li>• Description of what happened</li>
                      </ul>
                    </div>
                  </div>

                  <Separator className="bg-slate-800" />

                  <div className="flex gap-4">
                    <div className="bg-teal-500/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-400">3</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white mb-2">Attach Evidence</h4>
                      <p className="text-slate-400 text-sm">
                        Upload screenshots, original emails (.eml), suspicious files, or logs that support your report.
                      </p>
                    </div>
                  </div>

                  <Separator className="bg-slate-800" />

                  <div className="flex gap-4">
                    <div className="bg-teal-500/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-400">4</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white mb-2">Submit & Save Ticket Number</h4>
                      <p className="text-slate-400 text-sm">
                        Click Submit. You'll receive an automatic confirmation with a <strong>Ticket/Reference ID</strong>. Save this number for tracking.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-600 rounded-lg p-4">
                  <div className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-red-300 mb-1">Immediate Danger?</h4>
                      <p className="text-red-200 text-sm">
                        For suspected data exfiltration or ransomware in progress, call the security hotline <strong>1-800-SECURE-NOW</strong> and mark the report as <strong>Critical</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Report Template */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Minimum Information to Include</CardTitle>
                <CardDescription className="text-slate-400">
                  Template for effective incident reporting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-800 rounded-lg p-6 font-mono text-sm space-y-3">
                  <div>
                    <span className="text-slate-500">Subject:</span>
                    <span className="text-slate-300"> Suspicious email received — possible phishing</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Summary:</span>
                    <span className="text-slate-300"> Received email asking to reset credentials. Sender shows security@company-support.com. Did not click links.</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Observed at:</span>
                    <span className="text-slate-300"> 2025-10-15 14:30 (local time)</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Attachments:</span>
                    <span className="text-slate-300"> screenshot.png, suspicious_email.eml</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Requested action:</span>
                    <span className="text-slate-300"> Please investigate; avoided clicking further links</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Team Response Tab */}
          <TabsContent value="security" className="mt-8 space-y-8">
            {/* Response Workflow */}
            <div className="space-y-6">
              {responseSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="bg-slate-900 border-slate-800">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className={`bg-${step.color}-500/10 w-14 h-14 rounded-xl flex items-center justify-center`}>
                          <Icon className={`h-7 w-7 text-${step.color}-500`} />
                        </div>
                        <div>
                          <Badge className="bg-slate-800 text-slate-300 mb-2">
                            Step {step.step}
                          </Badge>
                          <CardTitle className="text-white text-xl">{step.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {step.actions.map((action, actionIndex) => (
                          <div key={actionIndex} className="flex items-start gap-3 text-slate-300">
                            <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                            <span>{action}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Communication Templates */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Communication Templates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-teal-400 mb-3">Auto-Confirmation to Reporter:</h4>
                  <div className="bg-slate-800 rounded-lg p-4 text-sm space-y-2">
                    <div className="text-slate-500">Subject: Incident Report Received — [Ticket ID]</div>
                    <div className="text-slate-300">
                      Thank you — we received your report about "[short description]" at [time]. The security team will triage and update you within [SLA]. If this is an ongoing emergency, call [Hotline Number].
                    </div>
                  </div>
                </div>

                <Separator className="bg-slate-800" />

                <div>
                  <h4 className="text-teal-400 mb-3">Stakeholder Alert:</h4>
                  <div className="bg-slate-800 rounded-lg p-4 text-sm space-y-2">
                    <div className="text-slate-500">Subject: [URGENT] Security Incident — Initial Notification</div>
                    <div className="text-slate-300">
                      Summary: We are investigating a suspected [type]. Affected systems: [list]. Current status: [triaged/contained]. Next update: [time]. Contact: [Incident Lead name / email / phone].
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reference Materials Tab */}
          <TabsContent value="reference" className="mt-8 space-y-8">
            {/* Severity Matrix */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Severity Classification Matrix</CardTitle>
                <CardDescription className="text-slate-400">
                  Guidelines for assigning incident severity levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {severityMatrix.map((severity, index) => (
                    <div key={index} className="border border-slate-700 rounded-lg p-4">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <Badge className={`${getSeverityColor(severity.color)} text-white`}>
                          {severity.level}
                        </Badge>
                        <span className="text-slate-400 text-sm">{severity.sla}</span>
                      </div>
                      <p className="text-slate-300 text-sm">{severity.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Evidence Checklist */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Evidence & Preservation Checklist</CardTitle>
                <CardDescription className="text-slate-400">
                  Critical items to collect and preserve
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {evidenceChecklist.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-lg">
                      <FileText className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Metrics to Track */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Key Metrics to Track</CardTitle>
                <CardDescription className="text-slate-400">
                  Measure and improve incident response effectiveness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-white mb-2">Time to Acknowledge Report</h4>
                    <p className="text-slate-400 text-sm">Track how quickly reports are acknowledged</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-white mb-2">Time to Contain Incident</h4>
                    <p className="text-slate-400 text-sm">Measure containment speed</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-white mb-2">Time to Resolution/Closure</h4>
                    <p className="text-slate-400 text-sm">Full incident lifecycle duration</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-white mb-2">Incidents by Type (Monthly)</h4>
                    <p className="text-slate-400 text-sm">Identify trends and patterns</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Best Practices */}
            <Card className="bg-gradient-to-br from-teal-900 to-blue-900 border-teal-700">
              <CardHeader>
                <CardTitle className="text-white">Best Practices & Final Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-teal-100 text-sm">
                <div className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>Make reporting easy and non-punitive. Encourage reporting even when unsure.</span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>Provide an anonymous reporting option for sensitive cases.</span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>Automate confirmations and status updates to keep users informed.</span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>Integrate reporting with training: use anonymized incidents as real-case studies.</span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>Regularly review and update this playbook based on lessons learned.</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Print Styles */}
        <style>{`
          @media print {
            body {
              background: white !important;
            }
            .no-print {
              display: none !important;
            }
            .bg-slate-950,
            .bg-slate-900,
            .bg-slate-800 {
              background: white !important;
              color: black !important;
            }
            .text-white,
            .text-slate-300 {
              color: black !important;
            }
            .border-slate-800,
            .border-slate-700 {
              border-color: #ccc !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
