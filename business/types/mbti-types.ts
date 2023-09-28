import { PersonalitiesEnum } from './personalities-types';
export type CategoryOfMBTI = 'E' | 'I' | 'N' | 'S' | 'T' | 'F' | 'P' | 'J';

export type QuestionNumberAndValue = {
  [questionNumber: string]: CategoryOfMBTI;
};

export interface ClassificationOfMBTI {
  EI: {
    E: number;
    I: number;
  };
  NS: {
    N: number;
    S: number;
  };
  TF: {
    T: number;
    F: number;
  };
  PJ: {
    P: number;
    J: number;
  };
}

export interface QuestionsOfMBTI {
  question: string;
  choices: { label: string; value: CategoryOfMBTI }[];
}

export interface IMBTIService {
  makeResult: (mbtimodel: QuestionNumberAndValue) => PersonalitiesEnum;
  classify: () => ClassificationOfMBTI;
  calculateMBTIObject: (
    yetCaluclate: QuestionNumberAndValue,
  ) => ClassificationOfMBTI;
  compareValues: (classificationObject: ClassificationOfMBTI) => string;
}

export interface IMBTIController {
  makeResult: (mbtidata: QuestionNumberAndValue) => PersonalitiesEnum;
}

export interface IMBTIServiceParameter {
  mbtidata: QuestionNumberAndValue;
  service: IMBTIService;
}

export type ObjectValuesOfMBTI =
  ClassificationOfMBTI[keyof ClassificationOfMBTI][];
