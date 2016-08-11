import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import './HelloApi.css';

class HelloApi extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((item) => {
      return (
        <li className="list-group-item" key={item.id}>
          <span className="HelloApi-list-item-title">{`POST #${item.id}`}</span>
          {item.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="HelloApi">
        <p>
          Say hello to your first API call by using Redux. You can check the files at following folders
          to see how it was implemented: <code>src/actions/</code>, <code>src/reducers/</code>,
          and <code>src/containers/</code>
        </p>
        <hr />
        <ul className="HelloApi-list list-group">
          {this.renderPosts()}
        </ul>
        <hr />
        API: <a href="https://jsonplaceholder.typicode.com">https://jsonplaceholder.typicode.com</a>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all }
}

export default connect(mapStateToProps, { fetchPosts })(HelloApi);
