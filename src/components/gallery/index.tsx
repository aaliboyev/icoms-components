import * as React from "react";

import PhotoAlbum, {Photo} from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import {PhotoAlbumProps} from "react-photo-album/dist";
import {HTMLAttributes} from "react";
import {CSSProps} from "../../types";
import {LightboxExternalProps} from "yet-another-react-lightbox/dist/types";
import "yet-another-react-lightbox/styles.css";
import _ from "lodash";
import {styled} from "@stitches/react";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const StyledDiv = styled("div", {
    width: "300px",
    height: "auto",
    padding: "10px",
})


const Gallery = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>
    & {items: Photo[], albumProps: PhotoAlbumProps, lightboxProps: LightboxExternalProps}
    & CSSProps>(
    ({
        items,
        albumProps,
        lightboxProps,
        css, ...rest}, ref) => {
        const [index, setIndex] = React.useState(-1);

    const {photos, ...apRest} = {...albumProps};
    const album = _.merge({}, {
        layout: "masonry",
        targetRowHeight: 150,
    }, apRest);

    const {slides, ...lpRest} = {...lightboxProps};
    const lightbox = _.merge({}, {
        slideDuration: 300,
        slideInterval: 3000,
        slideTransition: "slide",
    }, lpRest);
    return (
        <StyledDiv css={css}>
            <PhotoAlbum
                photos={items}
                onClick={({ index: current }) => setIndex(current)}
                {...album}
            />

            <Lightbox
                index={index}
                slides={items}
                open={index >= 0}
                plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
                close={() => setIndex(-1)}
                {...lightbox}
            />
        </StyledDiv>
    );
})

export default Gallery
