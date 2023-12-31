"use client";
import PropTypes from "prop-types"
import { ColContainer } from "./Col.style"

function Col({
    children,
    width = "100%",
    height = "300px",
    justifycontent = "space-between",
    background
}) {

    return (
        <ColContainer
            justifycontent={justifycontent}
            height={height}
            background={background}
            width={width}
        >
            {children}
        </ColContainer>
    )
}

Col.propTypes = {
    width: PropTypes.string,
    children: PropTypes.node,
    height: PropTypes.string,
    background: PropTypes.string,
    justifycontent: PropTypes.string
}

export default Col