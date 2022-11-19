import { PropsHoursValue } from '../interfaces/schedules.interfaces';

const hours: PropsHoursValue[] = [];
let startTime = 7;
const endTime = 21;
const max = endTime - startTime;

for (let index = 0; index < max; index++) {
  hours.push({
    VisualValue: `${startTime}:00 - ${startTime + 1}:00`,
    dataValue: `${('0' + startTime).slice(-2)}-${('0' + (startTime + 1)).slice(
      -2
    )}`,
  });
  startTime++;
}

export default hours;
