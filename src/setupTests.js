import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import data from '../db.json';
import { API_URL } from './config';

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

mock.onGet(`${API_URL}/posts`).reply(200, data.posts);

const storeFake = (state) => {
  return {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {
      return { ...state };
    },
  };
};

global.data = data;
global.storeFake = storeFake;
