import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import Display from '.';
import { store } from '../../store';


let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders display', () => {
  act(() => {
    render(
      <Provider store={store}>
        <Display />
      </Provider>, container,
    );
  });
  expect(container.textContent).toBe('');
});
