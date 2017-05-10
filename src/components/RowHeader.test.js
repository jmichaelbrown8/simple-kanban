import React from 'react';
import RowHeader from './RowHeader.js';
import expect from 'expect.js';
import {shallow} from 'enzyme';
import configureStore from '../store';

describe('<RowHeader />', () => {
  it ('renders without crashing', () => {
    const store = configureStore();
    const wrapper = shallow(<RowHeader store={store} row={{row:{id: 0}}} />);

    expect(wrapper.find('.rowheader').length).to.be(1);
  });
});
