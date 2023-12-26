import React from 'react'
import Button from './Button'
const Buttons = () => {

    const lists = ["All","music","Tamil cinema","wickets","Mixes","Jabardasth","Live","News","Nagarjun","Ranibeer Kapoor","Sitcoms","Computer Programming","Gadgets","asianmusic","recently uploaded","posts","new to you"];

  return (

    <div className='whitespace-nowrap ml-80 overflow-x-auto hide-scrollbar'>
        {
            lists.map((list,index)=>(
                <Button key={index} name={list}/>
            ))
        }
    </div>
  )
}

export default Buttons

// what is whitespace-nowwrap property gives all buttons in single-line