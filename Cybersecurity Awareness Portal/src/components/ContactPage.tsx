import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export function ContactPage() {
  const [showChatbot, setShowChatbot] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      title: 'Emergency Hotline',
      value: '1-800-SECURE-NOW',
      description: '24/7 immediate assistance',
      color: 'red',
    },
    {
      icon: Mail,
      title: 'Email Support',
      value: 'security@company.com',
      description: 'Response within 2 hours',
      color: 'teal',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      value: 'Mon-Fri, 8AM - 6PM EST',
      description: 'Extended support available',
      color: 'blue',
    },
    {
      icon: MapPin,
      title: 'Security Office',
      value: 'Building A, Floor 3, Room 305',
      description: 'Walk-in consultations welcome',
      color: 'yellow',
    },
  ];

  const teamMembers = [
    {
      name: 'Lukhona Dukuza',
      role: 'Chief Information Security Officer',
      email: 'l.dukuza@secureguard.com',
    },
    {
      name: 'Xolela Solomon',
      role: 'Security Operations Manager',
      email: 'x.solomon@secureguard.com',
    },
    {
      name: 'Sinovuyo Njamela',
      role: 'Incident Response Lead',
      email: 's.njamela@secureguard.com',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      red: { bg: 'bg-red-500/10', text: 'text-red-500' },
      teal: { bg: 'bg-teal-500/10', text: 'text-teal-500' },
      blue: { bg: 'bg-blue-500/10', text: 'text-blue-500' },
      yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-500' },
    };
    return colors[color] || colors.teal;
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-white text-4xl mb-4">Contact the Security Team</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We're here to help keep your digital workplace secure. Reach out anytime with questions, concerns, or to report security issues.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const colors = getColorClasses(method.color);
            return (
              <Card key={index} className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all">
                <CardHeader>
                  <div className={`${colors.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}>
                    <Icon className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <CardTitle className="text-white text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-teal-400 mb-2">{method.value}</p>
                  <p className="text-slate-500 text-sm">{method.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Send us a Message</CardTitle>
                <CardDescription className="text-slate-400">
                  For non-urgent inquiries, fill out the form below and we'll get back to you soon.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name" className="text-slate-300">
                        Name
                      </Label>
                      <Input
                        id="contact-name"
                        placeholder="Your name"
                        className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email" className="text-slate-300">
                        Email
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="your.email@company.com"
                        className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-subject" className="text-slate-300">
                      Subject
                    </Label>
                    <Input
                      id="contact-subject"
                      placeholder="What's this about?"
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message" className="text-slate-300">
                      Message
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="How can we help you?"
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 min-h-[150px]"
                    />
                  </div>

                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="bg-slate-900 border-slate-800 mt-8">
              <CardHeader>
                <CardTitle className="text-white">Security Office Location</CardTitle>
                <CardDescription className="text-slate-400">
                  Visit us in person during office hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-800 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-blue-600/20"></div>
                  <div className="relative z-10 text-center">
                    <MapPin className="h-12 w-12 text-teal-500 mx-auto mb-3" />
                    <p className="text-white">Company Headquarters</p>
                    <p className="text-slate-400 text-sm">123 Security Boulevard</p>
                    <p className="text-slate-400 text-sm">Tech City, TC 12345</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-slate-800/50 rounded-lg">
                  <p className="text-slate-400 text-sm">
                    <strong className="text-white">Directions:</strong> Enter through the main lobby, take the elevator to Floor 3, and turn right. The Security Office is the third door on the left.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Assistant */}
            <Card className="bg-gradient-to-br from-teal-900 to-blue-900 border-teal-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  AI Security Assistant
                </CardTitle>
                <CardDescription className="text-teal-200">
                  Get instant answers to common security questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => setShowChatbot(!showChatbot)}
                  className="w-full bg-white text-teal-900 hover:bg-teal-50"
                >
                  {showChatbot ? 'Close Chat' : 'Start Chat'}
                </Button>
                {showChatbot && (
                  <div className="mt-4 p-4 bg-white/10 rounded-lg">
                    <p className="text-white text-sm mb-3">Hello! I'm your AI security assistant. How can I help you today?</p>
                    <div className="space-y-2">
                      <button className="w-full text-left text-sm p-2 bg-white/10 hover:bg-white/20 rounded text-white transition-colors">
                        How do I report phishing?
                      </button>
                      <button className="w-full text-left text-sm p-2 bg-white/10 hover:bg-white/20 rounded text-white transition-colors">
                        Password reset help
                      </button>
                      <button className="w-full text-left text-sm p-2 bg-white/10 hover:bg-white/20 rounded text-white transition-colors">
                        VPN connection issues
                      </button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Team Members */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Security Team</CardTitle>
                <CardDescription className="text-slate-400">
                  Key contacts for specific concerns
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="pb-4 border-b border-slate-800 last:border-0 last:pb-0">
                    <h4 className="text-white mb-1">{member.name}</h4>
                    <p className="text-slate-400 text-sm mb-2">{member.role}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-teal-400 hover:text-teal-300 text-sm flex items-center gap-1"
                    >
                      <Mail className="h-3 w-3" />
                      {member.email}
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Before You Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-400 text-sm">
                  <li className="flex gap-2">
                    <span className="text-teal-500 flex-shrink-0">•</span>
                    <span>For urgent security incidents, always call our hotline first</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-500 flex-shrink-0">•</span>
                    <span>Check our FAQ section for quick answers</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-500 flex-shrink-0">•</span>
                    <span>Have your employee ID ready when contacting us</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-500 flex-shrink-0">•</span>
                    <span>Document any suspicious activity before reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
