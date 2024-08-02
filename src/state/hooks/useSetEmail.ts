import { useSetRecoilState } from 'recoil';
import { email } from 'state/atom';

export default function useSetEmail() {
  const setEmail = useSetRecoilState(email);
  return (newEmail: string) => {
    setEmail(newEmail);
  };
}