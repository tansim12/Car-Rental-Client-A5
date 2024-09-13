import { Switch } from 'antd';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons

const ThemeToggle = () => {
  // Initialize with dark mode enabled by default
  const [darkMode, setDarkMode] = useState(true);

  // Check local storage or system preference
  useEffect(() => {
    const darkModePreference = localStorage.getItem('theme');
    if (darkModePreference === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (darkModePreference === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // If no preference is set, use system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(systemPrefersDark);
      document.documentElement.classList.toggle('dark', systemPrefersDark);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} bg-pageBg-light dark:bg-pageBg-dark flex items-center justify-center rounded-xl`}>
    <div className="flex items-center gap-4">
      {/* Ant Design Switch */}
      <Switch
        checked={darkMode}
        onChange={toggleDarkMode}
        checkedChildren={<FaSun size={20} className="text-secondary" />}
        unCheckedChildren={<FaMoon size={20}  className="text-blue-500" />}
        className="transition duration-300 ease-in-out"
      />
    </div>
  </div>
  );
};

export default ThemeToggle;
