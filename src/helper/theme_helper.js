import _ from 'lodash';

// get initial themes list
export const getAppThemes = (themes) => {
    let themeOptions = [];

    if (themes) {
        themes.map((_, index) => {
            return themeOptions.push({ text: `Theme-${index}`, key: index });
        })
    }

    return {
        selectedTheme: themeOptions.length && themeOptions[0].key,
        themeOptions: themeOptions,
        themeVariables: themes
    }
}


/**
 * Helper function to set a new theme
 *
 * @param {string} theme The name of the theme to be set
 *
 * @return {void}
 */
export const applyTheme = (theme) => {
    const themeVariables = mapTheme(theme);

    if (!themeVariables) return;

    const root = document.documentElement;
    Object.keys(themeVariables).forEach((property) => {
        if (property === 'name') {
            return;
        }
        root?.style.setProperty(property, themeVariables[property]);
    });
};


export const mapTheme = (variables) => {
    let themeVariables = {};

    if (variables) {
        Object.keys(variables).map((key) => {
            return _.assign(themeVariables, { [`--${key}`]: variables[key] });

        })
    }

    return themeVariables;
};