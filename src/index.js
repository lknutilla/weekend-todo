import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import ExampleComponent from './ExampleComponent';
import './index.css';

ReactDOM.render(

  <Router>
    <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/example">Example</Link></li>
    </ul>


    <Route exact path="/" component={App}/>
    <Route path="/example" component={ExampleComponent}/>
    </div>
  </Router>




  , document.getElementById('root'));
registerServiceWorker();
