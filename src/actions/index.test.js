import { expect } from 'chai';
import { fetchPosts } from './index';
import { FETCH_POSTS } from './index';

describe('fetchPosts', () => {
  it('creates the correct action', () => {
    const action = fetchPosts();

    expect(action.type).to.eql(FETCH_POSTS);
    expect(action.payload).to.be.a('promise');

    return action.payload.then((res) => {
      expect(res.data).to.eql(global.data.posts);
    });
  });
});
