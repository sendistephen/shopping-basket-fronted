import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Register from '../components/auth/Register';

describe('Register component', () => {
  const wrapper = shallow(<Register />);
  const preventDefault = jest.fn();

  it('renders properly', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('has a form', () => {
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('form').simulate('submit', { preventDefault }));
    expect(preventDefault).toBeCalled();
  });
});
