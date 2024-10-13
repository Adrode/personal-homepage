const localStorageKey = "themeDark";

export const saveThemeInLocalStorage = theme =>
    localStorage.setItem(localStorageKey, JSON.stringify(theme));

export const getThemeFromLocalStorage = () => {
    try {
        return JSON.parse(localStorage.getItem(localStorageKey));
    } catch(error) {
        console.error("Error accessing localStorage: ", error);
    }
};