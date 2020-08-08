import React from 'react';
import App from '../App';
import { shallow, mount } from 'enzyme';
import toJson, { shallowToJson } from 'enzyme-to-json';

describe('App component', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    mount(<App />);
  });

  it('renders properly', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('renders the switch', () => {
    expect(wrapper.find('Switch')).toHaveLength(1);
  });
});
