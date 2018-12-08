import { createAction, handleActions } from 'react-actions';
import { Map, List } from 'immutable';
import axios from 'axion';

const COMMENTLISTSUCCESS = 'comment/COMMENTLISTSUCCESS';
const COMMENTLISTFAILURE = 'comment/COMMENTLISTFAILURE';
const COMMENTCREATESUCCESS = 'comment/COMMENTCREATESUCCESS';
const COMMENTCREATEFAILURE = 'comment/COMMENTCREATEFAILURE';
const COMMENTDELETESUCCESS = 'comment/COMMENTDELETESUCCESS';
const COMMENTDELETEFAILURE = 'comment/COMMENTDELETEFAILURE';
const COMMENTLIKESUCCESS = 'comment/COMMENTLIKESUCCESS';
const COMMENTLIKEFAILURE = 'comment/COMMENTLIKEFAILURE';
const COMMENTDISLIKESUCCESS = 'comment/COMMENTDISLIKESUCCESS';
const COMMENTDISLIKEFAILURE = 'comment/COMMENTDISLIKEFAILURE';

const commentListSuccess = createAction(COMMENTLISTSUCCESS);
const commentListFailure = createAction(COMMENTLISTFAILURE);

export default requestCommentList = () => {
    return async (dispatch) => {
        try{

        }catch(err){

        }
    }
}

const commentCreateSuccess = createAction(COMMENTCREATESUCCESS);
const commentCreateFailure = createAction(COMMENTCREATEFAILURE);

export default requestCommentCreate = () => {
    return async (dispatch) => {
        try{

        }catch(err){

        }
    }
}

const commentDeleteSuccess = createAction(COMMENTDELETESUCCESS);
const commentDeleteFailure = createAction(COMMENTDELETEFAILURE);

export default requestCommentDelete = () => {
    return async (dispatch) => {
        try{

        }catch(err){

        }
    }
}

const commentLikeSuccess = createAction(COMMENTLIKESUCCESS);
const commentLikeFailure = createAction(COMMENTLIKEFAILURE);

export default requestCommentLike = () => {
    return async (dispatch) => {
        try{

        }catch(err){

        }
    }
}

const commentDislikeSuccess = createAction(COMMENTDISLIKESUCCESS);
const commentDislikeFailure = createAction(COMMENTDISLIKEFAILURE);

export default requestCommentDislike = () => {
    return async (dispatch) => {
        try{

        }catch(err){

        }
    }
}

const initialState = Map({

})

const reducer = handleActions({
    [COMMENTLISTSUCCESS]: (state, action) => {

    }
    [COMMENTLISTFAILURE]: (state, action) => {

    }
    [COMMENTCREATESUCCESS]: (state, action) => {

    }
    [COMMENTCREATEFAILURE]: (state, action) => {

    }
    [COMMENTDELETESUCCESS]: (state, action) => {

    }
    [COMMENTDELETEFAILURE]: (state, action) => {

    }
    [COMMENTLIKESUCCESS]: (state, action) => {

    }
    [COMMENTLIKEFAILURE]: (state, action) => {

    }
    [COMMENTDISLIKESUCCESS]: (state, action) => {

    }
    [COMMENTDISLIKEFAILURE]: (state, action) => {

    }
}, initialState);

export default reducer;
