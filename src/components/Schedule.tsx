import React from 'react';
import { days } from '../data/days';
import hours from '../data/hours';
import { convertData } from '../functions/convertData';
import { useSchedule } from '../hooks/useSchedule';
import { DataProps } from '../interfaces/schedules.interfaces';

import styles from '../styles/schedule/schedule.modules.css';
import { DayContainerSchedule } from './DayContainerSchedule';

export interface Props {
  courses?: DataProps[];
  backgroundColorSchedule?: string;
  borderRightSchedule?: boolean;
  borderBottomSchedule?: boolean;
  onClickId?: (id: string) => void;
}

export const Schedule = ({
  courses,
  backgroundColorSchedule,
  borderRightSchedule,
  borderBottomSchedule,
  onClickId,
}: Props) => {
  const { data } = useSchedule(courses && convertData(courses));

  return (
    <div>
      <div
        className={styles["container_schedule"]}
        style={{ backgroundColor: backgroundColorSchedule }}
      >
        <div className={styles["container_schedule_top"]}></div>
        <div className={styles["container_schedule_header"]}>
          <div className={styles["container_schedule_header_horario"]}>
            <h1 className={styles["container_schedule_header_horario_text"]}>Horario</h1>
          </div>
          {days.map(value => (
            <div
              key={value}
              className={
                value === 'Sábado'
                  ? styles['container_schedule_header_capsSab']
                  : styles['container_schedule_header_caps']
              }
            >
              <h1 className={styles["container_schedule_header_caps_text"]}>{value}</h1>
            </div>
          ))}
        </div>
        <div className={styles["container_schedule_lineTime"]}>
          {hours.map(daysVal => (
            <div
              key={daysVal.VisualValue}
              className={
                daysVal.VisualValue === '20:00 - 21:00'
                  ? styles['container_schedule_lineTime_capsEnd']
                  : styles['container_schedule_lineTime_caps']
              }
              style={
                daysVal.VisualValue !== '20:00 - 21:00'
                  ? {
                      borderBottom: borderBottomSchedule
                        ? '1px solid #D4D4D4'
                        : '',
                    }
                  : {}
              }
            >
              <div
                className={styles["container_schedule_lineTime_caps_text"]}
                style={{
                  borderRight: borderRightSchedule ? '1px solid #D4D4D4' : '',
                }}
              >
                <h1 className={styles["container_schedule_lineTime_caps_text_hour"]}>
                  {daysVal.VisualValue}
                </h1>
              </div>
              <div className={styles["container_schedule_lineTime_caps_mini"]}>
                {Object.keys(data[0].days).map((value, keyInd) =>
                  value === 'monday' ? (
                    <DayContainerSchedule
                      key={keyInd}
                      borderRightSchedule={borderRightSchedule}
                      data={data}
                      daysVal={daysVal.dataValue}
                      daysPosition={value}
                      onClickId={onClickId}
                    />
                  ) : value === 'tuesday' ? (
                    <DayContainerSchedule
                      key={keyInd}
                      borderRightSchedule={borderRightSchedule}
                      data={data}
                      daysVal={daysVal.dataValue}
                      daysPosition={value}
                      onClickId={onClickId}
                    />
                  ) : value === 'wednesday' ? (
                    <DayContainerSchedule
                      key={keyInd}
                      borderRightSchedule={borderRightSchedule}
                      data={data}
                      daysVal={daysVal.dataValue}
                      daysPosition={value}
                      onClickId={onClickId}
                    />
                  ) : value === 'thursday' ? (
                    <DayContainerSchedule
                      key={keyInd}
                      borderRightSchedule={borderRightSchedule}
                      data={data}
                      daysVal={daysVal.dataValue}
                      daysPosition={value}
                      onClickId={onClickId}
                    />
                  ) : value === 'friday' ? (
                    <DayContainerSchedule
                      key={keyInd}
                      borderRightSchedule={borderRightSchedule}
                      data={data}
                      daysVal={daysVal.dataValue}
                      daysPosition={value}
                      onClickId={onClickId}
                    />
                  ) : value === 'saturday' ? (
                    <DayContainerSchedule
                      key={keyInd}
                      borderRightSchedule={borderRightSchedule}
                      data={data}
                      daysVal={daysVal.dataValue}
                      daysPosition={value}
                      onClickId={onClickId}
                    />
                  ) : null
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
