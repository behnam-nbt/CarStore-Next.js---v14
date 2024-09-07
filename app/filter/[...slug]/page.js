"use client";  // Ensure this is at the top if this is a client-side component

import { useEffect, useState } from 'react';
import carsData from '../../../data/carsdata';
import CarsList from '@/components/templates/CarsList';

function FilteredCars({ params }) {
    const [filteredCars, setFilteredCars] = useState([]);

    // Destructure slug from params and ensure they are numbers
    const [minPrice, maxPrice] = params.slug.map(price => Number(price));

    // Filtering cars based on price range
    useEffect(() => {
        const filtered = carsData.filter((car) => car.price >= minPrice && car.price <= maxPrice);
        setFilteredCars(filtered);
    }, [minPrice, maxPrice]);  // Re-run effect when minPrice or maxPrice changes

    return (
        <div>
            {filteredCars.length > 0 ? (

                <CarsList data={filteredCars} />

            ) : (
                <p>No cars found in the specified price range.</p>
            )}
        </div>
    );
}

export default FilteredCars;
