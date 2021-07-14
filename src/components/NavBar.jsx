import React, { Component } from 'react';
import AboutButton from './AboutButton';
import ArtButton from './ArtButton';
import HomeButton from './HomeButton';
import NavBarButton from './NavBarButton';
import SocialMediaButton from './SocialMediaButton';

class NavBar extends Component {
    render() {
        return (
            <div className='navbar' id='navbar'>
                <NavBarButton></NavBarButton>
                <HomeButton></HomeButton>
                <AboutButton></AboutButton>
                <ArtButton></ArtButton>
                <SocialMediaButton></SocialMediaButton>
            </div>
        );
    }
}

export default NavBar;