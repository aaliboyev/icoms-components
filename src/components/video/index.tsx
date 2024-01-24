import React from 'react'
import ReactPlayer, {ReactPlayerProps} from 'react-player'
import {CSSProps} from "../../types";


const Video: React.FC<ReactPlayerProps & CSSProps> = ({css, ...props}) => {
    return (
        <ReactPlayer {...props} />
    )
}

export default Video
