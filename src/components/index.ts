import { Schedule as ScheduleComponent } from './Schedule';
import { ContainerSchedule } from './ContainerSchedule';
import { ScheduleHOCProps } from '../interfaces/schedules.interfaces';
import { DayContainerSchedule } from './DayContainerSchedule';

export const Schedule: ScheduleHOCProps = Object.assign(ScheduleComponent, {
  Container: ContainerSchedule,
  DayContainer: DayContainerSchedule,
});
