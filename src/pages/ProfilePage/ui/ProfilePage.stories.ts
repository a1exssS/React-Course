import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ProfilePage from './ProfilePage';

const meta = {
   title: 'pages/ProfilePage',
   component: ProfilePage,
   parameters: {
      layout: 'padded',
   },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPageLight: Story = {
};
export const MainPageDark: Story = {
};