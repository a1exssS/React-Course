import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from 'shered/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ErrorPage } from './ErrorPage';

const meta = {
   title: 'pages/ErrorPage',
   component: ErrorPage,
   parameters: {
      layout: 'padded',
   },
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ErrorPageLight: Story = {
};
export const ErrorPageDark: Story = {
   decorators: ThemeDecorator(Theme.DARK)
};