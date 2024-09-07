"use client"
import CarsList from '@/components/templates/CarsList.js';
import carsData from '../../../data/carsdata.js'

function Hatchback() {
    const hatchbackCars = carsData.filter((car) => car.category === 'hatchback');
    console.log(hatchbackCars)
  return <CarsList data={hatchbackCars} />
}

export default Hatchback