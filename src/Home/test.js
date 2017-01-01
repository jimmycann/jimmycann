import React from 'react';
import ReactDOM from 'react-dom';
import BenefitsCta from './template';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BenefitsCta />, div);
});
