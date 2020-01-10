import {
  CREATE_EVENT,
  READ_EVENT,
  READ_EVENTS,
  DELETE_EVENT,
  UPDATE_EVENT,
} from '../actions';
import mapKeys from 'lodash/mapKeys';

const initialState = {};

export default (events = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT: {
      const data = action.response.data;
      return { ...events, [data.id]: data };
    }
    case READ_EVENT: {
      const data = action.response.data;
      return { ...events, [data.id]: data };
    }
    case READ_EVENTS: {
      return mapKeys(action.response.data, 'id');
    }
    case DELETE_EVENT: {
      delete events[action.id];
      return { ...events };
    }
    case UPDATE_EVENT: {
      const data = action.response.data;
      return { ...events, [data.id]: data };
    }
    default: {
      return events;
    }
  }
};
