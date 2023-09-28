import { QuestionsOfMBTI } from '../types/mbti-types';

export class MBTIQuestionListModel {
  model: QuestionsOfMBTI[];
  constructor(model: QuestionsOfMBTI[]) {
    this.model = model;
  }
}
