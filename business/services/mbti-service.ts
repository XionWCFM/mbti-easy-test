import {
  ClassificationOfMBTI,
  IMBTIService,
  ObjectValuesOfMBTI,
  QuestionNumberAndValue,
} from '../types/mbti-types';
import { validationPersonalities } from '../validation/validate-mbti';

export class MBTIService implements IMBTIService {
  makeResult(mbtiModel: QuestionNumberAndValue) {
    const calculateObject = this.calculateMBTIObject(mbtiModel);
    const compareText = this.compareValues(calculateObject);
    const validationedResult = validationPersonalities(compareText);
    return validationedResult;
  }
  classify() {
    const classificationObject: ClassificationOfMBTI = {
      EI: {
        E: 0,
        I: 0,
      },
      NS: {
        N: 0,
        S: 0,
      },
      TF: {
        T: 0,
        F: 0,
      },
      PJ: {
        P: 0,
        J: 0,
      },
    };
    return classificationObject;
  }
  calculateMBTIObject(
    makeResult: QuestionNumberAndValue,
  ): ClassificationOfMBTI {
    const classificationObject = this.classify();
    Object.values(makeResult).forEach((choice) => {
      switch (choice) {
        case 'E':
          classificationObject.EI.E += 1;
        case 'I':
          classificationObject.EI.I += 1;
        case 'F':
          classificationObject.TF.F += 1;
        case 'T':
          classificationObject.TF.T += 1;
        case 'N':
          classificationObject.NS.N += 1;
        case 'S':
          classificationObject.NS.S += 1;
        case 'P':
          classificationObject.PJ.P += 1;
        case 'J':
          classificationObject.PJ.J += 1;
      }
    });
    return classificationObject;
  }
  compareValues(classificationObject: ClassificationOfMBTI) {
    const values = Object.values(classificationObject) as ObjectValuesOfMBTI;
    let result = '';
    values.forEach((mbtiObj) => {
      const [[firstType, firstTypeNumber], [secontType, secontTypeNumber]] =
        Object.entries(mbtiObj);
      return firstTypeNumber >= secontTypeNumber
        ? (result += firstType)
        : (result += secontType);
    });
    return result;
  }
}
