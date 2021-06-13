import React from 'react';
import { ThemeContext } from '../../context/theme_context';

export default function Header() {
    const toggleAction = (themeMode, toggleThemeMode) => {
        let crescent = document.getElementById('crescent');
        let toggle = document.getElementById('toggle');
        let isActive = (themeMode === 'light-theme') ? true : false;
        let xPosition = isActive ? '85%' : '0';
        let scale = isActive ? '0.6' : '0';
        toggleThemeMode(isActive);
        crescent.style.transform = `scale(${scale})`;
        toggle.style.transform = `translateX(${xPosition})`;
    }
    return (
        <ThemeContext.Consumer>
            {({ themeMode, themeOptions, changeTheme, toggleThemeMode }) => (
                <header className={'app-header'}>
                    <h1><b>Theme Switcher</b></h1>
                    <div>
                        {/* <label htmlFor="themes">Change Theme:</label> */}

                        <select name="themes" id="theme" onChange={() => changeTheme(document.getElementById("theme").value)}>
                            {
                                themeOptions.map((val) => {
                                    return <option key={val.key} value={val.key}>{val.text}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className={'toggle-switch-container'}>
                        <input
                            type="checkbox"
                            id="switch"
                            checked={(themeMode === 'light-theme') ? true : false}
                            onChange={() => toggleAction(themeMode, toggleThemeMode)}
                        />
                        <label htmlFor="switch">
                            <div id={'toggle'} className="toggle"></div>
                            <div className="names">
                                <p className="light">Light</p>
                                <p className="dark">Dark</p>
                            </div>
                        </label>
                    </div>
                </header>
            )}
        </ThemeContext.Consumer>
    )
}
