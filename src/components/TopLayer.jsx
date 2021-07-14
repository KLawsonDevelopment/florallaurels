import React, { Component } from 'react';
import GridContainer from './GridContainer';
import CloseButton from './CloseButton'

class TopLayer extends Component {
    render() {
        return (
            <div className='topLayer' id='topLayer'>
                <CloseButton></CloseButton>
                <GridContainer></GridContainer>
            </div>
        );
    }
}

export default TopLayer;