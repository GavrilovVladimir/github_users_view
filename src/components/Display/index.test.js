import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
// import {initialState} from './../../store/reducer'
import Display from './';
import { Provider } from 'react-redux';
import {store} from './../../store'


let container = null;
beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // подчищаем после завершения
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders with or without a name', () => {
    act(() => {
        render(<Provider store = {store}><Display/></Provider>, container);
    });
    expect(container.textContent).toBe('');
});
