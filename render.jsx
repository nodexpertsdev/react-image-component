/**
* Created by Vinay 
*/

// import metoer react packages;
import React, { Component }     from 'react';
import { _ }                    from 'meteor/underscore';

// import components
import { ImageComp } from './imageComp.jsx';

// import './style.css';

export class RenderImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: props.images
        };
    }

    componentWillReceiveProps(nextProps, nextState) {
        if (this.props.images != nextProps.images) {
            this.setState({ images: nextProps.images ? nextProps.images : [] });
        }
    }

    renderImages() {
        const { images } = this.state;
        return (
            <div >
                { 
                    images.map((image, key) => {
                        return <ImageComp 
                                key = { key } 
                                index = { key } 
                                image = { image } 
                                removeImage = { this.props.removeImage }
                            />
                    })
                }
            </div>
        );
    }


    render() {
        return (
            <div>
                { this.renderImages() }
            </div>
        )
    }
};
