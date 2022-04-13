import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';


const Questions = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
       <div className='home-container-2'>
         <HomeMainbar/>
          <RightSidebar/>
       </div>
    </div>
  )
}

export default Questions