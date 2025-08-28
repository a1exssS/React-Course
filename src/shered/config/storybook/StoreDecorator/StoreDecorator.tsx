import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { PartialStoryFn } from 'storybook/internal/csf';
import { ReactRenderer } from '@storybook/react-webpack5';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: PartialStoryFn<ReactRenderer, { [x: string]: any; }>) => (
   <StoreProvider initialState={state}>
      <StoryComponent />
   </StoreProvider>
);
