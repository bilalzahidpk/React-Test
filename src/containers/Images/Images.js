import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import * as actions from '../../store/actions/index';

import Image from '../Image/Image';
import 'remixicon/fonts/remixicon.css'
import classes from './Images.module.css'

class Images extends Component {
    state = {
        hovered: false
    }
    
    componentDidMount() {
        this.props.getImages();
    }

    render() {
        return (
            <Fragment>
                { this.props.images ? 
                    this.props.images.map( image => <Image id={image.id} src={image.url} isFavorite={image.isFavorite}/>) 
                    : null
                    // console.log()
                }
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        images: state.image.images
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getImages: () => dispatch(actions.loadImages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Images)
