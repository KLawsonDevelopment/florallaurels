import React, { Component } from 'react';
import SocialMedia from './SocialMedia';
import Art from './Art'
import About from './About'
import Home from './Home';

class Title extends Component {
    render() {
        return (
            <div className='title' id='title'>
                <Home></Home>
                <About></About>
                <Art></Art>
                <SocialMedia></SocialMedia>
            </div>
        );
    }
}

export default Title;