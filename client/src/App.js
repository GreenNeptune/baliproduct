import React, { useEffect } from 'react';
import 'bootstrap/scss/bootstrap.scss';

import store from '../src/redux_store'
import { Provider } from 'react-redux';
import CartContainer from './components/containers/CartContainer';
import ProductsContainer from './components/containers/ProductsContainer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/routing/PrivateRoute';

import NotFound from './components/NotFound';
import NavigationBar from './components/NavigationBar';
import Register from './components/Register';
import Login from './components/Login';
import Alert from './components/Alert'
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './redux_store/reducers/auth/actions';

const App = () => {

  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="app container-fluid  p-0">
      <Provider store={store}>
        <Router>
          <NavigationBar />
          < Alert />
          <Switch >
            < Route exact path='/login' component={Login} />
            < Route exact path='/register' component={Register} />
            < PrivateRoute exact path='/' component={ProductsContainer} />
            < PrivateRoute exact path='/cart' component={CartContainer} />
            < Route exact component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
