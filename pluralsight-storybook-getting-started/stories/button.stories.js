import React from "react";
import { storiesOf } from "@storybook/react";
import CallToAction from "../components/form/cta-button";
import { action } from "@storybook/addon-actions";

storiesOf("Building Blocks | Input", module).add("CallToAction", () => (
  <CallToAction label="Submit" onClick={action("button-click")} />
));
