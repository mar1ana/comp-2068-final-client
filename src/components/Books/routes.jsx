import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './index';
import New from './New';
import Edit from './Edit';
import Destroy from './Destroy';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/books" component={Index}/>
      <Route exact path="/books/new" component={New}/>
      <Route exact path="/books/edit/:id" component={Edit}/>
      <Route exact path="/books/destroy/:id" component={Destroy}/>
      
    </Switch>
  );
}
 
export default Routes;
