import { Shield, AlertTriangle, Bell, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white text-5xl lg:text-6xl mb-6">
                Stay Safe. <span className="text-teal-400">Stay Secure.</span>
              </h1>
              <p className="text-slate-300 text-xl mb-8">
                Your partner in cybersecurity awareness and incident response. Protect your digital workplace with expert guidance and real-time threat intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => onNavigate('training')}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6"
                >
                  Start Cybersecurity Training
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={() => onNavigate('spot-threats')}
                  variant="outline"
                  className="border-teal-500 text-teal-400 hover:bg-teal-950 px-8 py-6"
                >
                  Learn How to Spot Threats
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 mt-10">
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle className="h-5 w-5 text-teal-500" />
                  <span className="text-sm">24/7 Monitoring</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle className="h-5 w-5 text-teal-500" />
                  <span className="text-sm">Expert Support</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle className="h-5 w-5 text-teal-500" />
                  <span className="text-sm">Instant Response</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Image/Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1639503547276-90230c4a4198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwc2hpZWxkJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjA1MTU1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cybersecurity Shield"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>

              {/* Floating Shield Icon */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-teal-600 p-6 rounded-2xl shadow-2xl"
              >
                <Shield className="h-12 w-12 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all cursor-pointer" onClick={() => onNavigate('training')}>
              <CardHeader>
                <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                </div>
                <CardTitle className="text-white">Phishing Awareness</CardTitle>
                <CardDescription className="text-slate-400">
                  Learn to identify and report suspicious emails, links, and attachments before they cause harm.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="text-teal-400 hover:text-teal-300 p-0">
                  Start Training <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all cursor-pointer" onClick={() => onNavigate('report')}>
              <CardHeader>
                <div className="bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-red-500" />
                </div>
                <CardTitle className="text-white">Incident Reporting</CardTitle>
                <CardDescription className="text-slate-400">
                  Report security incidents instantly. Fast response helps protect everyone in the organization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="text-teal-400 hover:text-teal-300 p-0">
                  Report Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all cursor-pointer" onClick={() => onNavigate('threats')}>
              <CardHeader>
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-white">Security Updates</CardTitle>
                <CardDescription className="text-slate-400">
                  Stay informed with the latest threat intelligence, security patches, and best practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="text-teal-400 hover:text-teal-300 p-0">
                  View Updates <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl text-teal-400 mb-2">10K+</div>
            <div className="text-slate-400">Employees Trained</div>
          </div>
          <div>
            <div className="text-4xl text-teal-400 mb-2">99.8%</div>
            <div className="text-slate-400">Threat Detection Rate</div>
          </div>
          <div>
            <div className="text-4xl text-teal-400 mb-2">&lt;5min</div>
            <div className="text-slate-400">Average Response Time</div>
          </div>
          <div>
            <div className="text-4xl text-teal-400 mb-2">24/7</div>
            <div className="text-slate-400">Security Monitoring</div>
          </div>
        </div>
      </section>
    </div>
  );
}
