import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import './styles/index.scss';

const LoadableOtherComponent = Loadable({
  loader: () => import('./components/Greetings'),
  loading: () => <div>Loading...</div>
});

ReactDOM.render(<LoadableOtherComponent />, document.getElementById('index'));
