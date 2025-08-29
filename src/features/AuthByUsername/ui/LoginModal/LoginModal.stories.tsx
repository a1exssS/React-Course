import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { LoginModal } from './LoginModal';
import { StoreDecorator } from 'shered/config/storybook/StoreDecorator/StoreDecorator';


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
      onClose: () => false,
   },
   decorators: StoreDecorator({ login: { username: 'alex', password: '123' } })
};

