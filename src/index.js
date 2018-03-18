import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import Test from './components/test';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<Test />
	</Provider>
	, document.getElementById('root')
);
registerServiceWorker();
