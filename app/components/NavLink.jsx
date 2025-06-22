import Link from 'next/link'
import React from 'react'

function NavLink({data, isActive, handleClick}) {
  const { name, url } = data;

  return (
    <li className={`relative flex ${isActive ? 'active' : ''}`}>
      <Link
          key={name} href={url}
          onClick={() => {handleClick(url)}} 
          className="overflow-hidden relative text-4xl sm:text-5xl md:text-6xl swap-text"
          >
            <div>{name}</div>
            <p className="absolute">{name}</p>
        </Link> 
    </li>
  )
}

export default NavLink