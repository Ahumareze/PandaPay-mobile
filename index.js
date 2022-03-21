/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//Imported Components
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

//Imported reducers
import reducer from './App/redux/reducer/reducer';

//Redux configuration
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    mainReducer: reducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

const appUseRedux = () => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}


AppRegistry.registerComponent(appName, () => appUseRedux);
