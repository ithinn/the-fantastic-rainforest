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
  colorArray: ["#227345", "#3f8c76", "#0c3140", "#196a73", "#8c3432"],
});

theme = responsiveFontSizes(theme);

export default theme;
