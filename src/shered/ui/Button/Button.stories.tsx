import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';

import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shered/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
   title: 'shared/Button',
   component: Button,
   parameters: {
      layout: 'padded',
   },
   tags: ['autodocs'],
   args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OutlineDark: Story = {
   args: {
      children: 'Text',
      theme: ThemeButton.OUTLINE,
   },
   decorators: ThemeDecorator(Theme.DARK)
};
export const Outline: Story = {
   args: {
      children: 'Text',
      theme: ThemeButton.OUTLINE,
   },
};
export const Default: Story = {
   args: {
      children: 'Text'
   },
};