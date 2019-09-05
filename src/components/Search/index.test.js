import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import Search from '.';
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

it('render search', () => {
  act(() => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>, container,
    );
  });
  expect(container.textContent).toBe('UserName from Github');
});
