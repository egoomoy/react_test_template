import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        // 추가
        component: `버튼 컴포넌트에 대한 설명을 작성합니다.`,
      },
    },
    playground: {
      // title of your story (including category prefix, if there is one)
      storyId: 'playground',
      components: { ...Button },
      editorTheme: 'light', // optional - set this to override your storybook's theme
      introCode: { jsx: `<div>Welcome to my Playground!</div>`, css: '' }, // optional - set this to introdoce a "welcome" code example
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;

type ButtonStory = StoryObj<typeof meta>;

export const Basic: ButtonStory = {
  args: {
    variant: 'contained',
    label: 'Default',
  },
};

export const Primary: ButtonStory = {
  args: {
    ...Basic.args,
    color: 'primary',
    label: 'Primary',
  },
};

export const Secondary: ButtonStory = {
  args: {
    ...Basic.args,
    color: 'secondary',
    label: 'Secondary',
  },
};

export const Disabled: ButtonStory = {
  args: {
    ...Basic.args,
    disabled: true,
  },
};
