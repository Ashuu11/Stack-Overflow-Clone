import React from 'react';
import './RightSidebar.css';
import comment from '../../assets/comment-alt-solid.svg';
import Pen from '../../assets/pen-solid.svg';
import blackLogo from '../../assets/blacklogo.svg';

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={Pen} alt="pen" width="18"/>
                <p>Gen Z doesn't understand file structures (Ep. 415)</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={Pen} alt="pen" width="18"/>
                <p>Column by your name: The analytics database that skips the rows</p>
            </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="pen" width="18"/>
                <p>Planned maintenance scheduled for Saturday, February 19, 2022 at 2:00AM UTC...</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="pen" width="18"/>
                <p>Update on the ongoing DDoS attacks and blocking Tor exit nodes</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={blackLogo} alt="pen" width="18"/>
                <p>New official secondary domain: stackoverflow.co</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>38</p>
                <p>Why was this spam flag declined, yet the question marked as spam?</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>20</p>
                <p>What is the best course of action when a user has high enough rep to...</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>15</p>
                <p>Is a link to the "How to ask" help page a useful comment?</p>
            </div>
        </div>
    </div>
  )
}

export default Widget;