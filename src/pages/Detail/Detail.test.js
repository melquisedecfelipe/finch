import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Detail from "./index";

import store from '../../store';

describe('Detail page testing with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(
        <Provider store={store}>
          <Detail />
        </Provider>);
    });
});
