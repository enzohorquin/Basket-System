import React from 'react';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
     <Provider store={store}>
      <Router>
          <div>
            <Navbar />
              <Route exact path="/" component={ Home } />
              <div className="container">
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
