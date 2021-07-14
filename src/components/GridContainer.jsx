import React, { Component } from 'react';
import CoverPhoto from './CoverPhoto';
import NavBar from './NavBar';
import Title from './Title';


class GridContainer extends Component {
    render() {
        return (
        <div className='gridContainer' id='gridContainer'>
            <NavBar></NavBar>
            <CoverPhoto></CoverPhoto>
            <Title></Title>
          </div>
        );
    }
}

export default GridContainer;