import { fetchGetCarData } from '../../api/getCars';
import { CarModel } from './props';

export const loadCarData = async (
  id: number,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    const response = await fetchGetCarData(id);
    if (response) {
      setCarData(response);
    }
  } catch (error) {
    console.log('Error fetching api data:', error);
    setCarData(null);
  }
};

export const handlePrevieusItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  let response: CarModel | null | undefined = null;
  try {
    if (carData) {
      if (carData && carData.id > 1) {
        response = await fetchGetCarData(carData.id - 1);
      }
      if (response) {
        setCarData(response);
      }
    }
  } catch (error) {
    console.log('Error fetching api data:', error);
    setCarData(null);
  }
};

export const handleNextItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  let response: CarModel | null | undefined = null;
  try {
    if (carData) {
      if (carData && carData.id < 10) {
        response = await fetchGetCarData(carData.id + 1);
      }
      if (response) {
        setCarData(response);
      }
    }
  } catch (error) {
    console.log('Error fetching api data:', error);
    setCarData(null);
  }
};
