import * as React from "react";
import ReactLightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import {LightboxExternalProps} from "yet-another-react-lightbox/dist/types";
import {styled} from "@stitches/react";
import {CSSProps} from "../../types";
import _ from "lodash";
import {HTMLAttributes} from "react";

const StyledSlideContainer = styled("div", {
    backgroundColor: "white",
    width: "500px"
})

const Slides = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & LightboxExternalProps & CSSProps>(
    ({slides, css, ...rest}, ref) => {
        const [open, setOpen] = React.useState(false);
        const [index, setIndex] = React.useState(0);

        const toggleOpen = (state: boolean) => () => setOpen(state);

        const carouselProps = _.merge({}, {
            carousel: {padding: 0, spacing: 0, imageFit: "cover",},
            inline: {style: {width: "100%", maxWidth: "900px", aspectRatio: "3 / 2", margin: "0 auto",}}
        }, {index, slides, ...rest})

        const updateIndex = ({index: current}: { index: number }) => setIndex(current);
        return <StyledSlideContainer ref={ref} css={css}>
            <ReactLightbox
                plugins={[Inline]}
                on={{
                    view: updateIndex,
                    click: toggleOpen(true),
                }}
                {...carouselProps}
            />
            <ReactLightbox
                open={open}
                close={toggleOpen(false)}
                index={index}
                slides={slides}
                on={{view: updateIndex}}
                animation={{fade: 0}}
                controller={{closeOnPullDown: true, closeOnBackdropClick: true}}
            />
        </StyledSlideContainer>
    })

export default Slides
