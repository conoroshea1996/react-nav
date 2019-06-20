import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Sidedrawer from './components/sidedrawer/Sidedrawer';
import Backdrop from './components/backdrop/backdrop';
import './App.css';
import SideDrawer from './components/sidedrawer/Sidedrawer';

class App extends Component {
  state = {
    sidedrawerOpen: false
};
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sidedrawerOpen: !prevState.sidedrawerOpen}
    })
  };

  backdropClickHnadler = () => {
    this.setState({sidedrawerOpen:false})
  }


  render() {    
    let backdrop;

    if (this.state.sidedrawerOpen) {
      backdrop = <Backdrop backdropClick= {this.backdropClickHnadler} />
    }
    return (
      <div className="App">
        <Toolbar drawerClick = {this.drawerToggleClickHandler} />
        <Sidedrawer show={this.state.sidedrawerOpen}/>
        {backdrop}
        <main style={{marginTop:'50px'}}>
          <h1>Content</h1>
          <h2>mORE CONTENT</h2>
        </main>
        
      </div>
    );
  }
}
export default App;
