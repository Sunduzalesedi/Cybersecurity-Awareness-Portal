import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hello! I\'m your AI Security Assistant. How can I help you today?',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickActions = [
    'How do I report phishing?',
    'Password reset help',
    'What is MFA?',
    'VPN connection issues',
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    setMessages([...messages, { type: 'user', text: message }]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const responses: Record<string, string> = {
        'How do I report phishing?': 'To report phishing, forward the suspicious email to security@company.com or use the "Report an Incident" button in the header. Never click links or download attachments from suspicious emails.',
        'Password reset help': 'To reset your password, go to the IT portal or contact the help desk at 1-800-SECURE-NOW. Make sure your new password is at least 12 characters with a mix of letters, numbers, and symbols.',
        'What is MFA?': 'Multi-Factor Authentication (MFA) adds an extra security layer by requiring two or more verification methods. This typically includes your password plus a code sent to your phone.',
        'VPN connection issues': 'For VPN issues, first restart the VPN client. If problems persist, check your internet connection or contact IT support. Make sure you\'re using the latest version of the VPN software.',
      };

      const response = responses[message] || 'I understand you need help with that. For detailed assistance, please contact our security team at security@company.com or call 1-800-SECURE-NOW.';

      setMessages((prev) => [...prev, { type: 'bot', text: response }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="bg-teal-600 hover:bg-teal-700 text-white rounded-full w-16 h-16 shadow-2xl"
            >
              <MessageCircle className="h-7 w-7" />
            </Button>
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 rounded-full animate-pulse"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]"
          >
            <Card className="bg-slate-900 border-slate-800 shadow-2xl">
              <CardHeader className="border-b border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">AI Security Assistant</CardTitle>
                    <CardDescription className="text-slate-400">
                      Ask about threats in real time
                    </CardDescription>
                  </div>
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    className="text-slate-400 hover:text-white"
                    size="sm"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {/* Messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.type === 'user'
                            ? 'bg-teal-600 text-white'
                            : 'bg-slate-800 text-slate-200'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="border-t border-slate-800 p-4 space-y-2">
                  <p className="text-slate-400 text-xs mb-2">Quick actions:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={() => handleSendMessage(action)}
                        className="text-left text-xs p-2 bg-slate-800 hover:bg-slate-700 rounded text-slate-300 transition-colors"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="border-t border-slate-800 p-4">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage(inputValue);
                    }}
                    className="flex gap-2"
                  >
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your question..."
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 flex-1"
                    />
                    <Button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white">
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
