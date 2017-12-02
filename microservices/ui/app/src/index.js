import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {theme,client} from './utils';
import { ApolloProvider } from 'react-apollo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(<ApolloProvider client={client}><MuiThemeProvider theme={theme}><App /></MuiThemeProvider></ApolloProvider>, document.getElementById('root'));
