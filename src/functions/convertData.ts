import { DataProps } from '../interfaces/schedules.interfaces';

export const convertData = (courses: DataProps[]) => {
  let arrayReturn = courses;
  for (let i = 0; i < arrayReturn.length; i++) {
    for (const property in arrayReturn[i].days) {
      for (let j = 0; j < arrayReturn[i].days[property].length; j++) {
        const result =
          arrayReturn[i].days[property][j].substring(3, 5) -
          arrayReturn[i].days[property][j].substring(0, 2);
        let firstTerm = parseInt(
          arrayReturn[i].days[property][j].substring(0, 2)
        );
        switch (result) {
          case 4:
            arrayReturn[i].days[property].length = 0;
            for (let k = 0; k < result; k++) {
              const element = `${('0' + firstTerm).slice(-2)}-${(
                '0' +
                (firstTerm + 1)
              ).slice(-2)}`;
              ++firstTerm;
              arrayReturn[i].days[property].push(element);
            }
            break;
          case 3:
            arrayReturn[i].days[property].length = 0;
            for (let k = 0; k < result; k++) {
              const element = `${('0' + firstTerm).slice(-2)}-${(
                '0' +
                (firstTerm + 1)
              ).slice(-2)}`;
              ++firstTerm;
              arrayReturn[i].days[property].push(element);
            }
            break;
          case 2:
            arrayReturn[i].days[property].length = 0;
            for (let k = 0; k < result; k++) {
              const element = `${('0' + firstTerm).slice(-2)}-${(
                '0' +
                (firstTerm + 1)
              ).slice(-2)}`;
              ++firstTerm;
              arrayReturn[i].days[property].push(element);
            }
            break;
          default:
            break;
        }
      }
    }
  }
  return arrayReturn;
};
