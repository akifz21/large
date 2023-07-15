import { useSelector } from "react-redux";

const useLanguage = () => useSelector((state: any) => state.site.language);
const useTheme = () => useSelector((state: any) => state.site.theme);

export { useLanguage, useTheme };
