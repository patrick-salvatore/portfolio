import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('(Component) App', () => {
  it('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});