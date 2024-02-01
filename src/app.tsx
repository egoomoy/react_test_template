import Button from '@mui/material/Button';

import ThemeProvider from 'src/theme';
import { SettingsProvider } from 'src/theme/settings/context';

import Iconify from 'src/components/iconify';

import './App.css';

export default function App() {
  return (
    <SettingsProvider
      defaultSettings={{
        themeMode: 'light', // 'light' | 'dark'
        themeContrast: 'default', // 'default' | 'bold'
        themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
        themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
        themeStretch: false,
      }}
    >
      <ThemeProvider>
        <Button color="error" variant="contained" startIcon={<Iconify icon="mingcute:add-line" />}>
          New User
        </Button>
      </ThemeProvider>
    </SettingsProvider>
  );
}
