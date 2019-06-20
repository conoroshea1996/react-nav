import React from "react";
import './toolbar.css';
import DrawerToggle from '../sidedrawer/DrawerToogleBtn';
const Toolbar = props => {
  return(
    <header className='toolbar'> 
        <nav className='toolbar-nav'>
            <div className='icon'>
          <DrawerToggle click={props.drawerClick}/>
            </div>
            <div className='toolbar-logo'><a href='#'>Logo</a></div>
            <div className='toolbar-items'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
  )
};
export default Toolbar;