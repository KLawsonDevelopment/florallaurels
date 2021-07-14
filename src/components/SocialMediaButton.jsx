import React, { Component } from 'react';

class SocialMediaButton extends Component {

        displayPage () {
        var homePage = document.getElementById('homePage')
        homePage.classList.remove('displayPage')
        homePage.classList.add('doNotDisplay')

        var artPage = document.getElementById('artPage')
        artPage.classList.remove('displayPage')
        artPage.classList.add('doNotDisplay')

        var socialPage = document.getElementById('socialPage')
        socialPage.classList.remove('doNotDisplay')
        socialPage.classList.add('displayPage')

        var aboutPage = document.getElementById('aboutPage')
        aboutPage.classList.remove('displayPage')
        aboutPage.classList.add('doNotDisplay')
    }


    render() {
        return (
            <button className='socialMediaButton' onClick={this.displayPage}>
                Socials
            </button>
        );
    }
}

export default SocialMediaButton;