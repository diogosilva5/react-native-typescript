import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store';

import AppContainer from './src/AppContainer';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
};

export default App;
