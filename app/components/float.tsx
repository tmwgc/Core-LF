'use client'

import { link } from 'fs'
import styles from '../styles/float.module.css'
import Link from 'next/link'

interface FloatProps {
    serveLinks? : {
        label: string,
        url: string
    }[]
}


const Float: React.FC<FloatProps> = (props) => {

    const {serveLinks} = props

    const renderLinks = serveLinks?.map((link,i)=>{
        return (<Link  style={{
            listStyle:'none', textDecoration: 'none', placeSelf: 'center', fontSize: '12px'}} key={i} href={link.url}>
            {link.label.split(' ')[0]}<br></br>
            {link.label.split(' ')[1]}
        </Link>)
    })

    return(
        <div className={styles.float}>
            {renderLinks}
        </div>
    )
}

export default Float