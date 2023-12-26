import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import home from './images/asset_home.svg'
import shorts from './images/asset_shorts.svg'
import subscription from './images/subscription.svg'
import history from './images/history.svg'
import your_videos from './images/your_videos.svg'
import library from './images/library.svg'
import watch_later from './images/watch_later.svg'
import downloads from './images/downloads.svg'
import liked_videos from './images/liked_videos.svg'
import trending from './images/trending.svg'
import shopping from './images/shopping.svg'
import movies from './images/movies.svg'
import music from './images/music.svg'
import live from './images/live.svg'
import gaming from './images/gaming.svg'
import news from './images/news.svg'
import sports from './images/sports.svg'
import learning from './images/learning.svg'
import fashion from './images/fashion_beauty.svg'
import podcast from './images/podcasts.svg'
import { Link } from 'react-router-dom'

const SideBar = () => {

    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);

     if(!isMenuOpen) return null;
    //(
    //     <div className='w-1/5'>
    //         <div className='px-3 p-2 flex flex-col items-center gap-2 cursor-pointer hover:bg-[#f0f0f0]'>
    //         <img className='h-6' src={home} alt="" />
    //         <li className='list-none text-center'>Home</li>
    //         </div>
    //         <div className='p-2 flex flex-col items-center gap-2 cursor-pointer hover:bg-[#f0f0f0]'>
    //         <img className='h-6' src={shorts} alt="" />
    //         <li className='list-none'>Shorts</li>
    //         </div>
    //         <div className='px-3 p-2 flex flex-col justify-center items-center gap-2 cursor-pointer hover:bg-[#f0f0f0]'>
    //         <img className='h-6' src={subscription} alt="" />
    //         <li className='list-none text-center'>Subscriptions</li>
    //         </div>
    //         <div className='p-2 flex flex-col items-center gap-2 cursor-pointer hover:bg-[#f0f0f0] mb-4'>
    //         <img className='h-6' src={downloads} alt="" />
    //         <li className='list-none'>Downloads</li>
    //         </div>
    //     </div>
    // );

  return (

//className='absolute bg-white top-[70px] left-0 w-52 pl-3'

    <div className='p-5 shadow-lg w-[300px] overflow-y-auto max-h-[100vh]'>
       <div className='flex flex-col'>
            <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2'>
              <img src={home} alt="" />
              <Link to="/"><li className='list-none'>Home</li></Link>
            </div>
            <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2'>
                <img src={shorts} alt="" />
                <li className='list-none'>Shorts</li>
            </div>
            <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2 mb-4'>
              <img src={subscription} alt="" />
              <li className='list-none'>Subscriptions</li>
            </div>
       </div>

       <hr />

       <div className='flex flex-col'>
          <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2 mt-4'>
            <img src={history} alt="history" />
            <li className='list-none'>History</li>
          </div>
          <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2'>
              <img src={your_videos} alt="" />
              <li className='list-none'>Your Videos</li>
          </div>
          <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2'>
              <img src={library} alt="" />
              <li className='list-none font-bol'>Library</li>
          </div>
          <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2'>
              <img src={watch_later} alt="" />
              <li className='list-none'>Watch-later</li>
          </div>
          <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2'>
            <img src={downloads} alt="" />
            <li className='list-none'>Downloads</li>
          </div>
          <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2 mb-4'>
            <img src={liked_videos} alt="" />
            <li className='list-none p-2'>Liked vides</li>
          </div>
       </div>

       <hr />

        <div>
            <h2 className='mt-4 text-xl mb-4'>Subscriptions</h2>
            <li className='list-none p-2 hover:bg-[#f0f0f0] cursor-pointer'>Tv9 Kannada</li>
            <li className='list-none p-2 hover:bg-[#f0f0f0] cursor-pointer'>Khan sir Patna</li>
            <li className='list-none p-2 hover:bg-[#f0f0f0] cursor-pointer'>Garden Up</li>
            <li className='list-none p-2 hover:bg-[#f0f0f0] cursor-pointer'>Maithili Thakur</li>
            <li className='list-none p-2 hover:bg-[#f0f0f0] cursor-pointer'>Mast Maga</li>
            <li className='list-none p-2 hover:bg-[#f0f0f0] cursor-pointer mb-4'>Media Master</li>
        </div>

       <hr />

       <div>
            <h2 className='mt-4 text-xl mb-4'>Explore</h2>
            <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2'>
            <img src={trending} alt="" />
            <li className='list-none'>Trending</li>
            </div>
            <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2'>
            <img src={shopping} alt="" />
            <li className='list-none'>Shopping</li>
            </div>
            <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2'>
            <img src={movies} alt="" />
            <li className='list-none'>Movies</li>
            </div>
            <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2'>
            <img src={music} alt="" />
            <li className='list-none'>Music</li>
            </div>
            <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2'>
            <img src={live} alt="" />
            <li className='list-none'>Live</li>
            </div>
            <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2'>
            <img src={gaming} alt="" />
            <li className='list-none'>Gaming</li>
            </div>
            <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2'>
            <img src={news} alt="" />
            <li className='list-none'>News</li>
            </div>
            <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2'>
            <img src={sports} alt="" />
            <li className='list-none'>Sports</li>
            </div>
            <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2'>
            <img src={learning} alt="" />
            <li className='list-none'>Learning</li>
            </div>
            <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2'>
            <img src={fashion} alt="" />
            <li className='list-none '>Fashion & Beauty</li>
            </div>
            <div className='flex gap-4 cursor-pointer hover:bg-[#f0f0f0] p-2'>
            <img src={podcast} alt="" />
            <li className='list-none'>Podcast</li>
            </div>
        </div>

       
    </div>
  )
}

export default SideBar