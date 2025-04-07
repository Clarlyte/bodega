import { createContext, useContext, useState, ReactNode } from 'react';
import { COLORS } from '../constants/theme';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colors: {
    primary: string;
    background: string;
    text: string;
    border: string;
    accent: string;
    error: string;
    success: string;
    warning: string;
    muted: string;
  };
}

const lightColors = {
  primary: COLORS.primary,
  background: COLORS.background,
  text: COLORS.text,
  border: COLORS.border,
  accent: COLORS.accent,
  error: COLORS.error,
  success: COLORS.success,
  warning: COLORS.warning,
  muted: COLORS.textMuted,
};

const darkColors = {
  primary: COLORS.primaryLight,
  background: COLORS.backgroundDark,
  text: COLORS.textDark,
  border: COLORS.borderDark,
  accent: COLORS.accentLight,
  error: COLORS.error,
  success: COLORS.success,
  warning: COLORS.warning,
  muted: COLORS.textMuted,
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