import React from 'react';
import Header from './Header/index';
import Search from './Search/index';
import Display from './Display/index';

function MainPage() {
  return (

    <div className="App">
      <Header />
      <div className="container">
        <Search />
        <Display />
      </div>
    </div>
  );
}

export default MainPage;
