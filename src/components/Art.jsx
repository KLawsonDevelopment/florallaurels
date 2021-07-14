import React, { Component } from 'react';

class Art extends Component {

    frontAndCenter (art) {
        return function() {
        document.getElementById('topLayer').style.backgroundImage = 'url(' + art + ')'
        document.getElementById('topLayer').classList.add('topLayer')
        document.getElementById('gridContainer').classList.add('bottomLayer')
        document.getElementById('closeButton').classList.add('showButton')
        document.getElementById('closeButton').classList.add('topLayer')
    }}


    render() {
        const imageArray = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", 
        "image11", "image12", "image13", "image14", "image15", "image16", "image17"]

        const arts = imageArray.map(art => {
            return <img key={art} src={require(`../artPieces/${art}.png`).default} className='artPieces' 
            id={require(`../artPieces/${art}.png`).default} alt={require(`../artPieces/${art}.png`).default}
            onClick={this.frontAndCenter(require(`../artPieces/${art}.png`).default)}/>
        })
        return (
            <div className='artPage, doNotDisplay' id='artPage'>
                {arts}
            </div>
        );        
    }

}

export default Art;