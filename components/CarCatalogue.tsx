import React from 'react';

import { CustomFilter } from './';
import { SearchBar } from './';

import { CartalogueProps } from '@/types';
import { fetchCars } from '@/utils';

const CarCatalogue = async ({ searchParams }: CartalogueProps) => {
  // const allCars = await fetchCars({
  //   manufacturer: searchParams.manufacturer || '',
  //   year: searchParams.year || 2022,
  //   fuel: searchParams.fuel || '',
  //   limit: searchParams.limit || 10,
  //   model: searchParams.model || ''
  // });
  return (
    <div className="padding-x padding-y max-width mt-12" id="discover">
      <div className="home_text-container">
        <h1 className="text-4xl font-extrabold">Carros disponíveis</h1>
        <p>Escolha o carro</p>
      </div>
      <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>
      </div>
    </div>
  );
};

export default CarCatalogue;
