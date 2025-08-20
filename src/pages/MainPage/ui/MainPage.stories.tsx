import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from 'shered/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

const meta = {
   title: 'pages/MainPage',
   component: MainPage,
   parameters: {
      layout: 'padded',
   },
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPageLight: Story = {

};
export const MainPageDark: Story = {
   decorators: ThemeDecorator(Theme.DARK)
};