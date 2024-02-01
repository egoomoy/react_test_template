import { Theme, alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// ---- kanban 껍데기 담는 부분
export function paper(theme: Theme) {
  return {
    MuiPaper: {
      
      styleOverrides: {
        root: {
          backgroundImage: 'none',
   //       width: '80%', 
        },
        outlined: {
          borderColor: alpha(theme.palette.grey[500], 0.16),
        },
      },
    },
  };
}
