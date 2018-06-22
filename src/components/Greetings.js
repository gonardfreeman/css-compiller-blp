import React, { Component, Fragment } from 'react';
import Loadable from 'react-loadable';
import styles from '../styles/greetings.scss';

const LoadableOtherComponent = Loadable({
  loader: () => import('./grid/Lesson1'),
  loading: () => <div>Loading...</div>
});

class Greetings extends Component {
  render() {
    return (
      <Fragment>
        <h1 className={`${styles.wrapper}`}>Hello react</h1>
        <LoadableOtherComponent />
      </Fragment>
    );
  }
}

export default Greetings;
