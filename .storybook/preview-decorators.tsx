import { Decorator } from '@storybook/react';
import React from 'react';
import { SettingsProvider } from '../src/theme/settings/context/settings-provider';
import ThemeProvider from '../src/theme';

const previewDecorator: Decorator = (Story, context) => {
  const { mode } = context.globals;

  const dayAndNight = React.useMemo(() => {
    switch (mode) {
      case 'light':
        return 'light';

      case 'dark':
        return 'dark';

      default:
        return 'light';
    }
  }, [mode]);

  return (
    <SettingsProvider
      defaultSettings={{
        themeMode: dayAndNight, // 'light' | 'dark'
        themeContrast: 'bold', // 'default' | 'bold'
        themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
        themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
        themeStretch: false,
      }}
    >
      <ThemeProvider>
        <Story {...context} />
      </ThemeProvider>
    </SettingsProvider>
  );
};

export default [previewDecorator];
