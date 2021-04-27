import React from 'react'

const Iframe1 = () => {

    return (
        <div className="video-responsive">

            <iframe 
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/1nPCTXAxBVo"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
        </div>
    )
}

export default Iframe1


