import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import PracticeReducer from './reducers/reducer';

export default createStore(
	combineReducers({
		form: formReducer,
		reducer: PracticeReducer
	})
);