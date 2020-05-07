import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Details from './components/Details'
import Table from './components/Table'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/details/:id' component={Details} />
        <Route path='/' component={Table} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
