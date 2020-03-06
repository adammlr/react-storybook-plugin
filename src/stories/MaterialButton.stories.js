import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@material-ui/core";

export default {
  title: "Material Button",
  component: Button
};

export const PrimaryColor = () => (
  <Button variant="contained" color="primary" onClick={action("clicked")}>
    Material Button
  </Button>
);
