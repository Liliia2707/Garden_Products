import { createContext, useState } from "react";

export const ThemeContext = createContext();

function Context({ children }) {
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
}

export default Context;
