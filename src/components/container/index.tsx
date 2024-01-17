import React from "react";
import { styled } from '@stitches/react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    style?: React.CSSProperties;
}


const Container: React.FC<ContainerProps> = ({ children, style, ...rest }) => {
    const StyledContainer = styled('div', {...style});
    return <StyledContainer {...rest}>
        {children}
    </StyledContainer>
}

export default Container;
