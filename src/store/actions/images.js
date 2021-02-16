import axios from 'axios'
import * as actionTypes from './actionTypes';

export const loadingImages = () => {
    return {
        type: actionTypes.GET_IMAGES
    }
}

export const imagesLoaded = (data) => {
    return {
        type: actionTypes.IMAGES_LOADED,
        images: data.data
    }
}

export const imagesFailed = () => {
    return {
        type: actionTypes.IMAGES_FAILED
    }
}

export const favoriteUpdated = (id) => {
    return {
        type: actionTypes.UPDATE_FAVORITE_SUCCESS,
        id: id
    }
}

export const favoriteUpdateFailed = (err) => {
    return {
        type: actionTypes.UPDATE_FAVORITE_FAILED,
        err : err
    }
}

export const loadImages = () => {
    return dispatch => {
        dispatch(loadingImages())
        axios.get('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then(res => {
            dispatch(imagesLoaded(res))
        })
        .catch(err => {
            console.log(err)
            dispatch(imagesFailed(err))
        })
    }
}

export const toggleFavorite = (id) => {
    return dispatch => {
        if(id) {
            dispatch(favoriteUpdated(id))
        }
        else {
            dispatch(favoriteUpdateFailed("Id is not correct"))
        }
    }
}