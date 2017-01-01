import React from 'react';
import ReactDOM from 'react-dom';
import MarketplaceCta from './template';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MarketplaceCta />, div);
});
