import React from "react";
import { styled } from '@stitches/react';

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
    styles?: {
        root: React.CSSProperties;
    };
}

const StyledContainer = styled('div', {});

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ children, styles, ...rest }, ref) => {
    return <StyledContainer ref={ref} css={{...styles?.root}} {...rest}>
        {children}
    </StyledContainer>
})

export default Container;
