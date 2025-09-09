import { fetchProfileData } from './fetchProfileData';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { CountryList } from 'entities/Country';
import { CurrencyList } from 'entities/Currency';
import { testAsyncThunk } from 'shered/lib/testAsyncThunk/testAsyncThunk';



describe('fetchProfileData', () => {
   let dispatch: Dispatch;
   let getState: () => StateSchema;

   beforeEach(() => {
      dispatch = jest.fn();
      getState = jest.fn();
   })
   test('return success', async () => {
      const data = {
         age: 20,
         avatar: "https://play-lh.googleusercontent.com/Dj7cruHjT5ejOFrF5HcW2Ryo-n79imSBbUf2OVfrZkUII1httatA30zl5-x8JSBdLzG-",
         city: "asdf",
         country: CountryList.Russia,
         currency: CurrencyList.USD,
         firstname: 'alex',
         lastname: 'volkov',
         username: 'a1exssio'

      }


      const thunk = new testAsyncThunk(fetchProfileData)
      thunk.api.get.mockReturnValue(Promise.resolve({ data: data }))
      const result = await thunk.callThunk()

      expect(thunk.api.get).toHaveBeenCalled();
      expect(result.meta.requestStatus).toBe('fulfilled')
      expect(result.payload).toEqual(data)
   })
   test('return reject', async () => {

      const thunk = new testAsyncThunk(fetchProfileData)
      thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
      const result = await thunk.callThunk()

      expect(result.meta.requestStatus).toBe('rejected')
   })
})