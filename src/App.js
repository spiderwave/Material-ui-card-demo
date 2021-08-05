import React from 'react';
import { Grid } from '@material-ui/core';
import Content from './Content';
import Header from './Header';
import SignIn from './pages/sign_in';
import SignUp from './pages/sign_up';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';



const  App = () => {
  return (
    <Grid container direction="column">
      <Grid item> 
      <Header/> 
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2}/>
          <Grid item xs={12} sm={8}>

          <BrowserRouter>
      <Switch>
        <Route exact path="/singup" component={SignUp} />
        <Route exact path="/singin" component={SignIn} />
        <Route path="/" component={Content} />
      </Switch>
    </BrowserRouter>
          
          
          </Grid>
          <Grid item xs={false} sm={2}/>
          </Grid>
    </Grid>
  );
};

export default App;
