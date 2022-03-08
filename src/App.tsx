import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

//Components
import Navbar from './components/navbar/Navbar';
import { UserProvider } from './contexts/user.context';

//Styles
import './app.styles.scss';

library.add(fas);

function App() {
  return (
    <BrowserRouter>
    <UserProvider>
      <div className="app">
        <Navbar/>
      </div>
    </UserProvider>
    </BrowserRouter>
  );
}

export default App;
