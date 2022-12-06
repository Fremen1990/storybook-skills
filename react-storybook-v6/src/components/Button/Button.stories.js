import React from 'react';
import Input from "./Button";

export default {
    title: 'Form/Button',
    component: Input
}

export const Primary = () => <Input variant="primary">Small</Input>
export const Secondary = () => <Input variant="secondary">Medium</Input>
export const Success = () => <Input variant="success">Large</Input>

