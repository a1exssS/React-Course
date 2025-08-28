import { ReactRenderer } from '@storybook/react-webpack5';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { PartialStoryFn } from 'storybook/internal/csf';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: PartialStoryFn<ReactRenderer, { [x: string]: any; }>) => {

   return (
      <ThemeProvider initialTheme={theme}>
         <StoryComponent />
      </ThemeProvider>
   )
}
