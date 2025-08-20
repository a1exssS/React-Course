import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from 'shered/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta = {
   title: 'widget/Sidebar',
   component: Sidebar,
   parameters: {
      layout: 'padded',
   },
   tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarLight: Story = {
   args: {

   },
};
export const SidebarDark: Story = {
   decorators: ThemeDecorator(Theme.DARK)
};