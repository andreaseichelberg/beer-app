import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Search from './Search';
import DetailProduct from './DetailProduct';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

