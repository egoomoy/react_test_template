import { Theme } from '@mui/material/styles';
import { tabClasses } from '@mui/material/Tab';

// ----------------------------------------------------------------------

export function tabs(theme: Theme) {
  return {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: theme.palette.text.primary,
        },
        scrollButtons: {
          width: 48,
          borderRadius: '50%',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: 0,
          opacity: 1,
          minWidth: 48,
          minHeight: 48,
          fontWeight: theme.typography.fontWeightSemiBold,
          '&:not(:last-of-type)': {
            marginRight: theme.spacing(1),
            [theme.breakpoints.up('sm')]: {
              marginRight: theme.spacing(1),
            },
          },
          [`&:not(.${tabClasses.selected})`]: {
            color: theme.palette.text.secondary,
          },
        },
      },
    },
  };
}
