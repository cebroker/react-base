import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const API_URL = 'https://jsonplaceholder.typicode.com';

export function fetchPosts() {
  const request = axios.get(`${API_URL}/posts`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}
