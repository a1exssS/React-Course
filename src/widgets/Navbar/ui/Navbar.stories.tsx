import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from 'shered/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';

const meta = {
   title: 'widget/Navbar',
   component: Navbar,
   parameters: {
      layout: 'padded',
   },
   tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarLight: Story = {
   args: {

   },
};
export const NavbarDark: Story = {
   decorators: ThemeDecorator(Theme.DARK)
};