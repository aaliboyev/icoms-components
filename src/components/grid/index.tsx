import React, {HTMLAttributes} from 'react';
import {styled} from '@stitches/react';
import {CSSProps} from "../../types";

const StyledGrid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: '1rem',
    padding: '1rem',
})

const Grid = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>& {css: CSSProps}>(
    ({children, css, ...props}, ref) => {
    return <StyledGrid css={css} {...props} ref={ref}>{children}</StyledGrid>
})

const StyledGridItem = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
})

const GridItem = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>& {css: CSSProps}>(
    ({children, css, ...props}, ref) => {
    return <StyledGridItem css={css} {...props} ref={ref}>{children}</StyledGridItem>
})

export {Grid, GridItem}
