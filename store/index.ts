import { MBTIController } from '@/business/controller/mbti-controller';
import { PersonalitiesController } from '@/business/controller/personalities-controller';
import { mbtiQuestionData } from '@/business/datas/mbti-data';
import { personalityResultData } from '@/business/datas/persnoalities-data';
import { MBTIQuestionListModel } from '@/business/model/mbti-model';
import { PersonalitiesModel } from '@/business/model/personalities-model';
import { MBTIService } from '@/business/services/mbti-service';
import { PersonalitiesService } from '@/business/services/personalities-service';
import { PersonalitiesEnum } from '@/business/types/personalities-types';
import { atom } from 'jotai';

const mbtiModel = new MBTIQuestionListModel(mbtiQuestionData);
const mbtiService = new MBTIService();
const mbtiController = new MBTIController(mbtiService);

const personalitiesModel = new PersonalitiesModel(personalityResultData);
const personalitiesService = new PersonalitiesService(personalitiesModel);
const personalitiesController = new PersonalitiesController(
  personalitiesService,
);

export const mbtiQuestionAtom = atom({
  model: mbtiModel,
  controller: mbtiController,
});

export const personalitiesAtom = atom<PersonalitiesEnum | null>(null);

export const getPersonalitiesResult = atom((get) => {
  const personality = get(personalitiesAtom);
  if (personality === null) {
    return null;
  }
  return personalitiesController.makeResult(personality);
});

export const testAtom = atom(1);

export const testSetAtom = atom(null, (get, set, update: number) => {
  set(testAtom, get(testAtom) + update);
});
