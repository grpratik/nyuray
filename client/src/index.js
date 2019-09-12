import React from 'react';
import ReactDOM from 'react-dom';
import {reduxFirestore, getFirestore } from 'redux-firestore';
import './index.css';
import App from './App';
//import serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(fbConfig), // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//serviceWorker();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
// import rootReducer from './store/reducers/rootReducer'
// import {Provider} from 'react-redux'

// const store = createStore(rootReducer);

// export default function configureStore() {  
//     return createStore(
//       rootReducer,
//       applyMiddleware(thunk)
//     );
//   }

// ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// //serviceWorker();
