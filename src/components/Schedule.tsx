import React from 'react';
import { days } from '../data/days';
import { hours } from '../data/hours';
import { useSchedule } from '../hooks/useSchedule';
import { DataProps } from '../interfaces/schedules.interfaces';

import styles from '../styles/schedule/schedule.module.css';
import { ContainerSchedule } from './ContainerSchedule';

export interface Props {
  courses?: DataProps[];
  backgroundColorSchedule?: string;
  borderRightSchedule?: boolean;
  borderBottomSchedule?: boolean;
}

export const Schedule = ({
  courses,
  backgroundColorSchedule,
  borderRightSchedule,
  borderBottomSchedule,
}: Props) => {
  const { data } = useSchedule(courses);

  return (
    <div className={styles['container']}>
      <div
        className={styles['container_schedule']}
        style={{ backgroundColor: backgroundColorSchedule }}
      >
        <div className={styles['container_schedule_top']}></div>
        <div className={styles['container_schedule_header']}>
          <div className={styles['container_schedule_header_horario']}>
            <h1 className={styles['container_schedule_header_horario_text']}>
              Horario
            </h1>
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
              <h1 className={styles['container_schedule_header_caps_text']}>
                {value}
              </h1>
            </div>
          ))}
        </div>
        <div className={styles['container_schedule_lineTime']}>
          {hours.map(daysVal => (
            <div
              key={daysVal}
              className={
                daysVal === '20:00 - 21:00'
                  ? styles['container_schedule_lineTime_capsEnd']
                  : styles['container_schedule_lineTime_caps']
              }
              style={{
                borderBottom: borderBottomSchedule ? '1px solid #D4D4D4' : '',
              }}
            >
              <div
                className={styles['container_schedule_lineTime_caps_text']}
                style={{
                  borderRight: borderRightSchedule ? '1px solid #D4D4D4' : '',
                }}
              >
                <h1
                  className={
                    styles['container_schedule_lineTime_caps_text_hour']
                  }
                >
                  {daysVal}
                </h1>
              </div>
              <div className={styles['container_schedule_lineTime_caps_mini']}>
                {Object.keys(data[0].days).map((value, keyInd) =>
                  value === 'monday' ? (
                    <div
                      key={keyInd}
                      className={
                        styles['container_schedule_lineTime_caps_mini_course']
                      }
                      style={{
                        borderRight: borderRightSchedule
                          ? '1px solid #D4D4D4'
                          : '',
                      }}
                    >
                      {data.map((value, keyIndex) =>
                        value.days.monday.includes(`${daysVal}`) ? (
                          <ContainerSchedule
                            key={keyIndex}
                            title={value.name}
                            backgroundColor={value.color}
                          />
                        ) : null
                      )}
                    </div>
                  ) : value === 'tuesday' ? (
                    <div
                      key={keyInd}
                      className={
                        styles['container_schedule_lineTime_caps_mini_course']
                      }
                      style={{
                        borderRight: borderRightSchedule
                          ? '1px solid #D4D4D4'
                          : '',
                      }}
                    >
                      {data.map((value, keyIndex) =>
                        value.days.tuesday.includes(`${daysVal}`) ? (
                          <ContainerSchedule
                            key={keyIndex}
                            title={value.name}
                            backgroundColor={value.color}
                          />
                        ) : null
                      )}
                    </div>
                  ) : value === 'wednesday' ? (
                    <div
                      key={keyInd}
                      className={
                        styles['container_schedule_lineTime_caps_mini_course']
                      }
                      style={{
                        borderRight: borderRightSchedule
                          ? '1px solid #D4D4D4'
                          : '',
                      }}
                    >
                      {data.map((value, keyIndex) =>
                        value.days.wednesday.includes(`${daysVal}`) ? (
                          <ContainerSchedule
                            key={keyIndex}
                            title={value.name}
                            backgroundColor={value.color}
                          />
                        ) : null
                      )}
                    </div>
                  ) : value === 'thursday' ? (
                    <div
                      key={keyInd}
                      className={
                        styles['container_schedule_lineTime_caps_mini_course']
                      }
                      style={{
                        borderRight: borderRightSchedule
                          ? '1px solid #D4D4D4'
                          : '',
                      }}
                    >
                      {data.map((value, keyIndex) =>
                        value.days.thursday.includes(`${daysVal}`) ? (
                          <ContainerSchedule
                            key={keyIndex}
                            title={value.name}
                            backgroundColor={value.color}
                          />
                        ) : null
                      )}
                    </div>
                  ) : value === 'friday' ? (
                    <div
                      key={keyInd}
                      className={
                        styles['container_schedule_lineTime_caps_mini_course']
                      }
                      style={{
                        borderRight: borderRightSchedule
                          ? '1px solid #D4D4D4'
                          : '',
                      }}
                    >
                      {data.map((value, keyIndex) =>
                        value.days.friday.includes(`${daysVal}`) ? (
                          <ContainerSchedule
                            key={keyIndex}
                            title={value.name}
                            backgroundColor={value.color}
                          />
                        ) : null
                      )}
                    </div>
                  ) : value === 'saturday' ? (
                    <div
                      key={keyInd}
                      className={
                        styles[
                          'container_schedule_lineTime_caps_mini_courseSat'
                        ]
                      }
                      style={{ backgroundColor: backgroundColorSchedule }}
                    >
                      {data.map((value, keyIndex) =>
                        value.days.saturday.includes(`${daysVal}`) ? (
                          <ContainerSchedule
                            key={keyIndex}
                            title={value.name}
                            backgroundColor={value.color}
                          />
                        ) : null
                      )}
                    </div>
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
