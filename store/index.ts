import { MBTIController } from '@/business/controller/mbti-controller';
import { PersonalitiesController } from '@/business/controller/personalities-controller';
import { questionNumberAndValue } from '@/business/datas/mbti-answer-data';
import { personalityResultData } from '@/business/datas/persnoalities-data';
import { MBTIAnswerModel } from '@/business/model/mbti-model';
import { PersonalitiesModel } from '@/business/model/personalities-model';
import { MBTIService } from '@/business/services/mbti-service';
import { PersonalitiesService } from '@/business/services/personalities-service';
import { CategoryOfMBTI } from '@/business/types/mbti-types';
import { atom } from 'jotai';

export type UpdateAnswer = {
  pageNum: number | string;
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

// 사용자 답변 수집
export const mbtiAnswerAtom = atom(mbtiModel.model);

// mbtiAnswerAtom에 인자만 전달하면 조작하는 함수
export const setMbtiAnswerAtom = atom(
  null,
  (_get, set, update: UpdateAnswer) => {
    set(mbtiAnswerAtom, (prev) => {
      const stringfyKey = String(update.pageNum);
      return {
        ...prev,
        [stringfyKey]: update.value,
      };
    });
  },
);

// 결과 가져오는 아톰
export const getPersonalitiesResult = atom((get) => {
  const data = get(mbtiAnswerAtom);
  const personality = mbtiController.makeResult(data);
  if (personality === null) {
    return null;
  }
  return personalitiesController.makeResult(personality);
});

export interface DialogType {
  isOpen: boolean;
  content: JSX.Element | null;
}

export const dialogAtom = atom<DialogType>({
  isOpen: false,
  content: null,
});
