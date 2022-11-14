# me-schedule-days

A library to help you form the schedule with the days and times of a week.

# Installing

## Package manager

Using npm:

```
$ npm install me-schedule-days
```

Using yarn:

```
$ yarn add me-schedule-days
```

## Version Compatibility

_Please upgrade to atleast v5.0.0 to avoid security issues mentioned below._

| Parameters                       | Description                                                         |
| -------------------------------- | ------------------------------------------------------------------- |
| courses (array)                  | It adds small components based on the JSON type array passed to it. |
| borderRightSchedule (boolean)    | Creates the vertical separation of the schedule.                    |
| borderBottomSchedule (boolean)   | Creates the horizontal separation of the schedule.                  |
| backgroundColorSchedule (string) | Adds the background color of the entire schedule.                   |

## Example

```
import { Schedule } from 'me-schedule-days'
```

```
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
]
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
```
