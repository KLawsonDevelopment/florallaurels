import React, { Component } from 'react';

class NavBarButton extends Component {

    displayNavBar () {
        document.getElementById('artButton').classList.toggle('active')
        document.getElementById('aboutButton').classList.toggle('active')
        document.getElementById('socialMediaButton').classList.toggle('active')
        document.getElementById('homeButton').classList.toggle('active')
        var title = document.getElementById('title')
        if (title.style.gridColumnStart==='2') {
            title.style.gridColumnStart='1'
        }
        else {
            title.style.gridColumnStart='2'
        }
    }

    render() {
        return (
            <button className='navBarButton' onClick={this.displayNavBar}/>
        );
    }
}

export default NavBarButton;