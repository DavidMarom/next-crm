'use client';
import React from 'react'
import PropTypes from "prop-types"
import { Container } from "./Card01.style"

export default function Card01({
    width = '100%',
    height = 140,
    background = '#ffffff',
    children,
    direction = 'row'
}) {

    return (
        <Container
            width={width}
            height={height}
            background={background}
            direction={direction}
        >
            {children}
        </Container>
    )
}

Card01.propTypes = {
    background: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.node,
    direction: PropTypes.string
}
