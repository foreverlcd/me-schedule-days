import { Props as ContainerProps } from '../components/ContainerSchedule';
import { Props as DayContainerProps } from '../components/DayContainerSchedule';
import { Props as ScheduleProps } from '../components/Schedule';

export interface DataProps {
  _id: string;
  name: string;
  days: DaysProps | any;
  color: string;
  semester?: string;
  cat?: string;
  career?: CareerProps;
  course?: string;
}

interface CareerProps {
  _id: string;
  name: string;
  img: string;
}

interface DaysProps {
  monday: string[];
  tuesday: string[];
  wednesday: string[];
  thursday: string[];
  friday: string[];
  saturday: string[];
}

export interface PropsHoursValue {
  VisualValue: string;
  dataValue: string;
}

export interface ScheduleHOCProps {
  ({ courses }: ScheduleProps): JSX.Element;
  Container: (Props: ContainerProps) => JSX.Element;
  DayContainer: (Props: DayContainerProps) => JSX.Element;
}
