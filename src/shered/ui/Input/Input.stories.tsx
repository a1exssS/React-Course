import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Input } from './Input';

const meta = {
   title: 'shared/Input',
   component: Input,
   parameters: {
      layout: 'padded',
   },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
   args: {
      value: 'text',
   },
};
export const DefaultPlaceholder: Story = {
   args: {
      value: 'text',
      placeholder: 'insert text'
   },
};