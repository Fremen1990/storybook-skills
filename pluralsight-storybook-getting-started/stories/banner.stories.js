import React from "react";
import { storiesOf } from "@storybook/react";
import MajorBanner from "../components/major.banner";
import MinorBanner from "../components/minor.banner";
import { text } from "@storybook/addon-knobs";

storiesOf("Component | Banners/Major", module)
  .addParameters({
    info: {
      text: `
      ### Some Markdown description as a documentation
      
      This is the major banner.
      
      ----
      **Some markdown styling** With some points
      
      -[x] some checkboxes
      -[x] some checkboxes
      -[x] some checkboxes
      `,
    },
  })
  .add("With Only Title", () => <MajorBanner title="Banner Title" />)
  .add("With All Text Options", () => {
    const title = text("Title", "Banner Title");
    return (
      <MajorBanner
        title={title}
        body="Banner Body"
        subtitle="Banner Subtitle"
        photo="People Outdoors/shutterstock_116403520.jpg"
      />
    );
  });

storiesOf("Component | Banners/Minor", module)
  .add(
    "No Picture",
    () => (
      <MinorBanner
        title="Banner Title"
        subtitle="Banner Subtitle"
        body="Banner Body"
      />
    ),
    // {
    //   info: {
    //     inline: false,
    //   },
    // }
  )
  .add("With Picture", () => (
    <MinorBanner
      title="Banner Title"
      subtitle="Banner Subtitle"
      body="Banner Body"
      leftPhoto="Products/boots/shutterstock_66842440.jpg"
      rightPhoto="Products/boots/shutterstock_1121278055.jpg"
    />
  ));
