import { PersonalityResultData } from '../types/personalities-types';

export const personalityResultData: PersonalityResultData = {
  INTP: {
    category: 'INTP',
    content: ['사는 게 귀찮다', '흥미로운게 있으면 집중함'],
  },
  ENTP: {
    category: 'ENTP',
    content: ['탐욕적임', '고집이 셈', '냉철함'],
  },
  INFJ: {
    category: 'INFJ',
    content: ['사람이 선함', '참 좋다'],
  },
  ENFJ: {
    category: 'ENFJ',
    content: ['매우 시끄러움', '타고난 인싸', '가만있어도 주위에 사람이 꼬임'],
  },

  ISTP: {
    category: 'ISTP',
    content: ['낯가림', '모든게 귀찮음'],
  },
  ESTP: {
    category: 'ESTP',
    content: ['좀 관종', '리더쉽 있음', '손재주 좋음', '외로움 잘 탐'],
  },

  ISFJ: {
    category: 'ISFJ',
    content: ['치킨 좋아함', '사람 많은거 싫어함'],
  },
  ISFP: {
    category: 'ISFP',
    content: ['누워있기가 취미', '누가 불러도 안나감'],
  },

  ESFJ: {
    category: 'ESFJ',
    content: [
      '생각보다 철저함',
      '계획 틀어지는 거 싫어함',
      '책 읽고 영화보는거 좋아함',
    ],
  },
  ESFP: {
    category: 'ESFP',
    content: ['성격이 급함', '우주 최강 오지랖', '고집 셈'],
  },

  INFP: {
    category: 'INFP',
    content: ['내로남불이 심함', '이상함'],
  },
  ENFP: {
    category: 'ENFP',
    content: ['정신산만함', '일머리 있음', '흥미있고 관심있는건 열정적임'],
  },

  ENTJ: {
    category: 'ENTJ',
    content: ['약간 관종임', '자기애가 강함', '일이 중요한 타입'],
  },
  INTJ: {
    category: 'INTJ',
    content: ['매사에 분석점임', '철학에 관심이 많음'],
  },

  ISTJ: {
    category: 'ISTJ',
    content: ['엄준식임', '엄준식밈을 알고있음'],
  },
  ESTJ: {
    category: 'ESTJ',
    content: ['고집이 셈', '사람 많은 거 싫어함', '외로움 별로 안탐'],
  },
} as const;
