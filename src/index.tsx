///<reference types="webpack-env" />

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import AppComponent from './AppComponent';

ReactDom.render(
  <AppContainer>
    <AppComponent/>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}