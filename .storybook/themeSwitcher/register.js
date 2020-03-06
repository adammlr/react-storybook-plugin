import React from "react";
import { addons, types } from "@storybook/addons";
import { AddonPanel } from "@storybook/components";
import { redTheme, purpleTheme } from "../../src/themes";
import { SET_THEME_EVENT } from "./decorator";

const ADDON_ID = "themeSwitcher";
const PARAM_KEY = "themeSwitcher";
const PANEL_ID = `${ADDON_ID}/panel`;

addons.register(ADDON_ID, api => {
  const channel = addons.getChannel();

  const render = ({ active, key }) => (
    <AddonPanel active={active} key={key}>
      <button
        style={{
          backgroundColor: redTheme.palette.primary.main,
          border: "none",
          borderRadius: "3px",
          color: "white",
          cursor: "pointer",
          fontSize: "1.1em",
          margin: "5px",
          padding: "5px"
        }}
        onClick={() => {
          channel.emit(SET_THEME_EVENT, "red");
        }}
      >
        Red
      </button>

      <button
        style={{
          backgroundColor: purpleTheme.palette.primary.main,
          border: "none",
          borderRadius: "3px",
          color: "white",
          cursor: "pointer",
          fontSize: "1.1em",
          margin: "5px",
          padding: "5px"
        }}
        onClick={() => {
          channel.emit(SET_THEME_EVENT, "purple");
        }}
      >
        Purple
      </button>
    </AddonPanel>
  );

  const title = "Themes";

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title,
    render,
    paramKey: PARAM_KEY
  });
});
