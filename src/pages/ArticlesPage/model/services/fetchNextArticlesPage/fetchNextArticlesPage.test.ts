import { testAsyncThunk } from 'shered/lib/testAsyncThunk/testAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('fetchNextArticlesPage.test', () => {
   test('success', async () => {
      const thunk = new testAsyncThunk(fetchNextArticlesPage, {
         articlePage: {
            page: 2,
            ids: [],
            entities: {},
            limit: 5,
            isLoading: false,
            hasMore: true,
         },
      });

      await thunk.callThunk();

      expect(thunk.dispatch).toHaveBeenCalledTimes(4);
      // expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
   });
   test('fetchAritcleList not called', async () => {
      const thunk = new testAsyncThunk(fetchNextArticlesPage, {
         articlePage: {
            page: 2,
            ids: [],
            entities: {},
            limit: 5,
            isLoading: false,
            hasMore: false,
         },
      });

      await thunk.callThunk();

      expect(thunk.dispatch).toHaveBeenCalledTimes(2);
      expect(fetchArticlesList).not.toHaveBeenCalled();
   });
});