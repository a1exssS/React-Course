import { ReactRenderer } from '@storybook/react-webpack5';
import { PartialStoryFn } from 'storybook/internal/csf';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = () => (StoryComponent: PartialStoryFn<ReactRenderer, { [x: string]: any; }>) => {
   return (
      <BrowserRouter>
         <StoryComponent />
      </BrowserRouter>
   )
}
