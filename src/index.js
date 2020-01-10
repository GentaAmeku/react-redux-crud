import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import App from './components/App/App';
import EventsNew from './components/EventsNew/EventsNew';
import EventsIndex from './components/EventsIndex/EventsIndex';
import EventsShow from './components/EventsShow/EventsShow';

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);

const store = createStore(reducers, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/events/new" component={EventsNew} />
        <Route path="/events/:id" component={EventsShow} />
        <Route exact path="/" component={App} />
        <Route exact path="/events" component={EventsIndex} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
