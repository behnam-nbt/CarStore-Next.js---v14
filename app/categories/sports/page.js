"use client"
import CarsList from '@/components/templates/CarsList.js';
import carsData from '../../../data/carsdata.js'

function Sports() {
    const sportsCars = carsData.filter((car) => car.category === 'sport');
    console.log(sportsCars)
  return <CarsList data={sportsCars} />
}

export default Sports