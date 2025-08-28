import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from 'shered/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageNotFound } from './PageNotFound';

const meta = {
   title: 'pages/PageNotFound',
   component: PageNotFound,
   parameters: {
      layout: 'padded',
   },
} satisfies Meta<typeof PageNotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageNotFoundLight: Story = {
};
export const PageNotFoundDark: Story = {
   decorators: ThemeDecorator(Theme.DARK)
};