import { PersonalityResultData } from '../types/personalities-types';

export class PersonalitiesModel {
  model: PersonalityResultData;
  constructor(personality: PersonalityResultData) {
    this.model = personality;
  }
}
