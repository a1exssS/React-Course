import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shered/config/storybook/StoreDecorator/StoreDecorator';
import { CountryList } from 'entities/Country';
import { CurrencyList } from 'entities/Currency';

const meta = {
   title: 'pages/ProfilePage',
   component: ProfilePage,
   parameters: {
      layout: 'padded',
   },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfilePageLight: Story = {
   args: {},
   decorators: [StoreDecorator({
      profile: {
         form: {
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
   })]
};