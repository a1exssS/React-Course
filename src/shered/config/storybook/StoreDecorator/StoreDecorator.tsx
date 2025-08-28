import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { PartialStoryFn } from 'storybook/internal/csf';
import { ReactRenderer } from '@storybook/react-webpack5';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
   login: loginReducer
}

export const StoreDecorator = (
   state: DeepPartial<StateSchema>,
   asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) =>
   (StoryComponent: PartialStoryFn<ReactRenderer, { [x: string]: any; }>) => (

      <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
         <StoryComponent />
      </StoreProvider>
   );
