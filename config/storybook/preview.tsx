import '../../src/app/styles/index.scss'
import type { Preview } from '@storybook/react-webpack5'
import { RouterDecorator } from '../../src/shered/config/storybook/RouterDecorator/RouterDecorator.tsx'

const preview: Preview = {
   parameters: {
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },
   },
   decorators: [
      (Story) => (<div className='app light'><Story /></div>),
      RouterDecorator()
   ]
};

export default preview;