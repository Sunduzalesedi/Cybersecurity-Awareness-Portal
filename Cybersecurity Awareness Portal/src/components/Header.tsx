import { Shield, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Training', id: 'training' },
    { name: 'Threats', id: 'threats' },
    { name: 'News', id: 'news' },
    { name: 'Resources', id: 'resources' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="bg-teal-500 p-2 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="text-white">SecureGuard</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-sm transition-colors ${
                  currentPage === link.id
                    ? 'text-teal-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => onNavigate('report')}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Report an Incident
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  currentPage === link.id
                    ? 'bg-teal-600 text-white'
                    : 'text-slate-300 hover:bg-slate-700'
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => {
                onNavigate('report');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-red-600 hover:bg-red-700 text-white"
            >
              Report an Incident
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
