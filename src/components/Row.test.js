import React from 'react';
import Row from './Row.js';
import expect from 'expect.js';
import {shallow} from 'enzyme';
import configureStore from '../store';

describe('<Row />', () => {
  const store = configureStore();
  it ('renders without crashing', () => {
    const wrapper = shallow(<Row store={store} row={{id:0}} index={0} />);
  });
});
