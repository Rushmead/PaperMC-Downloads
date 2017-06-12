import { createStore } from 'redux';
import rootReducer from  './reducers';
import devToolsEnhancer from 'remote-redux-devtools';
export default(initialState) => {
    return createStore(rootReducer, initialState, devToolsEnhancer());
}