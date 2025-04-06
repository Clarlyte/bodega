import { LucideProps } from 'lucide-react-native';

declare module 'lucide-react-native' {
  interface LucideProps {
    stroke?: string;
    color?: string;
  }
} 