import React from 'react';
import Cell from './Cell.js';
import expect from 'expect.js';
import {shallow} from 'enzyme';
import configureStore from '../store';

describe('<Cell />', () => {
  it ('renders without crashing', () => {
    const store = configureStore();
    const wrapper = shallow(<Cell store={store} />);

    expect(wrapper.find('.cell').length).to.be(1);
  });
});
