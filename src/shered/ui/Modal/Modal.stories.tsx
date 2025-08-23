import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Modal } from './Modal';
import { ThemeDecorator } from 'shered/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
   title: 'shared/Modal',
   component: Modal,
   parameters: {
      layout: 'padded',
   },
   args: {
      isOpen: true,
   }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalLight: Story = {
   args: {
      children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptatem eaque illo officia hic quis explicabo, consectetur libero temporibus, nam porro ea saepe dolores illum eveniet voluptate! Tenetur, harum quo?',
   },
   decorators: ThemeDecorator(Theme.LIGHT)
};
export const ModalDark: Story = {
   args: {
      children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptatem eaque illo officia hic quis explicabo, consectetur libero temporibus, nam porro ea saepe dolores illum eveniet voluptate! Tenetur, harum quo?',
   },
   decorators: ThemeDecorator(Theme.DARK)
};
