"use client";
import carsData from '../../../data/carsdata'
import CarDetails from '../../../components/templates/CarDetails';

export default function Page({ params }) {
    const carDetails = carsData[params.slug -1];
    return <CarDetails carDetails={carDetails} />;
  }
  
