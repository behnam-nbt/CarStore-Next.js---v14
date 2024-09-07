import Link from 'next/link'
import Hatchback from '../icons/Hatchback'
import Sedan from '../icons/Sedan'
import Sport from '../icons/Sport'
import Suv from '../icons/Suv'

import styles from './Category.module.css'

function Category() {
    return (
        <div className={styles.container}>
            <Link href="/categories/sedan">
                <div>
                    <p>Sedan</p>
                    <Sedan />
                </div>
            </Link>
            <Link href="/categories/suv">
                <div>
                    <p>Suv</p>
                    <Suv />
                </div>
            </Link>
            <Link href="/categories/hatchback">
                <div>
                    <p>Hatchback</p>
                    <Hatchback />
                </div>
            </Link>
            <Link href="/categories/sports">
                <div>
                    <p>Sports</p>
                    <Sport />
                </div>
            </Link>
        </div>
    )
}

export default Category