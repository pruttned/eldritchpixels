import React from "react"
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../theme/globalStyles';
import { theme } from '../theme/theme';

const Root = styled.div`
    margin: 0 auto;
    max-width: 1170px;
    padding: 0 1rem;
`;

export default function Layout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
            <footer>
                Discrord
                Email
                © 2021 eldritch pixels
            </footer>
            <GlobalStyle />
        </ThemeProvider>
    )
}