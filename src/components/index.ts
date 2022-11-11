import { Schedule as ScheduleComponent } from './Schedule';
import { ContainerSchedule } from './ContainerSchedule';
import { ScheduleHOCProps } from '../interfaces/schedules.interfaces';

export const Schedule: ScheduleHOCProps = Object.assign(ScheduleComponent, {
  Container: ContainerSchedule,
});
