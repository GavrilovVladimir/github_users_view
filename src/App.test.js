import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// it("App loads with initial state of 0", () => {
//   const { container } = render(<App />);
//   const countValue = getByTestId(container, "countvalue");
//   expect(countValue.textContent).toBe("0");
// });
