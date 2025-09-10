import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Code } from './Code';

const meta = {
   title: 'shared/Code',
   component: Code,
   parameters: {
      layout: 'padded',
   },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
   args: {
      text: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
   },
};