import React from "react"
import styled, { css } from 'styled-components';

// https://codepen.io/stepher/pen/yLOaEOP
const Root = styled.div`
    &::before {
        border-style: solid;
        border-width: 0.1em 0.1em 0 0;
        content: '';
        display: inline-block;
        height: 1em;
        left: 0.15em;
        position: relative;
        top: 0.15em;
        transform: rotate(-45deg);
        vertical-align: top;
        width: 1em;

        ${p => p.direction === 'right' && css`
            left: 0;
            transform: rotate(45deg);
        `}
        ${p => p.direction === 'down' && css`
            top: 0;
            transform: rotate(135deg);
        `}
        ${p => p.direction === 'left' && css`
            left: 0.25em;
            transform: rotate(-135deg);
        `}                
    }
`;

export default function Chevron({ size, direction, className }) {
    return (
        <Root style={{ fontSize: size + 'px' }} direction={direction} className={className} />
    )
}