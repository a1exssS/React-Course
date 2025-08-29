import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { testAsyncThunk } from 'shered/lib/testAsyncThunk/testAsyncThunk';

jest.mock('axios')

// @ts-ignore
const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername', () => {
   let dispatch: Dispatch;
   let getState: () => StateSchema;

   beforeEach(() => {
      dispatch = jest.fn();
      getState = jest.fn();
   })
   test('return success', async () => {
      const userData = { data: { username: 'alex', id: '1' } }

      mockedAxios.post.mockReturnValue(Promise.resolve(userData))

      const thunk = new testAsyncThunk(loginByUsername)
      const result = await thunk.callThunk({ password: '123', username: '123' })

      expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthUser(userData.data))
      expect(thunk.dispatch).toHaveBeenCalledTimes(3)
      expect(mockedAxios.post).toHaveBeenCalled();
      expect(result.meta.requestStatus).toBe('fulfilled')
      expect(result.payload).toEqual(userData.data)
   })
   test('return reject', async () => {
      mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

      const thunk = new testAsyncThunk(loginByUsername)
      const result = await thunk.callThunk({ password: '123', username: '123' })

      expect(thunk.dispatch).toHaveBeenCalledTimes(2)
      expect(mockedAxios.post).toHaveBeenCalled();
      expect(result.meta.requestStatus).toBe('rejected')
      expect(result.payload).toBe('Вы ввели неверный логин или пароль')
   })
})