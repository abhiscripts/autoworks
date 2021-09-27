import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import Todo from './component/Todo';
import AppReducer from './redux/Reducers/RootReducer';

const store = createStore(AppReducer, applyMiddleware(logger));
const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};
export default App;
