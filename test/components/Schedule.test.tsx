import React from 'react';
import renderer from 'react-test-renderer';
import { Schedule } from '../../src/components/index';
import { data } from '../data/courses';

describe('Schedule', () => {
  test('should render Schedule component default', () => {
    const wrapper = renderer.create(<Schedule />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should render Schedule component with data', () => {
    const wrapper = renderer.create(<Schedule courses={data} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
