import {SUBMIT_FORM} from '../actions/action';

const initState = {
	name: ''
};

export default (state=initState, action) => {
	console.log(action.name);
	if(action.type === SUBMIT_FORM){
		return Object.assign({}, state, {
			name: action.name
		});
	}
	return state;
}