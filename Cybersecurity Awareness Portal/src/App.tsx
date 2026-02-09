import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { TrainingPage } from './components/TrainingPage';
import { ThreatIntelligencePage } from './components/ThreatIntelligencePage';
import { IncidentReportPage } from './components/IncidentReportPage';
import { PoliciesPage } from './components/PoliciesPage';
import { ContactPage } from './components/ContactPage';
import { AboutPage } from './components/AboutPage';
import { NewsEventsPage } from './components/NewsEventsPage';
import { PhishingTrainingModule } from './components/PhishingTrainingModule';
import { RansomwareResponseModule } from './components/RansomwareResponseModule';
import { IncidentReportingTrainingModule } from './components/IncidentReportingTrainingModule';
import { SecurityUpdatesModule } from './components/SecurityUpdatesModule';
import { PasswordGuidelinesPage } from './components/PasswordGuidelinesPage';
import { IncidentResponseGuide } from './components/IncidentResponseGuide';
import { SpotThreatsPage } from './components/SpotThreatsPage';
import { IncidentResponseQuickGuide } from './components/IncidentResponseQuickGuide';
import { PhishingRedFlagsCheatSheet } from './components/PhishingRedFlagsCheatSheet';
import { PasswordSecurityCheatSheet } from './components/PasswordSecurityCheatSheet';
import { SocialEngineeringDefenseGuide } from './components/SocialEngineeringDefenseGuide';
import { FloatingChatbot } from './components/FloatingChatbot';
import { StickyReportButton } from './components/StickyReportButton';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartModule = (moduleId: string) => {
    setCurrentPage(`module-${moduleId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleModuleComplete = () => {
    // Handle module completion (could update user progress, etc.)
    console.log('Module completed!');
  };

  const handleExitModule = () => {
    setCurrentPage('training');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'training':
        return <TrainingPage onStartModule={handleStartModule} />;
      case 'threats':
        return <ThreatIntelligencePage />;
      case 'report':
        return <IncidentReportPage />;
      case 'resources':
      case 'policies':
        return <PoliciesPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'news':
        return <NewsEventsPage />;
      case 'module-phishing':
        return <PhishingTrainingModule onComplete={handleModuleComplete} onExit={handleExitModule} />;
      case 'module-ransomware':
        return <RansomwareResponseModule onComplete={handleModuleComplete} onExit={handleExitModule} />;
      case 'module-incident-reporting':
        return <IncidentReportingTrainingModule onComplete={handleModuleComplete} onExit={handleExitModule} />;
      case 'module-security-updates':
        return <SecurityUpdatesModule onComplete={handleModuleComplete} onExit={handleExitModule} />;
      case 'password-guidelines':
        return <PasswordGuidelinesPage />;
      case 'incident-response-guide':
        return <IncidentResponseGuide />;
      case 'spot-threats':
        return <SpotThreatsPage />;
      case 'cheatsheet-incident-response':
        return <IncidentResponseQuickGuide onClose={() => handleNavigate('policies')} />;
      case 'cheatsheet-phishing':
        return <PhishingRedFlagsCheatSheet onClose={() => handleNavigate('policies')} />;
      case 'cheatsheet-password':
        return <PasswordSecurityCheatSheet onClose={() => handleNavigate('policies')} />;
      case 'cheatsheet-social-engineering':
        return <SocialEngineeringDefenseGuide onClose={() => handleNavigate('policies')} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <FloatingChatbot />
      <StickyReportButton onNavigate={handleNavigate} />
    </div>
  );
}
