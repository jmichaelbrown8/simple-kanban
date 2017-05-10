import React from 'react';
import ColumnHeader from './ColumnHeader.js';
import expect from 'expect.js';
import {shallow} from 'enzyme';
import configureStore from '../store';

describe('<ColumnHeader />', () => {
  const store = configureStore();
  it ('renders without crashing', () => {
    const wrapper = shallow(<ColumnHeader store={store} column={{id: 0}} />);
    expect(wrapper.find('.columnheader').length).to.eql(1);
  });
});
