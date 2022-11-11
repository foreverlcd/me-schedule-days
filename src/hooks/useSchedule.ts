import { useEffect, useState } from 'react';
import { coursesInitialValue } from '../data/courses';
import { DataProps } from '../interfaces/schedules.interfaces';

export const useSchedule = (value: DataProps[] = coursesInitialValue) => {
  const [data, setData] = useState<DataProps[]>(value);

  const setValueCourses = (value: DataProps[]) => {
    setData(value);
  };

  useEffect(() => {
    setData(value);
  }, [value]);

  return {
    data,
    setValueCourses,
  };
};
