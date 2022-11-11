import React from 'react';
import styles from '../styles/containerSchedule/containerSchedule.module.css';

export interface Props {
  title?: string;
  backgroundColor?: string;
}

export const ContainerSchedule = ({
  title = 'Programación I',
  backgroundColor = 'red',
}: Props) => {
  return (
    <div className={styles.container} style={{ background: backgroundColor }}>
      <h1 className={styles.container_text}>{title}</h1>
    </div>
  );
};
