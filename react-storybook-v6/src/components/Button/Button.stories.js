import React from 'react';
import Button from "./Button";
import Center from "../Center/Center"

export default {
    title: 'Form/Button',
    component: Button,
    // decorators:[story => <Center>{story()}</Center>]
    parameters:{
        actions:{
            handles:['mouseover', 'click']
        },

    }
}

export const Primary = () => <Button variant="primary">Small</Button>
export const Secondary = () => <Button variant="secondary">Medium</Button>
export const Success = () => <Button variant="success">Large</Button>

const Template = args => <Button {...args}/>

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args'
}

export const LongPrimary = Template.bind({})
LongPrimary.args = {
    ...PrimaryA.args,
    children: 'Long Primary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant:'secondary',
    children: 'Secondary Args'
}