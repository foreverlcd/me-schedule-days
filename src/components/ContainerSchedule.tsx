import React from 'react';
import styles from '../styles/containerSchedule/containerSchedule.modules.css';

export interface Props {
  title?: string;
  backgroundColor?: string;
  idValue?: string;
  onClickId?: any;
}

export const ContainerSchedule = ({
  title = 'Programación I',
  backgroundColor = 'red',
  idValue,
  onClickId,
}: Props) => {
  return (
    <div
      onClick={() => onClickId(idValue)}
      className={styles["containerSchedule"]}
      style={{ background: backgroundColor }}
    >
      <h1 className={styles["containerSchedule_text"]}>{title}</h1>
    </div>
  );
};
