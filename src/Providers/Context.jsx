import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const Context = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const textColor = {
    color: theme === true ? "white" : "",
  };

  const backgroung = {
    backgroundColor: theme === true ? "black" : "",
  };

  return (
    <ThemeContext.Provider value={[theme, setTheme, textColor, backgroung]}>
      {children}
    </ThemeContext.Provider>
  );
};
