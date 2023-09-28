'use client';
import { MBTIController } from '@/business/controller/mbti-controller';
import { PersonalitiesController } from '@/business/controller/personalities-controller';
import { personalityResultData } from '@/business/datas/persnoalities-data';
import { PersonalitiesModel } from '@/business/model/personalities-model';
import { MBTIService } from '@/business/services/mbti-service';
import { PersonalitiesService } from '@/business/services/personalities-service';
import React from 'react';
import { mbtiQuestionData } from '@/business/datas/mbti-data';

interface MainPageProps {}

const MainPage = ({}: MainPageProps) => {
  const mbtiService = new MBTIService();
  const mbtiController = new MBTIController(mbtiService);

  const personalitiesModel = new PersonalitiesModel(personalityResultData);
  const personalitiesService = new PersonalitiesService(personalitiesModel);
  const personalitiesController = new PersonalitiesController(
    personalitiesService,
  );

  return <div className="">ㄴㅁㅇㄴㅁ</div>;
};

export default MainPage;
