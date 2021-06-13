import themes1 from '../themes/theme.json';
import themes2 from '../themes/theme2.json';
import { getAppThemes } from '../helper/theme_helper';


export async function initialAPICalls() {
    const themes = await fetchTheme();

    return {
        themes,
    }
}


export async function fetchTheme() {
    try {
        const thems = [themes1, themes2]
        let myThemes = await thems;
        if (myThemes) {
            return getAppThemes(myThemes);
        }
    } catch (error) {
        console.log("There is some problem.", error);
    }
}