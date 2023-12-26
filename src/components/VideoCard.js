import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
const VideoCard = ({info}) => {

    // console.log(info);

    const {snippet,statistics}=info;

    const {channelTitle,title,thumbnails}=snippet;

  return (
    <div className='p-2 m-2 w-[380px] overflow-y-auto'>
        <div>
            <img className='rounded-lg w-full' src={thumbnails.medium.url} alt="" />
        </div> 
           <li className='list-none font-bold'>{title}</li>
           <li className='list-none'>{channelTitle}</li>
           <li className='list-none'>{statistics.viewCount} views</li>
    </div>
  )
}

export const VideoCardRecommendation = ({ info }) => {
  const { snippet, statistics } = info;
  const videoId = typeof info.id === "object" ? info?.id?.videoId : info?.id;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  return (
    <div className="cursor-pointer mx-2 flex p-2 max-h-[94px]">
      <Link className="min-w-[168px] max-w-[168px]" to={`/watch?v=${videoId}`}>
        <img className="w-full rounded-lg aspect-auto h-full object-cover" src={thumbnails?.default?.url} alt="thumbnail" />
      </Link>
      <ul className="px-2">
        <li className="font-bold text-sm text-ellipsis max-h-[40px] overflow-hidden">{title}</li>
        <li className="text-xs">{channelTitle}</li>
        <li className='list-none'>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};
  
export default VideoCard;