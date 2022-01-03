import React from 'react';
import './Bar.scss';
import { IStylizedProps } from '../../interface/ICommonProps';

interface IHealthBarProps extends IStylizedProps {
  total: number;
  current: number;
}

export default function Bar(props: IHealthBarProps) {
  const { current, total } = props;
  const dots = [];
  const empty = total - current;
  for (let i = 0; i < current; i++) {
    dots.push(<div key={'BC' + i} className="bar-dot border border-dark bar__dot__filled"></div>);
  }
  for (let i = 0; i < empty; i++) {
    dots.push(<div key={'BE' + i} className="bar-dot border border-dark"></div>);
  }
  return (
    <div className={`d-grid bar-container ${props.className || ''}`}>
      { dots }
    </div>
  );
}
