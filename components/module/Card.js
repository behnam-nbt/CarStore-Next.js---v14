import React from 'react'
import Image from "next/image";
import styles from './Card.module.css'
import Location from "@/components/icons/Location";
import Link from "next/link";

function Card({car: {id, name, model, year, distance, location, price, image}}) {
    return (
        <Link href={`/cars/${id}`}>
            <div className={styles.container}>
                <Image src={image} alt={name} className={styles.image}
                       width={300}
                       height={200}
                />
                <h4 className={styles.title}>{`${name} ${model}`}</h4>
                <p className={styles.details}>{`${year} . ${distance}`}</p>
                <div className={styles.footer}>
                    <p className={styles.price}>$ {price}</p>
                    <div className={styles.location}>
                        <p>{location}</p>
                        <Location/>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card
