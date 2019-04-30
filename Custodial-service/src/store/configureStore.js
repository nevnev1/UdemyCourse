import { createStore, combineReducers } from 'redux';

export default () => {
    const store = createStore(
        combineReducers({
            user: userReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};