import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from 'shered/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Tabs } from './Tabs';

const meta = {
   title: 'shared/Tabs',
   component: Tabs,
   parameters: {
      layout: 'padded',
   },

   tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabsLight: Story = {
   args: {
      tabs: [
         { content: 'tab 1', value: 'tab 1' },
         { content: 'tab 2', value: 'tab 2' },
         { content: 'tab 3', value: 'tab 3' },

      ],
      value: 'tab 2',
      onTabClick: () => null
   }

};
export const TabsDark: Story = {
   args: {
      tabs: [
         { content: 'tab 1', value: 'tab 1' },
         { content: 'tab 2', value: 'tab 2' },
         { content: 'tab 3', value: 'tab 3' },

      ],
      value: 'tab 2',
      onTabClick: () => null
   },
   decorators: ThemeDecorator(Theme.DARK)
};