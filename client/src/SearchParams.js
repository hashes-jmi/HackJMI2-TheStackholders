import { useState, useEffect, useContext } from "react";
import Results from "./Results";
const ANIMALS = ["bird", "dog", "cat", "rabbit", "horse", "barnyard"];
const themes = ["orange", "purple", "black", "green"];
import useBreedsList from "./useBreedsList";
import ThemeContext from "./ThemeContext";
import client from "./petFinder";
import states from "./states";
import citiesFinder from "./cities";
function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedsList(animal);
  const [theme, setTheme] = useContext(ThemeContext); //eslint-disable-line no-unused-vars
  const [page, setPage] = useState(1); //eslint-disable-line no-unused-vars
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  useEffect(() => {
    fetchAnimals();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    const cityres = citiesFinder(location);
    setCities(cityres);
  }, [location]);
  // function getCities() {
  //   const citiesReturned = citiesFinder(location);
  //   setCities(citiesReturned);
  // }
  async function fetchAnimals() {
    const query = {
      type: animal,
      breed: breed,
      location: `${city}, ${location}`,
    };
    const response = await client.animal.search(query);
    setPets(response.data.animals);
    console.log(response);
  }
  return (
    <div className="">
      <div className="flex flex-col w-full m-auto relative h-screen">
        <form
          className="absolute m-auto transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-red-500 rounded-xl p-10"
          onSubmit={(e) => {
            e.preventDefault();
            fetchAnimals();
          }}
        >
          <label className="text-lg font-bold text-gray-800" htmlFor="location">
            Location
            <select
              className="w-96 block my-2 rounded-full"
              id="input"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              onBlur={(e) => {
                setLocation(e.target.value);
              }}
            >
              <option value="" />
              {states.map((e) => {
                return (
                  <option key={e} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
          </label>
          <label className="text-lg font-bold text-gray-800" htmlFor="city">
            City
            <select
              className="w-96 block my-2 rounded-full"
              id="city"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              onBlur={(e) => {
                setCity(e.target.value);
              }}
            >
              <option value="" />
              {cities.map((e) => {
                return (
                  <option key={e} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
          </label>
          <label className="text-lg font-bold text-gray-800" htmlFor="animal">
            Animal
            <select
              className="w-96 block my-2 rounded-full"
              id="animal"
              value={animal}
              onChange={(e) => {
                setBreed("");
                setAnimal(e.target.value);
              }}
              onBlur={(e) => {
                setAnimal(e.target.value);
              }}
            >
              <option />
              {ANIMALS.map((animal) => {
                return (
                  <option key={animal} value={animal}>
                    {animal}
                  </option>
                );
              })}
            </select>
          </label>
          <label className="text-lg font-bold text-gray-800" htmlFor="breed">
            Breeds
            <select
              className="w-96 block my-2 rounded-full disabled:opacity-50"
              id="breed"
              value={breed}
              onChange={(e) => {
                setBreed(e.target.value);
              }}
              onBlur={(e) => {
                setBreed(e.target.value);
              }}
            >
              <option />
              {breeds.map((breed) => {
                return (
                  <option key={breed.name} value={breed.name}>
                    {breed.name}
                  </option>
                );
              })}
            </select>
          </label>
          <label className="text-lg font-bold text-gray-800" htmlFor="theme">
            App Theme
            <select
              className="w-96 block my-2 rounded-full"
              id="theme"
              onChange={(e) => setTheme(e.target.value)}
              onBlur={(e) => setTheme(e.target.value)}
            >
              {themes.map((color) => {
                return (
                  <option key={color} value={color}>
                    {color}
                  </option>
                );
              })}
            </select>
          </label>
          <div className="w-full mt-8">
            <button className="w-52 h-10 rounded-full m-auto bg-gray-800 text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Results pets={pets} />
    </div>
  );
}

export default SearchParams;
