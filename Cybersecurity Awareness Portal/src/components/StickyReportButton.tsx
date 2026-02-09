import { AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface StickyReportButtonProps {
  onNavigate: (page: string) => void;
}

export function StickyReportButton({ onNavigate }: StickyReportButtonProps) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-24 right-6 z-40 hidden md:block"
    >
      <Button
        onClick={() => onNavigate('report')}
        className="bg-red-600 hover:bg-red-700 text-white shadow-2xl px-6 py-6 rounded-full"
      >
        <AlertCircle className="mr-2 h-5 w-5" />
        Quick Report
      </Button>
    </motion.div>
  );
}
