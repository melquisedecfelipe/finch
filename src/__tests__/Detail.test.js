import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Detail from '../pages/Detail';

import state from '../services/mockStore';

describe('Detail testing with Enzyme', () => {
  const mockStore = configureStore();
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(state);
    wrapper = shallow(<Detail store={store} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
