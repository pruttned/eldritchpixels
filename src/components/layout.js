import React from "react"
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../theme/globalStyles';
import { theme } from '../theme/theme';
import Container from './container';
import Discord from "../svg/discord.svg";


const Footer = styled.footer`
    text-align: center;
    margin: 30px 0;
`;

const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
`;

const SocialLink = styled.a`
    display: block;
    width: 32px;
`;

const Copy = styled.div`
    margin-top: 10px;
    font-size: 0.8rem;
`;


export default function Layout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
            <Footer>
                <Container>
                    <SocialLinks>
                        <SocialLink href="https://discord.gg/PHx5nVRNhk" target="_blank" rel="noopener nofollow"><Discord /></SocialLink>
                    </SocialLinks>
                    <Copy>
                        © 2021 Eldritch Pixels
                    </Copy>
                </Container>
            </Footer>
            <GlobalStyle />
        </ThemeProvider>
    )
}