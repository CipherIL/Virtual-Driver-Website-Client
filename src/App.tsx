import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

//Layouts & Redirects
import PageLayout from './components/containers/PageLayout';
import HomepageRedirect from './components/redirects/HomepageRedirect';
import UserRedirect from './components/redirects/UserRedirect';

//Components
import { UserProvider } from './contexts/user.context';
import Login from './pages/login/Login.page';
import MyFiles from './pages/myFiles/MyFiles.page';

//Styles
import './app.styles.scss';
import LoginRedirect from './components/redirects/LoginRedirect';
import SharedFiles from './pages/sharedFiles/SharedFiles.page';

library.add(fas);

function App() {
  return (
    <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path="/" element={<PageLayout/>}>
          <Route index element={<HomepageRedirect/>}/>
          <Route path="login" element={<LoginRedirect><Login/></LoginRedirect>}/>
          <Route path="my-files" element={<UserRedirect><MyFiles/></UserRedirect>}/>
          <Route path="shared-files" element={<UserRedirect><SharedFiles/></UserRedirect>}/>
        </Route>
      </Routes>
    </UserProvider>
    </BrowserRouter>
  );
}

export default App;