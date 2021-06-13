import React, { useState, useMemo, useEffect } from 'react';
import { ThemeContext, themeContextDefaults } from './context/theme_context';
import { applyTheme } from './helper/theme_helper';
import { initialAPICalls } from './api';
import './style/App.scss';

import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [theme, setTheme] = useState({});
  const [themeMode, setThemeMode] = useState(themeContextDefaults.themeMode);
  const [themeOptions, setThemeOptions] = React.useState(themeContextDefaults.themeOptions);
  const [selectedTheme, setSelectedTheme] = React.useState(themeContextDefaults.selectedTheme);

  // theme update
  const themeContext = useMemo(
    () => ({
      ...themeContextDefaults,
      changeTheme: (data) => {
        setSelectedTheme(data);
        applyTheme(theme[data][themeMode]);
      },
      toggleThemeMode: (checked) => {
        let mode = checked ? 'dark-theme' : 'light-theme';
        setThemeMode(mode);
        applyTheme(theme[selectedTheme][mode]);
      },
      selectedTheme,
      themes: theme,
      themeMode,
      themeOptions,
    }),
    [selectedTheme, themeMode, theme, themeOptions],
  );

  useEffect(() => {
    fetchInitialDatas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchInitialDatas() {
    const data = await initialAPICalls();
    const { themes } = data;
    if (themes) {
      setThemeOptions(themes.themeOptions);
      setSelectedTheme(themes.selectedTheme);
      setTheme(themes.themeVariables);
      applyTheme(themes.themeVariables[themes.selectedTheme][themeMode]);
    }
  }

  return (
    <ThemeContext.Provider value={themeContext}>
      <div className={'app-container'}>
        <div className="circle">
          <div id={'crescent'} className="crescent"></div>
        </div>
        <Header />
        <main className={'main-container'}>
          <Home />
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
