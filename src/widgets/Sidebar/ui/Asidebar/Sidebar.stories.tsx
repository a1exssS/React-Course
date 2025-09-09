import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Sidebar } from './Sidebar';
import { StoreDecorator } from 'shered/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
   title: 'widget/Sidebar',
   component: Sidebar,
   parameters: {
      layout: 'padded',
   },
   tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarLightAuth: Story = {
   args: {

   },
   decorators: StoreDecorator({
      user: {
         authData: {}
      }
   })
};
export const SidebarLightNoAuth: Story = {
   args: {

   },
   decorators: StoreDecorator({
      user: {
         authData: undefined
      }
   })
};