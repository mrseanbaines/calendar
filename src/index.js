import React, { Suspense, lazy, Fragment } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from '~/reset';
import theme from '~/theme';
import Loader from '~/components/Loader';
const App = lazy(() => import('~/containers/App'));

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

const GlobalStyles = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css?family=Barlow:600');

  html {
    font-family: ${props => props.theme.fonts.sansSerif};
    font-weight: ${props => props.theme.fontWeights.medium};
    color: ${props => props.theme.colors.greys[1]};
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </Fragment>
  </ThemeProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
