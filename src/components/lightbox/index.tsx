import * as React from "react";
import ReactLightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import {LightboxExternalProps} from "yet-another-react-lightbox/dist/types";
import {styled} from "@stitches/react";
import {CSSProps} from "../../types";
import {HTMLAttributes} from "react";
import {LightboxProvider, useLightboxContext} from './context';

const StyledContainer = styled("div", {
    width: "300px"
})

const StyledTrigger = styled("div", {})

const LightboxTrigger = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & LightboxExternalProps & CSSProps>(
    ({children, slides, css, ...rest}, ref) => {
    const { openLightbox } = useLightboxContext();

    return <StyledTrigger ref={ref} onClick={openLightbox} css={css}>
        {children}
    </StyledTrigger>
})

const LightboxContent = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & LightboxExternalProps & CSSProps>(
    ({children, slides, css, ...rest}, ref) => {
    const { isOpen, closeLightbox } = useLightboxContext();
    return <StyledContainer ref={ref} css={css}>
        {children}
        <ReactLightbox
            open={isOpen}
            close={closeLightbox}
            slides={slides}
            plugins={rest.plugins || [Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
            {...rest}
        />
    </StyledContainer>
})

const Lightbox = LightboxProvider

export {
    Lightbox,
    LightboxContent,
    LightboxTrigger,
}
