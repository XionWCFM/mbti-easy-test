export enum PersonalitiesEnum {
  INTJ = 'INTJ',
  INTP = 'INTP',
  ENTJ = 'ENTJ',
  ENTP = 'ENTP',
  INFJ = 'INFJ',
  INFP = 'INFP',
  ENFJ = 'ENFJ',
  ENFP = 'ENFP',
  ISTJ = 'ISTJ',
  ISFJ = 'ISFJ',
  ESTJ = 'ESTJ',
  ESFJ = 'ESFJ',
  ISTP = 'ISTP',
  ISFP = 'ISFP',
  ESTP = 'ESTP',
  ESFP = 'ESFP',
}
export type PersonalityResultData = {
  [Personality in PersonalitiesEnum]: {
    category: string;
    content: string[];
  };
};


/*

const HamralProvider = ({children}) => {
  const auth = useSelector((state) => state.accesstoken)
  const router = useRouter()
  if(auth) {
    return <>{children}<>
  } else {
    return router.push('/')
  }
}

const AuthNeed = () => {
  return <div>어엄준식</div>
}

const page = () => {
  return (
    <HamralProvider>
      <AuthNeed/>
    </HamralProvider>
  )
}

*/