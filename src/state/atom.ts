import { IPlants } from 'interfaces/IPlants';
import { atom } from 'recoil';

export const email = atom<string>({
  key: 'email',
  default: ''
});

export const plants = atom<IPlants[]>({
  key: 'plants',
  default: []
});

