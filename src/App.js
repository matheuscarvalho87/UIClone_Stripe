import React from 'react';

import GlobalStyle from './styles/globalstyles'
import Layout from './components/layout'
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <Layout>
      <NavBar/>
    </Layout>

    <GlobalStyle/>
    </>
  );
}

export default App;
