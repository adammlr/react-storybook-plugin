import React, { useState, useEffect } from "react";
import { redTheme, purpleTheme } from "../../src/themes";
import { ThemeProvider as MUIThemeProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import addonAPI from "@storybook/addons";
const storageKey = "theme";

export const SET_THEME_EVENT = "theme/set";

export function themeDecorator(storyFn) {
  const [currentTheme, setCurrentTheme] = useState(redTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme) {
      setThemeFromName(savedTheme);
    }

    const channel = addonAPI.getChannel();

    channel.on(SET_THEME_EVENT, channelListener);

    return function cleanup() {
      channel.off(SET_THEME_EVENT, channelListener);
    };
  }, []);

  function channelListener(themeName) {
    setNewTheme(themeName);
  }

  function setNewTheme(themeName) {
    if (themeName) {
      setThemeFromName(themeName);
      localStorage.setItem(storageKey, themeName);
    }
  }

  function setThemeFromName(themeName) {
    switch (themeName) {
      case "purple":
        setCurrentTheme(purpleTheme);
        break;
      case "red":
      default:
        setCurrentTheme(redTheme);
        break;
    }
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <MUIThemeProvider theme={currentTheme}>{storyFn()}</MUIThemeProvider>
    </ThemeProvider>
  );
}
