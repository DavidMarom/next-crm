"use client";
import PropTypes from "prop-types"
import { RowContainer } from "./Row.style"

function Row({
    children,
    height,
    justifycontent = "space-between",
    background,
    marginbottom,
    paddingtop,
    width = "100%",
}) {
    return (
        <RowContainer
            justifycontent={justifycontent}
            height={height}
            background={background}
            marginbottom={marginbottom}
            paddingtop={paddingtop}
            width={width}
        >
            {children}
        </RowContainer>
    )
}

Row.propTypes = {
    marginbottom: PropTypes.string,
    children: PropTypes.node,
    height: PropTypes.number,
    background: PropTypes.string,
    justifycontent: PropTypes.string,
    paddingtop: PropTypes.string,
    width: PropTypes.string,
}

export default Row