import { createMuiTheme } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';
const customeTheme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: red,
    },
    typography: {
        fontFamily: 'Roboto',
        fontSize: 16,
        h2: {
            fontSize: 22,
            fontWeight: 500,
        },
        h6: {
            fontSize: 16,
        }
    },
    title: 22
});

export default customeTheme;