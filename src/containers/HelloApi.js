import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './HelloApi.scss';

class HelloApi extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.slice(0, 10).map((item) => {
      return (
        <li key={item.id} className={styles.item}>
          <span className={styles.title}>{`POST #${item.id}`}</span>
          {item.title}
        </li>
      );
    });
  }

  render() {
    return (
      <Grid className={styles.container}>
        <Row>
          <Col sm={8} smOffset={2}>
            <h3>Hello Redux</h3>
            <p>
              Say hello to your first API call by using Redux. You can check the files at following folders
              to see how it was implemented at: <code>src/actions/</code>, <code>src/reducers/</code>,
              and <code>src/containers/</code>
            </p>
            <hr />
            <ul className={styles.list + " list-group"}>
              {this.renderPosts()}
            </ul>
            <hr />
            API: <a href="https://jsonplaceholder.typicode.com">https://jsonplaceholder.typicode.com</a>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all }
}

export default connect(mapStateToProps, { fetchPosts })(HelloApi);
