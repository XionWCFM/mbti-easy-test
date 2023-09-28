import { IMBTIController, QuestionNumberAndValue } from './../types/mbti-types';
import { MBTIService } from './../services/mbti-service';
import { PersonalitiesEnum } from '../types/personalities-types';

export class MBTIController implements IMBTIController {
  constructor(private MBTIService: MBTIService) {}
  makeResult(mbtiData: QuestionNumberAndValue): PersonalitiesEnum {
    return this.MBTIService.makeResult(mbtiData);
  }
}
