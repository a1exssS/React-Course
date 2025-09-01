import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { PartialStoryFn } from 'storybook/internal/csf';
import { ReactRenderer } from '@storybook/react-webpack5';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shered/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
   login: loginReducer,
   profile: profileReducer
}

export const StoreDecorator = (
   state: DeepPartial<StateSchema>,
   asyncReducers?: ReducersList
) =>
   (StoryComponent: PartialStoryFn<ReactRenderer, { [x: string]: any; }>) => (

      <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
         <StoryComponent />
      </StoreProvider>
   );
