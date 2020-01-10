import React, { Component } from 'react';
import EventsIndex from '../EventsIndex/EventsIndex';
import AppStyles from './styles';

class App extends Component {
  render() {
    return (
      <AppStyles>
        <EventsIndex />
      </AppStyles>
    );
  }
}

export default App;
