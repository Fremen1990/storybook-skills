import React from "react";
// import {ThemeProvider, theme, CSSReset} from "@chakra-ui/core";
// import Center from "../src/components/Center/Center";
import {addDecorator} from "@storybook/react";
import {Box, ChakraProvider} from '@chakra-ui/react'

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, {numeric: true}),
    },

}

// addDecorator(story =><Center>{story()}</Center>)
// addDecorator(story =><ThemeProvider theme={theme} ><CSSReset/>{story()}</ThemeProvider>)
addDecorator(story =>    <ChakraProvider resetCSS={true}  ><Box m="4">{story()}</Box></ChakraProvider>)


//todo React Storybook Tutorial - 6.2 - Decorators and Theming in V6