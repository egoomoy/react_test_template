import type { Preview } from '@storybook/react';
import previewDecorator from './preview-decorators';

const preview: Preview = {
  decorators: previewDecorator,
  globalTypes: {
    mode: {
      description: 'Mode for preview area',
      defaultValue: 'light',
      toolbar: {
        title: 'Mode',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'starhollow', title: 'light' },
          { value: 'dark', icon: 'star', title: 'dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
