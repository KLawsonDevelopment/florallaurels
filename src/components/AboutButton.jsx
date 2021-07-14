import React, { Component } from 'react';

class AboutButton extends Component {

    displayPage () {
        var homePage = document.getElementById('homePage')
        homePage.classList.remove('displayPage')
        homePage.classList.add('doNotDisplay')

        var artPage = document.getElementById('artPage')
        artPage.classList.remove('displayPage')
        artPage.classList.add('doNotDisplay')

        var socialPage = document.getElementById('socialPage')
        socialPage.classList.remove('displayPage')
        socialPage.classList.add('doNotDisplay')

        var aboutPage = document.getElementById('aboutPage')
        aboutPage.classList.remove('doNotDisplays')
        aboutPage.classList.add('displayPage')
    }

    render() {
        return (
            <button className='aboutButton' id='aboutButton' onClick={this.displayPage}>
                About
            </button>
        );
    }
}

export default AboutButton;