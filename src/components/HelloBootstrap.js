import React from 'react';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import styles from './HelloBootstrap.css';

const HelloBootstrap = () => {
  return (
    <Grid className={styles.container}>
      <Row className={styles.intro}>
        <Col sm={8} smOffset={2}>
        <h3>Hello Bootstrap</h3>
          <p>
            Welcome to the Bootstrap world! See how the grid system is used and happy
            coding. You can find the source of this page at <code>src/components/HelloBootstrap</code>.
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={4} smOffset={2}>
          <Panel header="React Bootstrap" bsStyle="success">
            <p>
              React-Bootstrap contains all the regular javascript's bootstrap functionality overwriten
              for React. It doesn't depends on jQuery. You can use it a as any other react component.
            </p>
          <p>
            Check the documentation to learn how to use these components.
          </p>
          <a href="https://react-bootstrap.github.io/">https://react-bootstrap.github.io/</a>
          </Panel>
        </Col>
        <Col sm={4}>
          <Panel header="Notes" bsStyle="warning">
            <p>
              You can also use Bootstrap as usually. This is by adding classes by your self.
              Make sure the component doesn't provide any client side functionality, otherwise it won't work.
            </p>
            <a className="btn btn-info" href="#">A simple button</a>
          </Panel>
        </Col>
      </Row>
      <Row>
        <Col sm={8} smOffset={2}>
          <h3>Theming</h3>
          <p>
            We no longer need to modify Bootstrap source in order to customize our applications. Bootstrap
            is now referenced from a CDN to take advantage of caching, perfomance, and availability. Instead
            we've added support for <strong>Theming</strong>. Following example customize color and some extra
            property for buttons. You can see the code at <code>src/themes/default.scss</code>.
          </p>
          <p>
          <Button bsStyle="primary">Happy Button</Button>
          </p>
          <p>
            Now you are able to customize any control by using either pure css or by using varibles and mixins.
            You can use Bootstrap source code as referece in order to make customization safer. Check the sass files
            at <code>node_modules/bootstrap-sass/assets/stylesheets/</code> for reference.
          </p>
        </Col>
      </Row>
    </Grid>
  )
}

export default HelloBootstrap;
