import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { LoginForm } from './LoginForm';

const meta = {
   title: 'features/LoginForm',
   component: LoginForm,
   parameters: {
      layout: 'padded',
   },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {

};