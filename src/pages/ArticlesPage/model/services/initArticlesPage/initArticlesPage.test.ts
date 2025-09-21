import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { testAsyncThunk } from 'shered/lib/testAsyncThunk/testAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
// import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('initArticlesPage', () => {
   let dispatch: Dispatch;
   let getState: () => StateSchema;

   beforeEach(() => {
      dispatch = jest.fn();
      getState = jest.fn();
   })
   test('success', async () => {

      const thunk = new testAsyncThunk(initArticlesPage, {
         articlePage: {
            page: 2,
            ids: [],
            entities: {},
            limit: 5,
            isLoading: false,
            hasMore: true,
            _inited: false
         }
      })
      // await thunk.callThunk()
      // expect(thunk.dispatch).toHaveBeenCalledTimes(4)
      // expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 })

   })
   test('not called', async () => {

      const thunk = new testAsyncThunk(initArticlesPage, {
         articlePage: {
            page: 2,
            ids: [],
            entities: {},
            limit: 5,
            isLoading: false,
            hasMore: true,
            _inited: true,
         }
      })
      // await thunk.callThunk()
      // expect(thunk.dispatch).toHaveBeenCalledTimes(2)
      //  expect(fetchArticlesList).not.toHaveBeenCalled()

   })

})