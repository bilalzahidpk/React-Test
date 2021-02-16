import React, { Component, Fragment } from 'react'
import classes from './Image.module.css';

import * as actions from '../../store/actions/index';
import { connect } from 'react-redux'

class Image extends Component {
    state = {
        hovered: false
    }
    
    setHover = () => {
        this.setState({ hovered: true }, () => console.log(this.state.hovered))
    }

    unSetHover = () => {
        this.setState({ hovered: false }, () => console.log(this.state.hovered))
    }
    
    toggleFavorite = (event) => {
        let id = event.target.parentNode.getAttribute('id');
        this.props.toggleFavorite(id)
    }

    render() {
        return (
            <div id={this.props.id} className={classes['image-container']} onMouseEnter={this.setHover} onMouseLeave={this.unSetHover}>
                { this.state.hovered ? 
                        <Fragment>
                            <i className={["ri-heart-line favorite ri-2x", classes["heart-icon"]].join(' ')} onClick={(event) => this.toggleFavorite(event)}></i>
                            <i className={["ri-add-circle-line cart ri-2x", classes["cart-icon"]].join(' ')}></i> 
                        </Fragment>
                        : null
                }
                {
                    this.props.isFavorite && !this.state.hovered ? <i className={["ri-heart-fill ri-2x", classes["heart-icon"]].join(' ')}></i> : null
                }
                <img src={this.props.src} 
                    id={this.props.id} 
                    />                 
            </div>    
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleFavorite: (id) => dispatch(actions.toggleFavorite(id))
    }
}

const mapStateToProps = state => {
    return {
        images: state.image.images
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Image)
