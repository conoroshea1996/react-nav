import React from 'react';
import './sidedrawer.css';

const SideDrawer = props => {
    let drawerClass = 'sidebar';
    if (props.show) {
        drawerClass = 'sidebar' + ' open';
    }
    return (
        <nav className={drawerClass}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
export default SideDrawer