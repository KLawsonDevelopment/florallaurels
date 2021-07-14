import React, { Component } from 'react';

class CloseButton extends Component {

    closeArt () {
        document.getElementById('topLayer').classList.remove('topLayer')
        document.getElementById('topLayer').style.backgroundImage = 'none'
        document.getElementById('gridContainer').classList.remove('bottomLayer')
        document.getElementById('closeButton').classList.add('closeButton')
        document.getElementById('closeButton').classList.remove('showButton')
    }

    render() {
        return (
            <button className='closeButton' id='closeButton' onClick={this.closeArt}>
                CLICK ME
            </button>
        );
    }
}

export default CloseButton;