// import React from 'react';
// import { render, unmountComponentAtNode } from 'react-dom';
// import { act } from 'react-dom/test-utils';
// // import {initialState} from './../../store/reducer'
// import Search from './';
//
// let container = null;
// beforeEach(() => {
//     // подготавливаем DOM-элемент, куда будем рендерить
//     container = document.createElement('div');
//     document.body.appendChild(container);
// });
//
// afterEach(() => {
//     // подчищаем после завершения
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// });
//
// it('renders with or without a name', () => {
//     act(() => {
//         render(<Search />, container);
//     });
//     expect(container.textContent).toBe('');
// });