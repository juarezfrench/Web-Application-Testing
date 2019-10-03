import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import Dashboard from './Dashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Hits are Displayed', () => {
  const { getByText } =  render(<Dashboard/>);
   getByText(/Hits:/i);
});


// test('all values go to zero on a hit', () => {
//   let actual;
//   let expected;
//   actual = hitCount(+1);
//   expected = 2;
//   expect(actual).toBe(expected);
//   expect(actual).not.toBe(0);


