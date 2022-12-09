import {Button} from '@chakra-ui/react'
import {action} from "@storybook/addon-actions";
import {parameters} from "../../../.storybook/preview";
import customMDXDocumentation from "./customMDXDocumentation.mdx"
import {within, userEvent} from '@storybook/testing-library';
import {expect} from '@storybook/jest';

export default {

    title: "Chakra/Button",
    component: Button,
    argTypes: {
        onClick: {actions: "onClick"},
    },
    parameters: {
        actions: {
            handles: ['mouseover', 'click']
        },
        docs: {
            page: customMDXDocumentation
        }
    }
}

const Template = (args) => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
    colorScheme: "green",
    children: "Success"
}
export const Danger = Template.bind({})
Danger.args = {
    colorScheme: "red",
    children: "Danger"
}

Danger.play = async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const button = await canvas.getByText("Danger")

}

Danger.play = async ({args, canvasElement}) => {
//     // console.log({args})
    const canvas = within(canvasElement)
    const button = await canvas.getByText("Danger")
    expect(button).toBeInTheDocument()
    userEvent.click(button)
    expect(args.onClick).toHaveBeenCalledTimes(1)
    expect(args.colorScheme).toEqual("red")

}
