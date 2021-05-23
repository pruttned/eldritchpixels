import React from "react"
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../theme/globalStyles';
import { theme } from '../theme/theme';

const Root = styled.div`
    margin: 0 auto;
    max-width: 1170px;
    padding: 0 1rem;
`;

export default function Container({ children }) {
    return (
        <Root >
            {children}
        </Root>
    )
}