import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { collapseMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import userContext from '../utils/userContext';
import { YOUTUBE_MOVIE_DETAIL_API } from '../utils/constants';
import VideoContainer from './VideoContainer';
import CommentsContainer from './CommentsContainer';
import { UseSelector } from 'react-redux/es/hooks/useSelector';

const WatchPage = () => {

  const [video_details,setVideo_details]=useState(null);

  const [searchParam] = useSearchParams();
  const videoId=searchParam.get("v");

  const dispatch = useDispatch();
  
  useEffect(()=>{
        dispatch(collapseMenu());
        videoDetailsFunction();
    },[searchParam])

  const videoDetailsFunction = async () => {
    const video_data = await fetch(YOUTUBE_MOVIE_DETAIL_API.replace("[VIDEO_ID]",searchParam.get("v")));
    const json = await video_data.json();
    setVideo_details(json)
  }  


  return (
      <div className='md:flex md:p-5 w-full'>
        <div className='p-2 ml-5 z-[-100] mt-5  md:w-9/12'>
            <iframe
                className='rounded-lg w-full aspect-video'
                width="1000" 
                height="500" 
                src={"https://www.youtube.com/embed/" + searchParam.get("v")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 allowFullScreen>    
            </iframe>
            {video_details?.items?.length>0 && <VideoDetails videoDetails={video_details}/>}
            <CommentsContainer videoId={videoId}/>
        </div>
        <div className="md:w-3/12">
          <VideoContainer isRecommendation={true} />
        </div>
      </div>
  )
};

const VideoDetails = ({ videoDetails }) => {
  const { title, description, channelTitle, thumbnails } = videoDetails?.items[0]?.snippet;
  return (
    <div>
      <h1 className="font-bold text-xl py-4">{title}</h1>
      <div className="flex justify-between md:grid md:grid-cols-12">
        <div className="col-span-4 flex py-2">
          <img className="rounded-full w-12 h-12 mr-4" src={thumbnails.default.url} alt="channel logo" />
          <div>
            <div className="font-bold">{channelTitle}</div>
            <div className="text-sm">308 <span className="hidden md:inline">Subscribers</span></div>
          </div>
        </div>
        <div className="col-span-2">
          <button className="bg-black text-white rounded-full py-2 px-4">Subscribe</button>
        </div>
      </div>
      <div>{description}</div>
    </div>
  );
};

export default WatchPage;