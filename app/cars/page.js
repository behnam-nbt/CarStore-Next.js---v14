"use client"
import React from 'react'
import data from '../../data/carsdata'
import CarPage from "@/components/templates/CarPage";
import Category from '@/components/module/Category';
import SearchBar from '@/components/module/SearchBar';

function CarDetails() {
    return (
        <div>
            <SearchBar />
            <Category />
            <CarPage data={data}/>
        </div>
    )
}

export default CarDetails
