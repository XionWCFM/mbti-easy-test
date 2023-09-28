import { PersonalitiesEnum } from '../types/personalities-types';

export const PersonalitiesTypeguard = (
  text: string,
): text is PersonalitiesEnum => {
  return Object.values(PersonalitiesEnum).some(
    (personality) => personality === text,
  );
};

export const validationPersonalities = (text: string) => {
  if (PersonalitiesTypeguard(text)) {
    return text;
  }
  throw new Error("it's something wrong!!");
};
