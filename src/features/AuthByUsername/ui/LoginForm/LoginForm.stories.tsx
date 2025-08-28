import type { Meta, StoryObj } from '@storybook/react-webpack5';
import LoginForm from './LoginForm';
import { StoreDecorator } from 'shered/config/storybook/StoreDecorator/StoreDecorator';

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
   args: {},
   decorators: StoreDecorator({ login: { username: 'alex', password: '123' } })
};
export const DefaultError: Story = {
   args: {},
   decorators: StoreDecorator({ login: { username: 'alex', password: '123', error: 'error' } })
};
export const DefaultLoading: Story = {
   args: {},
   decorators: StoreDecorator({ login: { username: 'alex', password: '123', isLoading: true } })
};