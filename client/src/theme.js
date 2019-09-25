import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: "\"Roboto\", sans-serif",
        fontWeightLight: '600',
    },
    palette: {
        type: "light",
        text: {
            primary: "#e1e3e1",
            secondary: "#e1e3e1"
        },
        primary: {
            main: '#e1e3e1',
        },
        secondary: {
            main: '#e1e3e1',
        },
        fullHeight: {
            minHeight: '100vh',
        },
    },
});
