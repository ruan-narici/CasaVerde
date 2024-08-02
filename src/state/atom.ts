import { atom } from 'recoil';

export const email = atom<string>({
  key: 'email',
  default: ''
});