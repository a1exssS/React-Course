import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { CommentCard } from './CommentCard';
// import { StoreDecorator } from 'shered/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
   title: 'entities/CommentCard',
   component: CommentCard,
   parameters: {
      layout: 'padded',
   },
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
   args: {
      comment: {
         comment: "text",
         id: "1",
         user: {
            id: '1',
            username: "alex",
            avatar: "https://play-lh.googleusercontent.com/Dj7cruHjT5ejOFrF5HcW2Ryo-n79imSBbUf2OVfrZkUII1httatA30zl5-x8JSBdLzG-"
         }
      }
   },
   // decorators: StoreDecorator({ ArticleDitailsComments: {} })
};
