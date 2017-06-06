/**
* Created by Vinay 
*/

// import metoer react packages;
import React, { Component }     from 'react';
import { _ }                    from 'meteor/underscore';

export class ImageComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDelete: false
        };
    }

    showDelete() {
        this.setState({
            showDelete: true
        });
    }

    hideDelete() {
        this.setState({
            showDelete: false
        });
    }

    render() {
        const { image, index } =  this.props;
        const { showDelete } =  this.state;
        return (
            <span className='image' onMouseEnter={ this.showDelete.bind(this) } onMouseLeave={ this.hideDelete.bind(this) }  >
                <img style={ { opacity: showDelete ? 0.25 : 1 } } height = { '100' } width = { '100' } src={ image.url } />
                { showDelete ? <span className="remove btn btn-xs btn-danger delete-button" onClick={ this.props.removeImage.bind(this, index, image) } ><i className="glyphicon glyphicon-trash"></i></span> : "" }
            </span>
        );
    }
};
