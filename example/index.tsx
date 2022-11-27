import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Schedule } from '../.';

const data = [
  {
    _id: '01',
    name: 'Procesamiento de Lenguaje Natural',
    days: {
      monday: ['07-11', '09-10'],
      tuesday: [],
      wednesday: ['07-08', '08-09'],
      thursday: ['07-09'],
      friday: [],
      saturday: ['12-16'],
    },
    color: 'red',
  },
  {
    _id: '02',
    name: 'Programación II',
    days: {
      monday: ['14-16'],
      tuesday: ['20-21'],
      wednesday: ['14-16'],
      thursday: [],
      friday: [],
      saturday: ['16-20'],
    },
    color: 'black',
  },
];

const App = () => {
  const getIdCourse = (id: string) => {
    console.log(id);
  };
  return (
    <Schedule
      courses={data}
      borderRightSchedule
      borderBottomSchedule
      backgroundColorSchedule="white"
      onClickId={getIdCourse}
    />
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
