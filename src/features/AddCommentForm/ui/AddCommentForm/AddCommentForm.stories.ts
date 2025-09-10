import type { Meta, StoryObj } from '@storybook/react-webpack5';
import AddCommentForm from './AddCommentForm';
import { StoreDecorator } from 'shered/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
   title: 'features/AddCommentForm',
   component: AddCommentForm,
   parameters: {
      layout: 'padded',
   },
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
   args: {
      onSendComment(text) {
         return "text"
      },
   },
   decorators: StoreDecorator({ addCommentForm: { error: '', text: 'title' } })
};
