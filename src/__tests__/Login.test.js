import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Login from '../components/auth/Login';

describe('Login component', () => {
  const wrapper = shallow(<Login />);
  const preventDefault = jest.fn();

  it('renders properly', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('renders email input', () => {
    expect(shallow(<Login />).find('#email').length).toEqual(1);
  });

  it('renders password input', () => {
    expect(shallow(<Login />).find('#password').length).toEqual(1);
  });

  describe('Email input', () => {
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow(<Login />);
      const userEmail = wrapper.find('#email');
      userEmail.simulate('change', {
        target: { name: 'email', value: 'test@example.com' },
      });
      userEmail.value = 'test@example.com';
      expect(userEmail.value).toEqual('test@example.com');
    });
  });

  describe('Password input', () => {
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow(<Login />);
      const userPassword = wrapper.find('#password');
      userPassword.simulate('change', {
        target: { name: 'password', value: 'secret' },
      });
      userPassword.value = 'secret';
      expect(userPassword.value).toEqual('secret');
    });
  });
});
