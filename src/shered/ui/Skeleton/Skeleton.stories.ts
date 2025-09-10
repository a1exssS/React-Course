import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Skeleton } from './Skeleton';
import { ThemeDecorator } from 'shered/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
   title: 'shared/Skeleton',
   component: Skeleton,
   parameters: {
      layout: 'padded',
   },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Circle: Story = {
   args: {
      borderRadius: "50%",
      height: 140,
      width: 140
   },
};
export const Rectengle: Story = {
   args: {
      borderRadius: "0",
      height: 400,
      width: "100%"
   },
   decorators: ThemeDecorator(Theme.DARK)
};