import React from 'react';
import Card from './Card.js';
import expect from 'expect.js';
import {shallow} from 'enzyme';

describe('<Card />', () => {
  it ('renders without crashing', () => {
    const wrapper = shallow(<Card card={{id: 0}} />);
    expect(wrapper.find('.card').length).to.be(1);
  });
});
