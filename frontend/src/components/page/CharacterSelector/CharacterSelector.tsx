import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import characterService, { ICharacterBrief } from '../../../service/character.service';
import './CharacterSelector.scss';
import { Link } from 'react-router-dom';

interface ISelectorState {
  list: ICharacterBrief[];
}

function getListItems(characterList: ICharacterBrief[]): React.ReactNode {
  return characterList.map((item) => {
    return (
      <ListGroup.Item action key={item.id} to={'/characters/' + item.id} as={Link}>
        {item.name}
      </ListGroup.Item>
    );
  });
}

class CharacterSelector extends Component<ISelectorState, any> {
  state: ISelectorState = {
    list: []
  };

  componentDidMount() {
    characterService.getList().then((list) => {
      this.setState({ list });
    });
  }

  render() {
    return (
      <div className="container-md page-characterSelector">
        <h3 className="mb-3">Мои персонажи</h3>
        <ListGroup>
          {getListItems(this.state.list)}
        </ListGroup>
      </div>
    );
  }
}

export default CharacterSelector;
