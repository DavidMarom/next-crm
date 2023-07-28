'use client';
import React from 'react'
import PropTypes from "prop-types"
import { Container } from "./Card01.style"

export default function Card01({
    width = '100%',
    height = 140,
    children
}) {

    return (
        <Container
            width={width}
            height={height}
        >
            {/* {Children.map(child => {child})} */}
            {children}
        </Container>
    )
}

Card01.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.node
}
