"use client";
import { useReducer, createContext, useContext } from "react";

type ThemeActionType = {
  type: "SET_THEME";
  payload: "light" | "dark" | "system";
};

type LanguageActionType = {
  type: "SET_LANGUAGE";
  payload: "tr" | "en";
};

type ActionType = ThemeActionType | LanguageActionType;

type StateType = {
  language: "tr" | "en";
  //   theme: "light" | "dark" | "system";
  theme: string;
};

const INITIAL_STATE: StateType = {
  language: "tr",
  theme:
    (typeof window !== "undefined" && localStorage.getItem("theme")) ||
    "system",
};

const SiteContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: INITIAL_STATE,
  dispatch: (action: ActionType) => {},
});

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export const SiteProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <SiteContext.Provider value={{ state, dispatch }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSiteContext = () => useContext(SiteContext);
