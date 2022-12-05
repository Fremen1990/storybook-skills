import { addDecorator, addParameters, configure } from "@storybook/react";
import { crfTheme } from "./crfTheme";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";

import "../bootstrap-reboot.min.css";
import "../bootstrap.css";
import "../bootstrap-grid.css";
import "../main.css";

addParameters({
  options: {
    theme: crfTheme,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

addDecorator(
  withInfo({
    inline: true,
  })
);

// TODO 5 Using Add-ons - Knobs

addDecorator(
  withKnobs({
    escape: false,
  })
);

configure(loadStories, module);
