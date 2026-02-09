import { FileText, Download, Lock, Link2, Video, Search, ChevronDown, ChevronUp, Key, AlertTriangle, Image, Mail, BookOpen, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useState } from 'react';

interface PoliciesPageProps {
  onNavigate?: (page: string) => void;
}

export function PoliciesPage({ onNavigate }: PoliciesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const resources = [
    {
      id: 1,
      title: 'Cybersecurity Policy Handbook 2025',
      description: 'Complete guide to company security policies and compliance requirements.',
      type: 'policy',
      icon: Lock,
      format: 'PDF',
      size: '2.4 MB',
      lastUpdated: 'Jan 15, 2025',
      category: 'Policies',
      interactive: false,
      downloadUrl: 'https://www.implats.co.za/pdf/sustainable-key-development-documents/2025/information-and-cybersecurity-2025.pdf',
    },
    {
      id: 2,
      title: 'Password Security Best Practices',
      description: 'Guidelines for creating and managing strong passwords.',
      type: 'guide',
      icon: Key,
      format: 'Interactive',
      size: 'Online',
      lastUpdated: 'Jan 10, 2025',
      category: 'Guides',
      interactive: true,
      link: 'password-guidelines',
    },
    {
      id: 3,
      title: 'Phishing Identification Infographic',
      description: 'Visual guide to spotting phishing attempts and social engineering.',
      type: 'infographic',
      icon: FileText,
      format: 'PNG',
      size: '1.2 MB',
      lastUpdated: 'Dec 20, 2024',
      category: 'Infographics',
      downloadUrl: 'https://www.cisa.gov/sites/default/files/2023-02/phishing-infographic-508c.pdf',
    },
    {
      id: 4,
      title: 'Data Protection Regulations Overview',
      description: 'Understanding GDPR, CCPA, and other data privacy laws.',
      type: 'policy',
      icon: Lock,
      format: 'PDF',
      size: '3.1 MB',
      lastUpdated: 'Dec 15, 2024',
      category: 'Policies',
      downloadUrl: 'https://gdpr.eu.org/full/full.pdf',
    },
    {
      id: 5,
      title: 'Incident Response Procedures',
      description: 'Step-by-step playbook for reporting and responding to security incidents.',
      type: 'guide',
      icon: AlertTriangle,
      format: 'Interactive',
      size: 'Online',
      lastUpdated: 'Jan 5, 2025',
      category: 'Guides',
      interactive: true,
      link: 'incident-response-guide',
    },
    {
      id: 6,
      title: 'Security Awareness Training Video',
      description: '30-minute comprehensive training on cybersecurity fundamentals.',
      type: 'video',
      icon: Video,
      format: 'YouTube',
      size: '30 min',
      lastUpdated: 'Nov 30, 2024',
      category: 'Videos',
      videoUrl: 'https://www.youtube.com/watch?v=BGMG7AIKNRg',
    },
    {
      id: 7,
      title: 'Remote Work Security Checklist',
      description: 'Essential security measures for working from home.',
      type: 'guide',
      icon: FileText,
      format: 'PDF',
      size: '650 KB',
      lastUpdated: 'Jan 8, 2025',
      category: 'Guides',
      downloadUrl: 'https://go.ntiva.com/hubfs/downloads/Securing-Remote-Workers-Checklist-Ntiva.pdf',
    },
    {
      id: 8,
      title: 'Security Threat Landscape 2025',
      description: 'Annual report on emerging cybersecurity threats and trends.',
      type: 'infographic',
      icon: FileText,
      format: 'PDF',
      size: '4.2 MB',
      lastUpdated: 'Jan 1, 2025',
      category: 'Infographics',
      downloadUrl: 'https://www.fortinet.com/content/dam/fortinet/assets/threat-reports/threat-landscape-report-2025.pdf',
    },
  ];

  const faqs = [
    {
      question: 'What should I do if I receive a suspicious email?',
      answer: 'Do not click any links or download attachments. Forward the email to security@company.com and delete it from your inbox. If you accidentally clicked a link, report it immediately using our incident reporting system.',
    },
    {
      question: 'How often should I change my password?',
      answer: 'We recommend changing your password every 90 days. However, if you suspect your account has been compromised, change it immediately. Always use unique passwords for different accounts and enable multi-factor authentication.',
    },
    {
      question: 'Can I use public Wi-Fi for work?',
      answer: 'Public Wi-Fi networks are not secure. If you must use public Wi-Fi, always connect through the company VPN first. Never access sensitive company data or log into critical systems without VPN protection.',
    },
    {
      question: 'What is multi-factor authentication (MFA)?',
      answer: 'MFA is an extra layer of security that requires two or more verification methods. This typically includes something you know (password), something you have (phone), and sometimes something you are (fingerprint). All company accounts must have MFA enabled.',
    },
    {
      question: 'How do I securely share sensitive information?',
      answer: 'Use approved company tools like encrypted email, secure file sharing platforms, or internal messaging systems. Never share sensitive data through personal email, social media, or unsecured channels.',
    },
    {
      question: 'What should I do if I lose my work device?',
      answer: 'Report the loss immediately to IT Security at 1-800-SECURE-NOW. The team will remotely lock and wipe the device to protect company data. Never wait to report a lost or stolen device.',
    },
  ];

  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getIconForResource = (type: string) => {
    switch (type) {
      case 'policy':
        return Lock;
      case 'video':
        return Video;
      case 'link':
        return Link2;
      default:
        return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-white text-4xl mb-4">Cybersecurity Policies & Best Practices</h1>
          <p className="text-slate-400 text-lg">
            Access company security policies, training materials, and helpful resources to stay secure.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-500" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search policies, guides, and resources..."
              className="pl-10 bg-slate-900 border-slate-800 text-white placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Resources */}
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="bg-slate-900 border border-slate-800">
            <TabsTrigger value="all" className="data-[state=active]:bg-teal-600">
              All Resources
            </TabsTrigger>
            <TabsTrigger value="policies" className="data-[state=active]:bg-teal-600">
              Policies
            </TabsTrigger>
            <TabsTrigger value="guides" className="data-[state=active]:bg-teal-600">
              Guides
            </TabsTrigger>
            <TabsTrigger value="infographics" className="data-[state=active]:bg-teal-600">
              Infographics
            </TabsTrigger>
            <TabsTrigger value="videos" className="data-[state=active]:bg-teal-600">
              Videos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredResources.map((resource) => {
                const Icon = getIconForResource(resource.type);
                return (
                  <Card
                    key={resource.id}
                    className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all"
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-teal-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-teal-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <CardTitle className="text-white text-lg">{resource.title}</CardTitle>
                            <Badge variant="outline" className="border-slate-700 text-slate-400 flex-shrink-0">
                              {resource.format}
                            </Badge>
                          </div>
                          <CardDescription className="text-slate-400">
                            {resource.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-slate-500">
                          {resource.size} • Updated {resource.lastUpdated}
                        </div>
                        {resource.interactive && resource.link ? (
                          <Button
                            onClick={() => onNavigate?.(resource.link)}
                            className="bg-teal-600 hover:bg-teal-700 text-white"
                          >
                            View Guide
                          </Button>
                        ) : (resource as any).videoUrl ? (
                          <Button
                            onClick={() => window.open((resource as any).videoUrl, '_blank')}
                            className="bg-teal-600 hover:bg-teal-700 text-white"
                          >
                            <Video className="mr-2 h-4 w-4" />
                            Watch Video
                          </Button>
                        ) : (resource as any).downloadUrl ? (
                          <Button 
                            onClick={() => window.open((resource as any).downloadUrl, '_blank')}
                            className="bg-teal-600 hover:bg-teal-700 text-white"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        ) : (
                          <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="policies" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredResources
                .filter((r) => r.category === 'Policies')
                .map((resource) => {
                  const Icon = getIconForResource(resource.type);
                  return (
                    <Card
                      key={resource.id}
                      className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all"
                    >
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="bg-teal-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-teal-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <CardTitle className="text-white text-lg">{resource.title}</CardTitle>
                              <Badge variant="outline" className="border-slate-700 text-slate-400 flex-shrink-0">
                                {resource.format}
                              </Badge>
                            </div>
                            <CardDescription className="text-slate-400">
                              {resource.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-slate-500">
                            {resource.size} • Updated {resource.lastUpdated}
                          </div>
                          {resource.interactive && resource.link ? (
                            <Button
                              onClick={() => onNavigate?.(resource.link)}
                              className="bg-teal-600 hover:bg-teal-700 text-white"
                            >
                              View Guide
                            </Button>
                          ) : (resource as any).videoUrl ? (
                            <Button
                              onClick={() => window.open((resource as any).videoUrl, '_blank')}
                              className="bg-teal-600 hover:bg-teal-700 text-white"
                            >
                              <Video className="mr-2 h-4 w-4" />
                              Watch Video
                            </Button>
                          ) : (resource as any).downloadUrl ? (
                            <Button 
                              onClick={() => window.open((resource as any).downloadUrl, '_blank')}
                              className="bg-teal-600 hover:bg-teal-700 text-white"
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                          ) : (
                            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>

          <TabsContent value="guides" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredResources
                .filter((r) => r.category === 'Guides')
                .map((resource) => {
                  const Icon = getIconForResource(resource.type);
                  return (
                    <Card
                      key={resource.id}
                      className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all"
                    >
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="bg-teal-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-teal-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <CardTitle className="text-white text-lg">{resource.title}</CardTitle>
                              <Badge variant="outline" className="border-slate-700 text-slate-400 flex-shrink-0">
                                {resource.format}
                              </Badge>
                            </div>
                            <CardDescription className="text-slate-400">
                              {resource.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-slate-500">
                            {resource.size} • Updated {resource.lastUpdated}
                          </div>
                          {resource.interactive && resource.link ? (
                            <Button
                              onClick={() => onNavigate?.(resource.link)}
                              className="bg-teal-600 hover:bg-teal-700 text-white"
                            >
                              View Guide
                            </Button>
                          ) : (resource as any).videoUrl ? (
                            <Button
                              onClick={() => window.open((resource as any).videoUrl, '_blank')}
                              className="bg-teal-600 hover:bg-teal-700 text-white"
                            >
                              <Video className="mr-2 h-4 w-4" />
                              Watch Video
                            </Button>
                          ) : (resource as any).downloadUrl ? (
                            <Button 
                              onClick={() => window.open((resource as any).downloadUrl, '_blank')}
                              className="bg-teal-600 hover:bg-teal-700 text-white"
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                          ) : (
                            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>

          <TabsContent value="infographics" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredResources
                .filter((r) => r.category === 'Infographics')
                .map((resource) => {
                  const Icon = getIconForResource(resource.type);
                  return (
                    <Card
                      key={resource.id}
                      className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all"
                    >
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="bg-teal-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-teal-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <CardTitle className="text-white text-lg">{resource.title}</CardTitle>
                              <Badge variant="outline" className="border-slate-700 text-slate-400 flex-shrink-0">
                                {resource.format}
                              </Badge>
                            </div>
                            <CardDescription className="text-slate-400">
                              {resource.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-slate-500">
                            {resource.size} • Updated {resource.lastUpdated}
                          </div>
                          {resource.interactive && resource.link ? (
                            <Button
                              onClick={() => onNavigate?.(resource.link)}
                              className="bg-teal-600 hover:bg-teal-700 text-white"
                            >
                              View Guide
                            </Button>
                          ) : (resource as any).videoUrl ? (
                            <Button
                              onClick={() => window.open((resource as any).videoUrl, '_blank')}
                              className="bg-teal-600 hover:bg-teal-700 text-white"
                            >
                              <Video className="mr-2 h-4 w-4" />
                              Watch Video
                            </Button>
                          ) : (resource as any).downloadUrl ? (
                            <Button 
                              onClick={() => window.open((resource as any).downloadUrl, '_blank')}
                              className="bg-teal-600 hover:bg-teal-700 text-white"
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                          ) : (
                            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredResources
                .filter((r) => r.category === 'Videos')
                .map((resource) => {
                  const Icon = getIconForResource(resource.type);
                  return (
                    <Card
                      key={resource.id}
                      className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all"
                    >
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="bg-teal-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-teal-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <CardTitle className="text-white text-lg">{resource.title}</CardTitle>
                              <Badge variant="outline" className="border-slate-700 text-slate-400 flex-shrink-0">
                                {resource.format}
                              </Badge>
                            </div>
                            <CardDescription className="text-slate-400">
                              {resource.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-slate-500">
                            {resource.size} • Updated {resource.lastUpdated}
                          </div>
                          {resource.interactive && resource.link ? (
                            <Button
                              onClick={() => onNavigate?.(resource.link)}
                              className="bg-teal-600 hover:bg-teal-700 text-white"
                            >
                              View Guide
                            </Button>
                          ) : (resource as any).videoUrl ? (
                            <Button
                              onClick={() => window.open((resource as any).videoUrl, '_blank')}
                              className="bg-teal-600 hover:bg-teal-700 text-white"
                            >
                              <Video className="mr-2 h-4 w-4" />
                              Watch Video
                            </Button>
                          ) : (resource as any).downloadUrl ? (
                            <Button 
                              onClick={() => window.open((resource as any).downloadUrl, '_blank')}
                              className="bg-teal-600 hover:bg-teal-700 text-white"
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                          ) : (
                            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Reference Cheat Sheets Section */}
        <div className="mt-16 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-white text-3xl mb-3">Quick Reference Cheat Sheets</h2>
            <p className="text-slate-400">
              Downloadable guides for immediate reference during security incidents
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-white mb-2">Incident Response Quick Guide</CardTitle>
                    <p className="text-slate-400 text-sm">
                      One-page reference for immediate action steps during security incidents.
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="text-sm text-slate-500">
                    PDF • 420 KB • Updated Jan 10, 2025
                  </div>
                  <Button 
                    onClick={() => onNavigate?.('cheatsheet-incident-response')}
                    className="bg-teal-600 hover:bg-teal-700 text-white"
                    size="sm"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    View & Download
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-white mb-2">Phishing Red Flags Cheat Sheet</CardTitle>
                    <p className="text-slate-400 text-sm">
                      Quick checklist to identify suspicious emails and phishing attempts.
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="text-sm text-slate-500">
                    PDF • 380 KB • Updated Dec 28, 2024
                  </div>
                  <Button 
                    onClick={() => onNavigate?.('cheatsheet-phishing')}
                    className="bg-teal-600 hover:bg-teal-700 text-white"
                    size="sm"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    View & Download
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-white mb-2">Password Security Cheat Sheet</CardTitle>
                    <p className="text-slate-400 text-sm">
                      Best practices for creating and managing strong passwords.
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="text-sm text-slate-500">
                    PDF • 520 KB • Updated Jan 5, 2025
                  </div>
                  <Button 
                    onClick={() => onNavigate?.('cheatsheet-password')}
                    className="bg-teal-600 hover:bg-teal-700 text-white"
                    size="sm"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    View & Download
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-white mb-2">Social Engineering Defense Guide</CardTitle>
                    <p className="text-slate-400 text-sm">
                      Tactics to recognize and prevent social engineering attacks.
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="text-sm text-slate-500">
                    PDF • 890 KB • Updated Jan 12, 2025
                  </div>
                  <Button 
                    onClick={() => onNavigate?.('cheatsheet-social-engineering')}
                    className="bg-teal-600 hover:bg-teal-700 text-white"
                    size="sm"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    View & Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq-section" className="mt-16 scroll-mt-20">
          <h2 className="text-white text-3xl mb-6">Frequently Asked Questions</h2>
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-slate-800">
                    <AccordionTrigger className="text-white hover:text-teal-400 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
