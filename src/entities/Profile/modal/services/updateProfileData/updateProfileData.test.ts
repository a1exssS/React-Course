import { updateProfileData } from './updateProfileData';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { CountryList } from 'entities/Country';
import { CurrencyList } from 'entities/Currency';
import { testAsyncThunk } from 'shered/lib/testAsyncThunk/testAsyncThunk';
import { ValidateProfileError } from '../../types/profileSchema';

const data = {
   age: 20,
   avatar: "https://play-lh.googleusercontent.com/Dj7cruHjT5ejOFrF5HcW2Ryo-n79imSBbUf2OVfrZkUII1httatA30zl5-x8JSBdLzG-",
   city: "asdf",
   country: CountryList.Russia,
   currency: CurrencyList.USD,
   firstname: 'alex',
   lastname: 'volkov',
   username: 'a1exssio',
   id: '1'
}

describe('updateProfileData', () => {
   let dispatch: Dispatch;
   let getState: () => StateSchema;

   beforeEach(() => {
      dispatch = jest.fn();
      getState = jest.fn();
   })
   test('return success', async () => {



      const thunk = new testAsyncThunk(updateProfileData, {
         profile: {
            form: data
         }
      })
      thunk.api.put.mockReturnValue(Promise.resolve({ data }))
      const result = await thunk.callThunk()

      expect(thunk.api.put).toHaveBeenCalled();
      expect(result.meta.requestStatus).toBe('fulfilled')
      expect(result.payload).toEqual(data)
   })
   test('return server reject', async () => {

      const thunk = new testAsyncThunk(updateProfileData, {
         profile: {
            form: data
         }
      })
      thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
      const result = await thunk.callThunk()

      expect(result.meta.requestStatus).toBe('rejected')
      expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
   })
   test('return client reject', async () => {

      const thunk = new testAsyncThunk(updateProfileData, {
         profile: {
            form: { ...data, lastname: '' }
         }
      })
      const result = await thunk.callThunk()

      expect(result.meta.requestStatus).toBe('rejected')
      expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
   })
})