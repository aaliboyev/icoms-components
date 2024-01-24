import React from "react";
import { styled } from '@stitches/react';
import {CSSProps} from "../../types";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & CSSProps

const StyledContainer = styled('div', {});

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ children, css, ...rest }, ref) => {
    return <StyledContainer ref={ref} css={css} {...rest}>
        {children}
    </StyledContainer>
})

export default Container;
