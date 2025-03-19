
import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: 'light';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme] = useState<'light'>('light');

  useEffect(() => {
    // Remove dark class if it exists
    document.documentElement.classList.remove('dark');
    
    // Store preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className="animate-theme-fade">{children}</div>
    </ThemeContext.Provider>
  );
};
