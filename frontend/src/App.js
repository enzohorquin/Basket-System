import React from 'react';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store/store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends React.Component {
  render() {
    library.add(faShoppingCart); 

    return (
     <Provider store={store}>
      <Router>
          <div>
            <Navbar />
              <div className="container">
                <Route exact path="/home" component={ Home } />
                <Route exact path="/register" component={ Register } />
                <Route exact path="/login" component={ Login } />
              </div>
          </div>
        </Router>
        </Provider>
        
    );
  }
}


export default App;
