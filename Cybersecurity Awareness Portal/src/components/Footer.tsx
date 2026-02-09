import { Shield, Mail, Phone, Linkedin, Twitter, Facebook, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [showThankYouDialog, setShowThankYouDialog] = useState(false);

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    setIsSubscribing(true);
    // Simulate API call
    setTimeout(() => {
      setEmail('');
      setIsSubscribing(false);
      setShowThankYouDialog(true);
    }, 1000);
  };

  const handleFAQClick = () => {
    onNavigate?.('policies');
    // Delay to allow navigation to complete before scrolling
    setTimeout(() => {
      const faqSection = document.getElementById('faq-section');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-teal-500 p-2 rounded-lg">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-white">SecureGuard</span>
            </div>
            <p className="text-slate-400 text-sm">
              Protecting your digital assets with comprehensive cybersecurity awareness and incident response.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate?.('policies')} 
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Security Policies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('training')} 
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Training Resources
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('password-guidelines')} 
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Best Practices
                </button>
              </li>
              <li>
                <button 
                  onClick={handleFAQClick}
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-slate-400">
                <Phone className="h-4 w-4" />
                <span>1-800-SECURE-NOW</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Mail className="h-4 w-4" />
                <span>security@company.com</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white mb-4">Security Updates</h3>
            <p className="text-slate-400 text-sm mb-3">
              Get the latest security alerts and tips.
            </p>
            <form onSubmit={handleNewsletterSignup} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                required
              />
              <Button 
                type="submit"
                disabled={isSubscribing}
                className="bg-teal-600 hover:bg-teal-700 text-white"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          © 2025 SecureGuard Portal. All rights reserved. | Privacy Policy | Terms of Service
        </div>
      </div>

      {/* Thank You Dialog */}
      <Dialog open={showThankYouDialog} onOpenChange={setShowThankYouDialog}>
        <DialogContent className="bg-slate-900 border-slate-800 text-white sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 bg-teal-500/10 w-16 h-16 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-teal-500" />
            </div>
            <DialogTitle className="text-white text-center text-2xl">Thank You for Subscribing!</DialogTitle>
            <DialogDescription className="text-slate-400 text-center">
              You've successfully subscribed to our security newsletter.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <h4 className="text-white mb-3">What to expect:</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Weekly security threat updates and alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Monthly best practices and tips</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Instant critical security alerts</span>
                </li>
              </ul>
            </div>
            <p className="text-slate-400 text-sm text-center">
              Check your inbox for a confirmation email.
            </p>
          </div>
          <Button
            onClick={() => setShowThankYouDialog(false)}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white"
          >
            Got it, thanks!
          </Button>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
