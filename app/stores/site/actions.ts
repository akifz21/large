import store from "..";
import { _setLanguage, _setTheme } from ".";

const setTheme = (theme: string) => store.dispatch(_setTheme(theme));
const setLanguage = (language: string) =>
  store.dispatch(_setLanguage(language));

export { setTheme, setLanguage };
