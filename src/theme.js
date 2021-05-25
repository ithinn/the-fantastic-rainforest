import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#196a73',
    },
    secondary: {
      main: '#fff',
    },
    action: {
      main: "#c0a320"
    },
    navigation: {
      main: "#80295e"
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  colorArray: ["#c0a320", "#80295e", "#16afc0", "#196a73", "#403608"],
});

theme = responsiveFontSizes(theme);

export default theme;
