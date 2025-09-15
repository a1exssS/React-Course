import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';

import { Card } from './Card';

const meta = {
   title: 'shared/Card',
   component: Card,
   parameters: {
      layout: 'padded',
   },
   tags: ['autodocs'],
   args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
   args: {
      children: 'Text Text Text v Text TextText'
   },
};