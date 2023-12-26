import React, { useEffect, useState } from 'react'
import { YOUTUBE_URL } from '../utils/constants';
import VideoCard, {VideoCardRecommendation} from './VideoCard';
import { Link } from 'react-router-dom';
import WatchPage from './WatchPage';
import userContext from '../utils/userContext';

const VideoContainer = ({isRecommendation}) => {

    useEffect(()=>{getVideos()},[]);

    const [videos,setVideos]=useState([]);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_URL);
        const json = await data.json();
        // console.log(json.items);
        setVideos(json.items);
    }

  return (
// overflow-y-auto h-[100vh]
    <div className='flex flex-wrap overflow-y-auto h-[100vh]'>
        {videos?.map((video) => {
        const videoId = typeof video?.id === "object" ? video?.id?.videoId : video?.id;
        return (
          <div key={videoId}>
            {isRecommendation ? (
              <Link to={`/watch?v=${videoId}`}><VideoCardRecommendation info={video} isRecommendation={isRecommendation} /></Link>
            ) : (
              <Link to={`/watch?v=${videoId}`}><VideoCard key={videoId} info={video} isRecommendation={isRecommendation} /></Link>
            )}
          </div>
        );
      })}
    </div>
  )
}

export default VideoContainer;