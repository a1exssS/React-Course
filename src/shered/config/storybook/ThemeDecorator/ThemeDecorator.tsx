import { ReactRenderer } from '@storybook/react-webpack5';
import { Theme } from 'app/providers/ThemeProvider';
import { PartialStoryFn } from 'storybook/internal/csf';
import { ClearComponent } from '../ClearComponent';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: PartialStoryFn<ReactRenderer, { [x: string]: any; }>) => {

   return (
      <ClearComponent styles={{ width: "100%" }} className={`app ${theme}`}>
         <StoryComponent />
      </ClearComponent>
   )
}
