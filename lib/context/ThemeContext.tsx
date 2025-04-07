import React, { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeColors {
  primary: string;
  background: string;
  text: string;
  border: string;
}

interface ThemeContextType {
  theme: Theme;
  colors: ThemeColors;
  toggleTheme: () => void;
}

const lightColors: ThemeColors = {
  primary: '#007AFF',
  background: '#FFFFFF',
  text: '#000000',
  border: '#E5E5E5',
};

const darkColors: ThemeColors = {
  primary: '#0A84FF',
  background: '#000000',
  text: '#FFFFFF',
  border: '#38383A',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  const colors = theme === 'light' ? lightColors : darkColors;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 