import React, { Component } from 'react';

class HomeButton extends Component {
    displayPage () {
        var homePage = document.getElementById('homePage')
        homePage.classList.remove('doNotDisplay')
        homePage.classList.add('displayPage')

        var artPage = document.getElementById('artPage')
        artPage.classList.remove('displayPage')
        artPage.classList.add('doNotDisplay')

        var socialPage = document.getElementById('socialPage')
        socialPage.classList.remove('displayPage')
        socialPage.classList.add('doNotDisplay')

        var aboutPage = document.getElementById('aboutPage')
        aboutPage.classList.remove('displayPage')
        aboutPage.classList.add('doNotDisplay')
    }


    render() {
        return (
            <button className='homeButton' id='homeButton' onClick={this.displayPage}>
                Home
            </button>
        );
    }
}

export default HomeButton;