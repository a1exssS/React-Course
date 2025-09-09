import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ProfileCard from './ProfileCard';
import { CountryList } from 'entities/Country';
import { CurrencyList } from 'entities/Currency';

const meta = {
   title: 'entities/ProfileCard',
   component: ProfileCard,
   parameters: {
      layout: 'padded',
   },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
   args: {
      data: {
         age: 20,
         avatar: "https://play-lh.googleusercontent.com/Dj7cruHjT5ejOFrF5HcW2Ryo-n79imSBbUf2OVfrZkUII1httatA30zl5-x8JSBdLzG-",
         city: "asdf",
         country: CountryList.Russia,
         currency: CurrencyList.USD,
         firstname: 'alex',
         lastname: 'volkov',
         username: 'a1exssio'
      }
   }
};

export const DefaultError: Story = {
   args: {
      error: 'Error'
   }
}
export const DefaultLoading: Story = {
   args: {
      isLoading: true
   }
}
