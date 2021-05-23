import Typography from "typography"
import typograhyTheme from "typography-theme-fairy-gates"
import { theme } from './theme';

typograhyTheme = {
    ...typograhyTheme,
    bodyColor: theme.color.text,
    headerFontFamily: [
        'Oswald',
        'sans-serif',
    ],
    bodyFontFamily: [
        'Roboto',
        'sans-serif'
    ],
    overrideStyles: () => ({
        'h1,h2,h3,h4': {
            color: theme.color.text
        },
        'a,a:visited': {
            color: theme.color.link,
            textDecoration: 'none',
        },
        'a:hover,a:active': {
            color: theme.color.link,
            textDecoration: 'underline',
        },
    })
};

const typography = new Typography(typograhyTheme)

export const { scale, rhythm, options } = typography
export default typography