import { combineReducers } from 'redux';
import { enthusiasmReducer } from './enthusiasm';
import { routerReducer } from 'react-router-redux';

// NOTE: current type definition of Reducer in 'react-router-redux' and 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<any>({
  enthusiasm: enthusiasmReducer as any,
  router: routerReducer as any
});
