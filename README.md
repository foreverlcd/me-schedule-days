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

## Visual

![image](https://user-images.githubusercontent.com/85658986/206887508-457c2b5d-52a8-4048-ada7-3150e19bdb39.png)

## Usability


| Parameters                       | Description                                                         |
| -------------------------------- | ------------------------------------------------------------------- |
| courses (array)                  | It adds small components based on the JSON type array passed to it. |
| borderRightSchedule (boolean)    | Creates the vertical separation of the schedule.                    |
| borderBottomSchedule (boolean)   | Creates the horizontal separation of the schedule.                  |
| backgroundColorSchedule (string) | Adds the background color of the entire schedule.                   |
| onClickId (event onClick)        | Set id of course when you click                                     |

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
    id: '02',
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
]

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
```

## Remember

Delete `App.css` when your create a new project with React command.
