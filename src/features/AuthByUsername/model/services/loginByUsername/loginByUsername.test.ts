import { loginByUsername } from './loginByUsername';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { testAsyncThunk } from 'shered/lib/testAsyncThunk/testAsyncThunk';



describe('loginByUsername', () => {
   let dispatch: Dispatch;
   let getState: () => StateSchema;

   beforeEach(() => {
      dispatch = jest.fn();
      getState = jest.fn();
   })
   test('return success', async () => {
      const userData = { data: { username: 'alex', id: '1' } }


      const thunk = new testAsyncThunk(loginByUsername)
      thunk.api.post.mockReturnValue(Promise.resolve(userData))
      const result = await thunk.callThunk({ password: '123', username: '123' })

      expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthUser(userData.data))
      expect(thunk.dispatch).toHaveBeenCalledTimes(3)
      expect(thunk.api.post).toHaveBeenCalled();
      expect(result.meta.requestStatus).toBe('fulfilled')
      expect(result.payload).toEqual(userData.data)
   })
   test('return reject', async () => {

      const thunk = new testAsyncThunk(loginByUsername)
      thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
      const result = await thunk.callThunk({ password: '123', username: '123' })

      expect(thunk.dispatch).toHaveBeenCalledTimes(2)
      expect(thunk.api.post).toHaveBeenCalled();
      expect(result.meta.requestStatus).toBe('rejected')
      expect(result.payload).toBe('Вы ввели неверный логин или пароль')
   })
})