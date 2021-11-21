import React from 'react'
import styles from '../experience/experience.module.css'
import Link from 'next/link'

const experience = ({ work }) => {

  const { titel, slug } = work.fields

  return (
    <div>
      <p>{titel}</p>
      <Link href={'/experience/' + slug}><a>click here</a></Link>
    </div>
  )
}

export default experience
