import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer, hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { createBrowserHistory } from 'history';
import { Switch, Route } from 'react-router-dom';
import Hello from './containers/Hello';
import { ConnectedRouter } from 'react-router-redux';

const history = createBrowserHistory();
const store = configureStore(history);

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={Hello} />
  </Switch>
));

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);
