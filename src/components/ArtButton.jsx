import React, { Component } from 'react';

class ArtButton extends Component {

    displayPage () {
        var homePage = document.getElementById('homePage')
        homePage.classList.remove('displayPage')
        homePage.classList.add('doNotDisplay')

        var artPage = document.getElementById('artPage')
        artPage.classList.remove('doNotDisplay')
        artPage.classList.add('displayPage')

        var socialPage = document.getElementById('socialPage')
        socialPage.classList.remove('displayPage')
        socialPage.classList.add('doNotDisplay')

        var aboutPage = document.getElementById('aboutPage')
        aboutPage.classList.remove('displayPage')
        aboutPage.classList.add('doNotDisplay')
    }


    render() {
        return (
            <button className='artButton' onClick={this.displayPage}>
                Art
            </button>
        );
    }
}

export default ArtButton;