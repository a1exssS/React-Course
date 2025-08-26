import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { LoginModal } from './LoginModal';

const meta = {
   title: 'features/LoginModal',
   component: LoginModal,
   parameters: {
      layout: 'padded',
   },
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
   args: {
      isOpen: true,
      onClose: () => false
   },
};