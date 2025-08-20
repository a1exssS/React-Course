import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from 'shered/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
   title: 'shared/AppLink',
   component: AppLink,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   args: {
      to: '',
   }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppLinkPrimary: Story = {
   args: {
      children: "Text",
      theme: AppLinkTheme.PRIMARY
   }
};
export const AppLinkPrimaryDark: Story = {
   args: {
      children: "Text",
      theme: AppLinkTheme.PRIMARY
   },
   decorators: ThemeDecorator(Theme.DARK)
};
export const AppLinkSecondary: Story = {
   args: {
      children: "Text",
      theme: AppLinkTheme.SECONDARY
   }
};
export const AppLinkSecondaryDark: Story = {
   args: {
      children: "Text",
      theme: AppLinkTheme.SECONDARY
   },
   decorators: ThemeDecorator(Theme.DARK)
};