import React, { useEffect, useState } from 'react'
import image from "./images/myphto(1).png"
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import search_icon from './images/search_icon.svg'
import video_icon from './images/video_icon.svg'
import bell_icon from './images/bell_icon.svg'
import mic_icon from './images/mic_icon.svg'
import youtube_logo from './images/youtube_logo.svg'
import hamberger_icon from './images/hamerger_icon.svg'
import Buttons from './Buttons'
import { YOUTUBE_API_SEARCH_URL,YOUTUBE_API_KEY } from '../utils/constants';
import { YOUTUBE_SEARCH_BY_KEYWORD_API } from '../utils/constants';
import axios from 'axios'; 

const Header = () => {

    const [query,setSearchQuery]=useState("");
    const [suggestion,setSuggestion]=useState([]);
    const [showItems,setShowItems]=useState();

    useEffect(()=>{
       const timer =  setTimeout(()=>showSuggestion(),200);
       return () => {
        clearTimeout(timer)
       }       
    },[query])

    const showSuggestion = async () => {
        const data = await fetch(YOUTUBE_API_SEARCH_URL+query);
        const json = await data.json();
        setSuggestion(json[1]);
    }

    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(toggleMenu())
    }

    const handleSuggestions = (sug) => {
        getSearchData(sug);
    }
    
    async function getSearchData(sug) { 
        try{
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${sug}&key=${YOUTUBE_API_KEY}`); 
            const movies = await response.json();
            console.log(movies);
    }
    catch(error){
        console.log(error);
    }
        }

  return (

    <div className='sticky top-3 bg-white'>
        <div className='flex m-5 items-center justify-between gap-10'>
            <div className='flex w-1/4 gap-5 items-center'>
                <img onClick={()=>handleOnClick()} className='h-8 cursor-pointer' src={hamberger_icon} alt="haberger" />
                <a href="/"><img className='h-6 cursor-pointer' src={youtube_logo} alt="youtube_logo" /></a>
            </div>
            <div className='w-3/4'>
                  <div className='flex'>
                    <input onChange={(e)=>setSearchQuery(e.target.value)} value={query} className='h-8 w-3/4 p-5 rounded-l-full border-gray-900 bg-[#f0f0f0]' type="text" placeholder='Search' onFocus={()=>setShowItems(true)} onBlur={()=>setShowItems(false)} />
                    <button className='h-8 p-5 flex items-center bg-gray-300 rounded-r-full cursor-pointer'><img className='h-8' src={search_icon} alt="search_icon" /></button>
                    <img className='p-2 ml-3 bg-[#f0f0f0] rounded-full' src={mic_icon} alt="" />
                  </div>
                  { showItems && <div className='fixed bg-white w-[39rem] ml-2 p-4 shadow-xl rounded-xl'>
                    <ul>
                        {
                            suggestion.map((sug)=>(
                                <li key={sug} onClick={handleSuggestions(sug)} className='flex gap-2 py-1 hover:bg-gray-200 cursor-pointer'><img src={search_icon} alt="search_icon" />{sug}</li>
                            ))
                        }
                    </ul>
                  </div>}
            </div>
            <div className='flex w-1/4 gap-5'>
                <img className='h-8 pl-32 cursor-pointer' src={video_icon} alt="video_logo" />
                <img className='h-8 cursor-pointer' src={bell_icon} alt="bell_logo" />
                <img className='h-8 rounded-full cursor-pointer' src={image} alt="photo_icon" />
            </div>
        </div>
        <div className='pb-5'>
            <Buttons/>
        </div>
    </div>
    
  )
}

export default Header