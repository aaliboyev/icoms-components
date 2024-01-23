import React, {HTMLAttributes} from "react";
import {styled} from "@stitches/react";
import {CSSProps} from "../../types";

const StyledFlexbox = styled('div', {
    display: 'flex',
    flexWrap: 'wrap'
})

const StyledFlexboxItem = styled('div', {
    boxSizing: 'border-box',
    width: '100%',
    minWidth: 0
})

const Flexbox = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & { css: CSSProps }>(
    ({children, css, ...props}, forwardRef) => {
    return (
        <StyledFlexbox ref={forwardRef} css={css} {...props}>
            {children}
        </StyledFlexbox>
    );
})

const FlexboxItem = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & { css: CSSProps }>(
    ({children, css, ...props}, forwardRef) => {
    return (
        <StyledFlexboxItem ref={forwardRef} css={css} {...props}>
            {children}
        </StyledFlexboxItem>
    );
})

export { Flexbox, FlexboxItem };
