import React from 'react';
import renderer from 'react-test-renderer';
import { Schedule } from '../../src/components/index';
import { data } from '../data/courses';

describe('ContainerSchedule', () => {
  test('should render ContainerSchedule title component', () => {
    const wrapper = renderer.create(
      <Schedule.DayContainer
        data={data}
        daysPosition={'monday'}
        daysVal={'7:00 - 8:00'}
      />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should render ContainerSchedule title component', () => {
    const wrapper = renderer.create(
      <Schedule.DayContainer
        borderRightSchedule
        data={data}
        daysPosition={'monday'}
        daysVal={'7:00 - 8:00'}
      />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
