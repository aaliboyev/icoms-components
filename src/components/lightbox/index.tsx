import PhotoAlbum, {PhotoAlbumProps, } from "react-photo-album";
import React from "react";

const Lightbox = React.forwardRef(({photos, layout, ...rest}: PhotoAlbumProps, ref: React.Ref<HTMLDivElement>) => {
    return <PhotoAlbum layout={layout} photos={photos} {...rest} />;
});

export default Lightbox;
