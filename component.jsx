/**
* Created by Vinay 
*/

// import metoer react packages;
import React, { Component }     from 'react';
import { _ }                    from 'meteor/underscore';

// import components
import { FileUpload }           from './fileUpload.jsx';
import { RenderImage }          from './render.jsx';

export default class ImageComponent extends Component {
    constructor(props) {
        super(props);
        this.removeImage = this.removeImage.bind(this);
        this.state = {
            images: props.images || [],
            valid: false
        };
    }

    componentDidMount() {
        this.handle();
    }

    componentWillReceiveProps(nextProps, nextState) {
        if (this.props.images != nextProps.images) {
            this.setState({images: nextProps.images ? nextProps.images : []});
        }
    }

    focus() {
      this.fileUpload.focus();
    }

    handleChange() {
      const { fileUpload } = this;

      if(fileUpload && fileUpload.state && fileUpload.state.valid && fileUpload.state.value) {
        this.setState({
            images: this.state.images.concat(fileUpload.state.value.map((item) =>{ return { url: item } }))
        }, () => {
            this.handle();
        });
      }
    }

    handle() {
        const { required } = this.props;
        const { images } = this.state;
        let valid;
        if(required && images && images.length < 1) {
            valid = false;
        } else {
            valid = true;
        }
        this.setState({
            valid: valid
        });
    }

    removeImage(key, image) {
        this.setState({
            images: this.state.images.map((image, index) => {
                if(key != index) {
                    return image;
                }
            }).filter((item) => {
                if(item) {
                    return true;
                }
            })
        }, () => {
            this.handle();
            if(this.props.handleRemove) {
                this.props.handleRemove(image);
            }
        });
    }

    render() {
        return (
            <div className={'image-component'}>
                <div>
                    <RenderImage 
                        images = { this.state.images } 
                        removeImage={ this.removeImage }
                    />
                </div>
                <div>
                    <FileUpload
                        name = { 'image' }
                        type = { 'image' }
                        multiple = { true }
                        ref = { (input) => this.fileUpload = input }
                        handleChange = { this.handleChange.bind(this) }
                        disableBlur = { true }
                    />
                </div>
            </div>
        )
    }
};
