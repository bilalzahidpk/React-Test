import * as actionTypes from '../actions/actionTypes';

const initialState = {
   images: null,
   err: null,
   loading: null,
};

const imagesLoading = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const imagesLoaded = (state, action) => {
    return {
        ...state,
        images: action.images,
        loading: false
    }
}

const imagesFailed = (state, action) => {
    return {
        ...state,
        err: action.err,
        loading: false
    }
}

const favoriteUpdateSuccess = (state, action) => {
    return {
        ...state,
        images: [{...state.images.find(item => item.id === action.id), isFavorite: !state.images.find(item => item.id === action.id).isFavorite }, ...state.images.filter(image => image.id !== action.id )]
    }
}

const favoriteUpdateFailed = (state, action) => {
    return {
        ...state,
        err: action.err,
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.IMAGES_LOADED: return imagesLoaded(state, action);
        case actionTypes.IMAGES_FAILED: return imagesFailed(state, action);
        case actionTypes.GET_IMAGES: return imagesLoading(state, action);
        case actionTypes.UPDATE_FAVORITE_SUCCESS: return favoriteUpdateSuccess(state, action)
        case actionTypes.UPDATE_FAVORITE_FAILED: return favoriteUpdateFailed(state, action)
        default: return state;
    }
}

export default reducer;