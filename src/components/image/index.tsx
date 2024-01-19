import * as React from 'react';
import { styled } from '@stitches/react';
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
const AspectRatio = AspectRatioPrimitive.Root
type ImageProps = {
    src: string;
    alt: string;
    styles?: React.CSSProperties;
    aspectRatio?: [number, number];
} & React.ImgHTMLAttributes<HTMLImageElement>;

const StyledImage = styled('img', {});

const Image: React.FC<ImageProps> = ({ src, alt, styles, ...props }) => {
    const comp = <StyledImage src={src} alt={alt} style={styles} {...props} />;
    if (props.aspectRatio) {
        return <AspectRatio ratio={props.aspectRatio[0] / props.aspectRatio[1]}>
            {comp}
        </AspectRatio>
    }
    return comp
};

Image.displayName = 'Image';

export default Image;
