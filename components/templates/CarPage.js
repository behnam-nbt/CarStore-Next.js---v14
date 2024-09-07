"use client";
import React from 'react'
import styles from './CarPage.module.css'
import Card from "@/components/module/Card";

function CarPage({data}) {
    return (
        <div className={styles.container}>
            {data.map((car) => (
                <Card car={car} key={car.id} />
            ))}
        </div>
    )
}

export default CarPage
