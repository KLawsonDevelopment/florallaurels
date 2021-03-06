import React, { Component } from 'react';

class CloseButton extends Component {

    closeArt () {
        document.getElementById('topLayer').classList.remove('topLayer')
        document.getElementById('topLayer').style.backgroundImage = 'none'
        document.getElementById('topLayer').style.backgroundColor = 'rgb(243,236,218)'
        document.getElementById('gridContainer').classList.remove('bottomLayer')
        document.getElementById('closeButton').classList.add('closeButton')
        document.getElementById('closeButton').classList.remove('showButton')
    }

    render() {
        return (
            <button className='closeButton' id='closeButton' onClick={this.closeArt}/>
        );
    }
}

export default CloseButton;