import React from 'react'
import { Suspense} from 'react'
import { list } from '@vercel/blob'

async function VideoComponent({fileName}) {
    const { blobs } = await list({
        prefix: fileName,
        limit: 1,
    });
    console.log(blobs);
    const { url } = blobs[0];

    return(
        <div className='overflow-hidden h-[600px] flex items-center justify-center'>
            <video
            className='w-full h-full object-cover'
            autoPlay
            muted
            playsInline
            controls
            preload='none'
            aria-label='Video Player'
            >
                <source src={url} type='video/mp4' />
            </video>
        </div>
    )
}

const VideoPlayer = ({fileName}) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <VideoComponent fileName={fileName}/>
            </Suspense>
        </div>
      
    </div>
  )
}

export default VideoPlayer
