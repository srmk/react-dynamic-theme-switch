import React from 'react';

export const themeContextDefaults = {
    selectedTheme: '',
    themeMode: 'light-theme',
    themeOptions: [],
    themes: [],
    changeTheme: () => { },
    toggleThemeMode: () => { }
};

export const ThemeContext = React.createContext(themeContextDefaults);