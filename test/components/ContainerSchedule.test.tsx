import React from 'react';
import renderer from 'react-test-renderer';
import { Schedule } from '../../src/components/index';

describe('ContainerSchedule', () => {
  test('should render ContainerSchedule title component', () => {
    const wrapper = renderer.create(
      <Schedule.Container title="ContainerSchedule Title" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should render ContainerSchedule color component', () => {
    const wrapper = renderer.create(
      <Schedule.Container backgroundColor="black" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should render ContainerSchedule color and title component', () => {
    const wrapper = renderer.create(
      <Schedule.Container title="ContainerSchedule Title" backgroundColor="black" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
