import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Select } from './Select';

const meta = {
   title: 'shared/Select',
   component: Select,
   parameters: {
      layout: 'padded',
   },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
   args: {
      label: 'hello',
      options: [
         { value: '123', content: 'text' },
         { value: '123', content: 'text' },
         { value: '123', content: 'text' },
         { value: '123', content: 'text' },
      ]
   },
};