import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { stats } from '../../namingConstants';
import WerewolfCondition from './WerewolfCondition';
import { DamageType } from '../../../constants';
import './CharacterView.scss';

interface IMatchParams {
  id: string
}

interface IViewProps extends RouteComponentProps<IMatchParams> {
}

interface IViewState {
  attributes: {
    intelligence: number;
    wits: number;
    resolve: number;
    strength: number;
    dexterity: number;
    stamina: number;
    presence: number;
    manipulation: number;
    composure: number;
  };
  condition: {
    aDamage: number;
    lDamage: number;
    bDamage: number;
    health: number;
    willpower: number;
  };
  basic: {
    athletics: number;
    currentForm: number;
    size: number;
  }
}

export default class CharacterView extends Component<IViewProps, IViewState> {
  state = {
    attributes: {
      intelligence: 0,
      wits: 0,
      resolve: 0,
      strength: 0,
      dexterity: 0,
      stamina: 0,
      presence: 0,
      manipulation: 0,
      composure: 0
    },
    condition: {
      aDamage: 1,
      lDamage: 2,
      bDamage: 3,
      health: 8,
      willpower: 5
    },
    basic: {
      athletics: 0,
      currentForm: 0,
      size: 0
    }
  };

  render(): React.ReactNode {
    const params = this.props.match.params;
    const { condition } = this.state;
    return (
      <div className="container">
        <div className="text-center">
          <span>Имя персонажа {params.id}</span>
          <button className="btn btn-link" type="submit">
            <i className="bi bi-pencil-square"></i>
          </button>
        </div>
        <div>
          <Tabs defaultActiveKey="condition" className="mt-3">
            <Tab eventKey="condition" title="Condition">
              <WerewolfCondition aDamage={condition.aDamage}
                                 lDamage={condition.lDamage}
                                 bDamage={condition.bDamage}
                                 health={condition.health}
                                 willpower={condition.willpower}
                                 onWPChange={(increase: boolean) => {
                                   this._applyWillpower(increase);
                                 }}
                                 onDmgChange={(damageType: number, increase: boolean) => {
                                   this._applyDamage(damageType, increase);
                                 }}/>
            </Tab>
            <Tab eventKey="attr&skills" title="Attributes & Skills">
              <span>Attributes & Skills</span>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }

  private _applyDamage(damageType: number, increase: boolean): void {
    const condition = { ...this.state.condition };
    const { aDamage, lDamage, bDamage, health } = condition;
    const isDeathsDoor = aDamage + lDamage + bDamage >= health;
    if (increase && isDeathsDoor) {
      if (lDamage > 0) {
        --condition.lDamage;
      } else if (bDamage > 0) {
        --condition.bDamage;
      } else {
        return;
      }
      ++condition.aDamage;
    } else {
      switch (damageType) {
        case DamageType.Aggravated:
          if (increase) {
            ++condition.aDamage;
          } else if (aDamage > 0) {
            --condition.aDamage;
          }
          break;
        case DamageType.Lethal:
          if (increase) {
            ++condition.lDamage;
          } else if (lDamage > 0) {
            --condition.lDamage;
          }
          break;
        case DamageType.Bashing:
          if (increase) {
            ++condition.bDamage;
          } else if (bDamage > 0) {
            --condition.bDamage;
          }
      }
    }

    this.setState({ condition });
  }

  private _applyWillpower(increase: boolean): void {
    const condition = { ...this.state.condition };
    if (increase && condition.willpower < 10) {
      ++condition.willpower;
    } else if (!increase && condition.willpower > 0) {
      --condition.willpower;
    } else {
      return;
    }
    this.setState({ condition });
  }

  private _getAttrCols(): React.ReactNode[] {
    return Object.entries(this.state.attributes).map(([key, value]) => {
      return (
        <div key={key} className="col">
          <div className="row row-cols-2">
            <div className="col">{stats[key]}</div>
            <div className="">
              {value}
              {/* <input type="number" className="form-control characterView__numberInput input-sm"/> */}
            </div>
          </div>
        </div>);
    });
  }
}
