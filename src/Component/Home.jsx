import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <ul>
            <li>
            <Link to={'/Category'}>category</Link>
            </li>
         </ul>
    </div>
  )
}
