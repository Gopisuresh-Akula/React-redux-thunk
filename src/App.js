import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,Switch,Link
} from 'react-router-dom'
import styled from 'styled-components';
// Import child components
import MovieDetail from './Movies/MovieDetail';
import MovieList from './Movies/MovieList';
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import Toggle from './Toggle/Toggle';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { save,load } from 'redux-localstorage-simple';



const Middleware=[logger,thunk]

const store=createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...Middleware,save()))
  
  )
  // load check the localStorage exist and if the localStorage load as intial state

const App=()=> {
  return (
   <Provider store={store}>
  <Router>
    <div>
      <Header>
        <Title to="/">Movie Database</Title>
      </Header>
      <Toggle/>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
   </Provider>
  )
}

export default App
const Header = styled.header`
  background-color: #111;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0;
  font-size: 24px;
`;