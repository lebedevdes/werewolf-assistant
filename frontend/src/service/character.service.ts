export interface ICharacterBrief {
  id: number;
  name: string;
}

// interface ICharacter extends ICharacterBrief {
//   tribe: string;
// }

class CharacterService {
  async getList(): Promise<ICharacterBrief[]> {
    const response = await fetch('/api/character/');
    return response.json();
  }
}

export default new CharacterService();
