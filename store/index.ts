import { MBTIController } from '@/business/controller/mbti-controller';
import { PersonalitiesController } from '@/business/controller/personalities-controller';
import { questionNumberAndValue } from '@/business/datas/mbti-answer-data';
import { personalityResultData } from '@/business/datas/persnoalities-data';
import { MBTIAnswerModel } from '@/business/model/mbti-model';
import { PersonalitiesModel } from '@/business/model/personalities-model';
import { MBTIService } from '@/business/services/mbti-service';
import { PersonalitiesService } from '@/business/services/personalities-service';
import { CategoryOfMBTI } from '@/business/types/mbti-types';
import { PersonalitiesEnum } from '@/business/types/personalities-types';
import { atom } from 'jotai';

type UpdateAnswer = {
  key: number | string;
  value: CategoryOfMBTI;
};

const mbtiModel = new MBTIAnswerModel(questionNumberAndValue);

const mbtiService = new MBTIService();
const mbtiController = new MBTIController(mbtiService);

const personalitiesModel = new PersonalitiesModel(personalityResultData);
const personalitiesService = new PersonalitiesService(personalitiesModel);
const personalitiesController = new PersonalitiesController(
  personalitiesService,
);

export const personalitiesAtom = atom<PersonalitiesEnum | null>(null);

export const mbtiAnswerAtom = atom(mbtiModel);

export const setMbtiAnswerAtom = atom(
  null,
  (_get, set, update: UpdateAnswer) => {
    set(mbtiAnswerAtom, (prev) => {
      const stringfyKey = String(update.key);
      return {
        ...prev,
        [stringfyKey]: update.value,
      };
    });
  },
);

export const mbtiResultAtom = atom((get) => {
  const data = get(mbtiAnswerAtom);
  return mbtiController.makeResult(data.model);
});

export const getPersonalitiesResult = atom((get) => {
  const personality = get(personalitiesAtom);
  if (personality === null) {
    return null;
  }
  return personalitiesController.makeResult(personality);
});
