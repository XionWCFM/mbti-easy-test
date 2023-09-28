import { PersonalitiesService } from '../services/personalities-service';

export class PersonalitiesController {
  constructor(private service: PersonalitiesService) {}
  makeResult(category: string) {
    return this.service.makeResult(category);
  }
}
