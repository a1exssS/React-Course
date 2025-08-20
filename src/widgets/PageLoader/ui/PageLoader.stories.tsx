import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from 'shered/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageLoader } from './PageLoader';

const meta = {
   title: 'widget/PageLoader',
   component: PageLoader,
   parameters: {
      layout: 'padded',
   },
   tags: ['autodocs'],
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageLoaderLight: Story = {
};
export const PageLoaderDark: Story = {
   decorators: ThemeDecorator(Theme.DARK)
};