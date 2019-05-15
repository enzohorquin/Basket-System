import React from 'react';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store/store';
import { Landing } from './components/Landing';
import { OrderC } from './components/OrderC';



import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends React.Component {
  render() {
    

    return (
     <Provider store={store}>
      <Router>
          
            <Navbar />
                <Route exact path="/" component={ Landing } />
                <Route exact path="/home" component={ Home } />
                <Route exact path="/register" component={ Register } />
                <Route exact path="/login" component={ Login } />
                <Route exact path="/order" component={ OrderC } />

        </Router>
        </Provider>
        
    );
  }
}


export default App;
