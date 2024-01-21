import React from 'react'
import ReactPlayer, {ReactPlayerProps} from 'react-player'


const Video: React.FC<ReactPlayerProps> = (props) => {
    return (
        <ReactPlayer {...props} />
    )
}

export default Video
