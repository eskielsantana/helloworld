import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home.jsx';
//import SearchPage from './pages/Search.jsx';
import SidePage from './pages/SidePage.jsx';
import NotFound from './pages/PageNotFound.jsx';

// CSS
import './App.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';

// Others
import Store from './Store.jsx';

const App = () => (
      <Provider store={Store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/side" component={SidePage} />     
            {/* <Route path="/results/:searchString" component={SearchPage} /> */}
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
);

export default App;
