import React from 'react';
import ReactDOM from 'react-dom';
import Property from './Property';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Property />, div);
  ReactDOM.unmountComponentAtNode(div);
});