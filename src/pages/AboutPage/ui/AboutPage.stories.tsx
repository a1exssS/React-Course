import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from 'shered/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

const meta = {
   title: 'pages/AboutPage',
   component: AboutPage,
   parameters: {
      layout: 'padded',
   },
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AboutPageLight: Story = {

};
export const AboutPageDark: Story = {
   decorators: ThemeDecorator(Theme.DARK)
};