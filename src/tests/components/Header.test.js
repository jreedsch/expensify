//import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import React from 'react';
//import toJSON from 'enzyme-to-json'; // see jest.config.json
import { Header } from '../../components/Header';
//import { startLogout } from '../../actions/auth';

// in Jest, 'u' to save new baseline snapshot
test('should render Header correctly', () => {
  const startLogoutMock = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogoutMock}/>);
  //expect(toJSON(wrapper)).toMatchSnapshot();
  expect(wrapper).toMatchSnapshot();
  //expect(wrapper.find('h1').length).toBe(1); //count of h1 elements
  //expect(wrapper.find('h1').text()).toBe('Expensify'); //contents of h1 element

  // using ReactShallowRenderer
  //const renderer = new ReactShallowRenderer();
  //renderer.render(<Header />);
  //console.log(renderer.getRenderOutput());
  //expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  const startLogoutMock = jest.fn();  //spy
  const wrapper = shallow(<Header startLogout={startLogoutMock} />);
  wrapper.find('button').simulate('click');
  expect(startLogoutMock).toHaveBeenCalled();
});
