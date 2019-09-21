import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage'; //use named export for unconnected component

test('should render login page correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const startLogin= jest.fn();  //spy
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});
