import React from 'react';
import '../styles/containerSchedule/containerSchedule.css';

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
      className="containerSchedule"
      style={{ background: backgroundColor }}
    >
      <h1 className="containerSchedule_text">{title}</h1>
    </div>
  );
};
