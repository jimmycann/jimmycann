import React from 'react';
import ReactDOM from 'react-dom';
import FunctionalityCta from './template';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FunctionalityCta />, div);
});
