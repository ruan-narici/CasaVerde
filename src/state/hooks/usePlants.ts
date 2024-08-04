import { IPlants } from 'interfaces/IPlants';
import { useRecoilValue } from 'recoil';
import { plants } from 'state/atom';

export default function usePlants(): IPlants[] {
  const plantsList = useRecoilValue(plants);
  return plantsList;
}