import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { readEvents } from '../../actions';
import map from 'lodash/map';

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>{event.title}</Link>
        </td>
        <td>{event.body}</td>
      </tr>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>{this.renderEvents()}</tbody>
        </table>

        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    );
  }
}

EventsIndex.propTypes = {
  events: PropTypes.object.isRequired,
  readEvents: PropTypes.func.isRequired,
};

const mapStateToPros = state => ({
  events: state.events,
});

const mapDispatchToProps = {
  readEvents,
};

export default connect(
  mapStateToPros,
  mapDispatchToProps,
)(EventsIndex);
