import React from 'react';
import './HealthBar.scss';

interface IHealthBarProps {
  total: number;
  aggravated: number;
  lethal: number;
  bashing: number;
}

export default function HealthBar(props: IHealthBarProps) {
  const { aggravated, lethal, bashing, total } = props;
  const dots = [];
  const empty = total - (aggravated + lethal + bashing);
  for (let i = 0; i < aggravated; i++) {
    dots.push(<div key={'A' + i} className="healthBar-dot border border-dark healthBar__dot_a"></div>);
  }
  for (let i = 0; i < lethal; i++) {
    dots.push(<div key={'L' + i} className="healthBar-dot border border-dark healthBar__dot_l"></div>);
  }
  for (let i = 0; i < bashing; i++) {
    dots.push(<div key={'B' + i} className="healthBar-dot border border-dark healthBar__dot_b"></div>);
  }
  for (let i = 0; i < empty; i++) {
    dots.push(<div key={'E' + i} className="healthBar-dot border border-dark"></div>);
  }
  return (
    <div className="d-grid healthBar-container">
      { dots }
    </div>
  );
}
