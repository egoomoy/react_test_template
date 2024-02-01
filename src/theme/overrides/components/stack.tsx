import { Theme, alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// ---- stack 껍데기 담는 부분
export function stack(theme: Theme) {
  return {
    MuiStack: {
      
      styleOverrides: {
        root: {
        //   backgroundImage: 'none',
        //   display: 'flex',
        //   alignItems: 'center',

        },
        outlined: {
          borderColor: alpha(theme.palette.grey[500], 0.16),
        },
      },
    },
  };
}
