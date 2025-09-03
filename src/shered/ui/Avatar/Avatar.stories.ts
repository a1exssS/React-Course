import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Avatar } from './Avatar';

const meta = {
   title: 'shared/Avatar',
   component: Avatar,
   parameters: {
      layout: 'padded',
   },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
   args: {
      src: 'https://play-lh.googleusercontent.com/Dj7cruHjT5ejOFrF5HcW2Ryo-n79imSBbUf2OVfrZkUII1httatA30zl5-x8JSBdLzG-'
   },
};