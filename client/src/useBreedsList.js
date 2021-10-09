import { useState, useEffect } from "react";
import client from "./petFinder";
const localCache = {};

const useBreedsList = function (animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");
  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (animal in localCache) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList(animal);
    }
    async function requestBreedList(animal) {
      setBreedList([]);
      setStatus("loading");
      const response = await client.animalData.breeds(animal);
      localCache[animal] = response.data.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);
  return [breedList, status];
};

export default useBreedsList;
