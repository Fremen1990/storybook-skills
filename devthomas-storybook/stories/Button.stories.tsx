import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';
import { action } from '@storybook/addon-actions';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Default Text',
    },
  },
  parameters: {
    actions: {
      handles: ['mouseover', 'click'],
    },
    // docs: {
    //   page: customMDXDocumentation,
    // },
  },
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.play = async ({ args, canvasElement }) => {
  // console.log({ args });
  const canvas = within(canvasElement);
  const button = await canvas.getByText('Default Text');
  expect(button).toBeInTheDocument();
  userEvent.click(button);
  expect(args.onClick).toHaveBeenCalledTimes(1);
  expect(args.variant).toBeUndefined();
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  children: 'I am secondary',
  onClick: action('secondary clicked'),
};

Secondary.play = async ({ args, canvasElement }) => {
  // console.log({ args });
  const canvas = within(canvasElement);
  const button = await canvas.getByText('I am secondary');
  expect(button).toBeInTheDocument();
  userEvent.click(button);
  expect(args.onClick).toHaveBeenCalledTimes(1);
  expect(args.variant).toEqual('secondary');
};
