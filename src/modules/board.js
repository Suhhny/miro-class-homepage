import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import axios from 'axios';

const BOARDLISTSUCCESS = 'board/BOARDLISTSUCCESS';
const BOARDLISTFAILURE = 'board/BOARDLISTFAILURE';
const BOARDSHOWSUCCESS = 'board/BOARDSHOWSUCCESS';
const BOARDSHOWFAILURE = 'board/BOARDSHOWFAILURE';
const BOARDCREATESUCCESS = 'board/BOARDCREATESUCCESS';
const BOARDCREATEFAILURE = 'board/BOARDCREATEFAILURE';
const BOARDDELETESUCCESS = 'board/BOARDDELETESUCCESS';
const BOARDDELETEFAILURE = 'board/BOARDDELETEFAILURE';
const BOARDLIKESUCCESS = 'board/BOARDLIKESUCCESS';
const BOARDLIKEFAILURE = 'board/BOARDLIKEFAILURE';
const BOARDDISLIKESUCCESS = 'board/BOARDDISLIKESUCCESS';
const BOARDDISLIKEFAILURE = 'board/BOARDDISLIKEFAILURE';

const boardListSuccess = createAction(BOARDLISTSUCCESS);
const boardListFailure = createAction(BOARDLISTFAILURE);

export default requestBoardList = () => {
    return async (dispatch) => {
        try{
            let res = await axios.get('/api/board/list');
            if(res.data.success){
                dispatch(boardListSuccess({ list: res.data.boards }));
            }else{
                alert('데이터를 불러올 수 없습니다.');
                dispatch(boardListFailure());
            }
        }catch(err){
            console.log(err);
            alert('데이터를 불러올 수 없습니다.');
            dispatch(boardListFailure());
        }
    }
}

const boardShowSuccess = createAction(BOARDSHOWSUCCESS);
const boardShowFailure = createAction(BOARDSHOWFAILURE);

export default requestBoardShow = (id) => {
    return async (dispatch) => {
        try{
            let res = await axios.get(`/api/board/show?id=${id}`);
            if(res.data.success){
                dispatch(boardShowSuccess({ show: res.data.board }));
            }else{
                alert('데이터를 불러올 수 없습니다.');
                dispatch(boardShowFailure());
            }
        }catch(err){
            console.log(err);
            alert('데이터를 불러올 수 없습니다.');
            dispatch(boardShowFailure());
        }
    }
}

const boardCreateSuccess = createAction(BOARDCREATESUCCESS);
const boardCreateFailure = createAction(BOARDCREATEFAILURE);

export default requestBoardCreate = (formData) => {
    return async (dispatch) => {
        try{
            let res = await fetch('/api/board/write', {
                'method': 'POST',
                'headers': {
                    'Accept': 'application/json',
                    'x-access-token'
                },
                'body': formData
            });

            res = await res.json();
            if(res.data.success){
                alert('글이 작성되었습니다.');
                dispatch(boardCreateSuccess({ board: res.data.board }));
            }else{
                alert('작성할 수 없습니다.');
                dispatch(boardCreateFailure());
            }
        }catch(err){
            console.log(err);
            alert('작성할 수 없습니다.')
            dispatch(boardCreateFailure());
        }
    }
}

const boardDeleteSuccess = createAction(BOARDDELETESUCCESS);
const boardDeleteFailure = createAction(BOARDDELETEFAILURE);

export default requestBoardDelete = (id) => {
    return async (dispatch) => {
        try{
            let res = await fetch(`/api/board/delete?id=${id}`, {
                'method': 'DELETE',
                'headers': {
                    'Accept': 'application/json',
                    'x-access-token'
                }
            });

            res = await res.json();
            if(res.data.success){
                alert('글이 삭제되었습니다.');
                dispatch(boardDeleteSuccess());
            }else{
                alert('삭제할 수 없습니다.');
                dispatch(boardDeleteFailure());
            }

        }catch(err){
            console.log(err);
            alert('삭제할 수 없습니다.');
            dispatch(boardDeleteFailure());
        }
    }
}

const boardLikeSuccess = createAction(BOARDLIKESUCCESS);
const boardLikeFailure = createAction(BOARDLIKEFAILURE);

export default requestBoardLike = () => {
    return async (dispatch) => {
        try{
            let res = await fetch();
            res = res.json();
        }catch(err){
            console.log(err);
            alert('');
            dispatch(boardLikeFailure());
        }
    }
}

const boardDislikeSuccess = createAction(BOARDDISLIKESUCCESS);
const boardDislikeFailure = createAction(BOARDDISLIKEFAILURE);

const default requestBoardDislike = () => {
    return async (dispatch) => {
        try{
            let res = await fetch();
            res = res.json();
        }catch(err){
            console.log(err);
            alert('');
            dispatch(boardDislikeFailure());
        }
    }
}

const initialState = Map({
    list: List([]),
    board: Map({
        category: null,
        title: null,
        author: null,
        content: null,
        date: null,
        tag: List([]),
        like: 0,
        dislike: 0
    })
});

const reducer = handleActions({
    [BOARDLISTSUCCESS]: (state, action) => {

    }
    [BOARDLISTFAILURE]: (state, action) => {
        return initialState;
    }
    [BOARDSHOWSUCCESS]: (state, action) => {

    }
    [BOARDSHOWFAILURE]: (state, action) => {
        return initialState;
    }
    [BOARDCREATESUCCESS]: (state, action) => {

    }
    [BOARDCREATEFAILURE]: (state, action) => {
        
    }
    [BOARDDELETESUCCESS]: (state, action) => {

    }
    [BOARDDELETEFAILURE]: (state, action) => {

    }
    [BOARDLIKESUCCESS]: (state, action) => {

    }
    [BOARDLIKEFAILURE]: (state, action) => {

    }
    [BOARDDISLIKESUCCESS]: (state, action) => {

    }
    [BOARDDISLIKEFAILURE]: (state, action) => {

    }
}, initialState);

export default reducer;
