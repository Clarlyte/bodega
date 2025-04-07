import { createContext, useContext, useState, ReactNode } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colors: {
    primary: string;
    background: string;
    foreground: string;
    text: string;
    border: string;
  };
}

const lightColors = {
  primary: '#007AFF',
  background: '#FFFFFF',
  foreground: '#000000',
  text: '#000000',
  border: '#E5E5E5',
};

const darkColors = {
  primary: '#0A84FF',
  background: '#000000',
  foreground: '#FFFFFF',
  text: '#FFFFFF',
  border: '#38383A',
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  colors: lightColors,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  const colors = theme === 'light' ? lightColors : darkColors;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
} 