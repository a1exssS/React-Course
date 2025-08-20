import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from 'shered/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Spiner } from './Spiner';

const meta = {
   title: 'shared/Spiner',
   component: Spiner,
   parameters: {
      layout: 'padded',
   },

   tags: ['autodocs'],
} satisfies Meta<typeof Spiner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpinerLight: Story = {

};
export const SpinerDark: Story = {
   decorators: ThemeDecorator(Theme.DARK)
};