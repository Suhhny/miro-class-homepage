import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const EX = 'auth/EX';

const ex = createAction(EX);

const initialState = Map({

});

const reducer = handleActions({
    [EX]: (state, action) => {

    },
}, initialState);

export default reducer;