import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Schedule } from '../.';

const data = [
  {
    id: '01',
    name: 'Procesamiento de Lenguaje Natural',
    days: {
      monday: ['7:00 - 8:00', '8:00 - 9:00'],
      tuesday: [],
      wednesday: ['7:00 - 8:00', '8:00 - 9:00'],
      thursday: ['7:00 - 8:00'],
      friday: [],
      saturday: ['7:00 - 8:00'],
    },
    color: 'red',
  },
  {
    id: '02',
    name: 'Programación II',
    days: {
      monday: ['14:00 - 15:00', '15:00 - 16:00'],
      tuesday: ['20:00 - 21:00'],
      wednesday: ['14:00 - 15:00', '15:00 - 16:00'],
      thursday: [],
      friday: [],
      saturday: ['15:00 - 16:00'],
    },
    color: 'black',
  },
];
const App = () => {
  return (
    <Schedule
      courses={data}
      borderRightSchedule
      borderBottomSchedule
      backgroundColorSchedule="white"
    />
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
