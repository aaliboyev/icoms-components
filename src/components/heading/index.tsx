import * as React from 'react';
import { styled } from '@stitches/react';

type HeadingProps = {
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLHeadingElement>;

const StyledHeading = styled('h1', {});

const Heading: React.FC<HeadingProps> = ({ level, style, ...props }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return <StyledHeading as={Tag} style={style} {...props} />;
};

export default Heading;
