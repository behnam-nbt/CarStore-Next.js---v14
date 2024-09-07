import Calender from '../icons/Calender'
import Location from '../icons/Location'
import Company from '../icons/Company'
import Model from '../icons/Model'
import Money from '../icons/Money'
import Road from '../icons/Road'
import styles from './CarDetails.module.css'
import Image from 'next/image'

function CarDetails({ carDetails: { name, image, distance, price, model, year, location, description } }) {
    return (
        <div className={styles.container}>
            <Image
                src={image}
                alt={name}
                width={500} // Replace with the actual image width
                height={300} // Replace with the actual image height
                style={{
                    width: '100%',  // Responsive width
                    height: 'auto', // Auto-adjust height
                }}
            />
            <h3 className={styles.header}>
                `{name} {model}`
            </h3>

            <div className={styles.details}>
                <div>
                    <Company />
                    <p>Company</p>
                    <span>{name}</span>
                </div>
                <div>
                    <Model />
                    <p>Model</p>
                    <span>{model}</span>
                </div>
                <div>
                    <Calender />
                    <p>First Registration</p>
                    <span>{year}</span>
                </div>
                <div>
                    <Road />
                    <p>kms driven</p>
                    <span>{distance}</span>
                </div>
            </div>
            <div className={styles.details}>
                <div>
                    <Location />
                    <p>Location</p>
                    <span>{location}</span>
                </div>
            </div>
            <div className={styles.details}>
                <p className={styles.descriptionTitle}>Extra Information</p>
                <p className={styles.descriptionText}>{description}</p>
            </div>
            <div className={styles.details}>
                <div className={styles.price}>
                    <Money />
                    <p>Price:</p>
                    <span>${price}</span>
                </div>
            </div>
            <button className={styles.button}>Buy</button>
        </div>
    )
}

export default CarDetails