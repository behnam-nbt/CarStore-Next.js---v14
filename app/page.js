"use client"
import data from '../data/carsdata'
import CarPage from "@/components/templates/CarPage";
import Category from '@/components/module/Category';
import SearchBar from '@/components/module/SearchBar';
import AllButton from '@/components/module/AllButton';

export default function Home() {
  const cars = data.slice(0, 3);
  return (
    <div>
      <SearchBar />
      <Category />
      <AllButton />
      <CarPage data={cars} />
    </div>
  );
}
