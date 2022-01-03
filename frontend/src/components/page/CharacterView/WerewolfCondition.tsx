import React, { Component } from 'react';
import HealthBar from '../../common/HealthBar/HealthBar';
import Bar from '../../common/Bar/Bar';
import './WerewolfCondition.scss';
import { DamageType, DamageNames } from '../../../constants';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

interface IWConditionProps {
  aDamage: number;
  lDamage: number;
  bDamage: number;
  health: number;
  willpower: number;
  onDmgChange: Function;
  onWPChange: Function;
}

interface IWConditionState {
  dmgType: number;
}

export default class WerewolfCondition extends Component<IWConditionProps, IWConditionState> {
  state = {
    dmgType: DamageType.Bashing
  };

  render(): React.ReactNode {
    const { onDmgChange, onWPChange } = this.props;
    return (
      <div>
        <div>
          <div className="pt-2 pb-2">Health</div>
          <HealthBar total={this.props.health} aggravated={this.props.aDamage} lethal={this.props.lDamage}
                     bashing={this.props.bDamage}/>
          <div className="mt-2 d-flex">
            <div className="shadow-none d-block btn-group btn-group-sm" role="group">
              <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => {
                onDmgChange(this.state.dmgType);
              }}>
                <i className="bi bi-dash-lg"></i>
              </button>
              <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => {
                onDmgChange(this.state.dmgType, true);
              }}>
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
            <DropdownButton
              className="ms-3"
              variant="secondary"
              onSelect={(e) => {
                this._onDmgChange(parseInt(e, 10));
              }}
              title={DamageNames[this.state.dmgType]}
              size="sm">
              <Dropdown.Item eventKey={DamageType.Bashing} as="button">{DamageNames[DamageType.Bashing]}</Dropdown.Item>
              <Dropdown.Item eventKey={DamageType.Lethal} as="button">{DamageNames[DamageType.Lethal]}</Dropdown.Item>
              <Dropdown.Item eventKey={DamageType.Aggravated}
                             as="button">{DamageNames[DamageType.Aggravated]}</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div className="mt-2 mb-2 border-bottom"></div>
        <div>
          <div className="pb-2">Willpower</div>
          <div>
            <Bar total={10} current={this.props.willpower}/>
            <div className="d-block btn-group btn-group-sm mt-2" role="group">
              <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => {
                onWPChange(false);
              }}>
                <i className="bi bi-dash-lg"></i>
              </button>
              <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => {
                onWPChange(true);
              }}>
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private _onDmgChange(dmgType: number): void {
    this.setState({ dmgType });
  }
}
