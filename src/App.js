import React from 'react';
import { Route } from 'react-router-dom';
import Layout from "./components/layout/Layout";
import NewBook from './pages/NewBook';
import AllBooks from './pages/AllBooks';


function App() {

  return (
    <Layout>
      <Route path='/' exact>
        <AllBooks />
      </Route>
      <Route path='/new-book'>
        <NewBook /><AllBooks />
      </Route>
    </Layout>
  );
}

export default App;
