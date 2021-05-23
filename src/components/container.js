import React from "react"
import styled, { css } from 'styled-components';

const Root = styled.div`
    ${p => p.back && css`
        background: url(${p => p.back});
        background-size: cover;
    `}
`;

const Content = styled.div`
    margin: 0 auto;
    max-width: 1170px;
    padding: 0 1rem;
`;

export default function Container({ children, back, className }) {
    return (
        <Root back={back} className={className}>
            <Content>
                {children}
            </Content>
        </Root>
    )
}