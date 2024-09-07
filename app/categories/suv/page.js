"use client"
import CarsList from '@/components/templates/CarsList.js';
import carsData from '../../../data/carsdata.js'

function Suv() {
    const suvCars = carsData.filter((car) => car.category === 'suv');
    console.log(suvCars)
  return <CarsList data={suvCars} />
}

export default Suv