import { useRecoilValue } from 'recoil';
import { email } from 'state/atom';

export default function useEmail(): string {
  return useRecoilValue(email);
}