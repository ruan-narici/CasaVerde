import { IPlants } from 'interfaces/IPlants';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { plants } from 'state/atom';

export default function useGETPlants() {
  return async () => {
    const setPlants = useSetRecoilState(plants);

    useEffect(() => {
      async function getPlants() {
        const url = 'https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw';
        const request = await fetch(url);
        const response: IPlants[] = await request.json();
        setPlants(response);
      }
      
      getPlants();
    }, []);
  };
}