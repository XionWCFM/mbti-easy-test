import { validationPersonalities } from './../validation/validate-mbti';
import { PersonalitiesModel } from '../model/personalities-model';

export class PersonalitiesService {
  constructor(private personalitesModel: PersonalitiesModel) {}
  makeResult(category: string) {
    const result = validationPersonalities(category);
    return this.personalitesModel.model[result];
  }
}
