"use client"
import CarsList from '@/components/templates/CarsList.js';
import carsData from '../../../data/carsdata.js'

function Sedan() {
    const sedanCars = carsData.filter((car) => car.category === 'sedan');
    console.log(sedanCars)
  return <CarsList data={sedanCars} />
}

export default Sedan