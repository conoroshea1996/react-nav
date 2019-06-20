import React from 'react';
import './togglebtn.css';

const drawerToggleBtn = props => {
    return (
        <button className='toggleBtn' onClick={props.click}> 
            <div className="toggleBtn-line"></div>
            <div className="toggleBtn-line"></div>
            <div className="toggleBtn-line"></div>
        </button>
    )
}

export default drawerToggleBtn;