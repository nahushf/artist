import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
 console.log('rendering')
	const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});