import React from 'react';
import { shallow } from './enzyme';
import App from './App';

test('should render Posts component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("Posts").exists()).toBe(true)
});
