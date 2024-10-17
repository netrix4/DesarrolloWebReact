import Link from 'next/link'
import React from 'react'

// const routes =['about']
const routes =[
  {
    'name':'home',
    'route':'/',
  },
  {
    'name':'About',
    'route':'about',
  },
  {
    'name':'About',
    'route':'about',
  }
]

const Header = () => {
  return (
    <header>
      <nav>
        <div classNam=''>
           LOGO
        </div>
        <div classNam=''>
          Mi primera pagina next
        </div>
      </nav>

      <nav>
        {routes.map((item)=>(
          <Link href={item.route}> {item.name} </Link>
          )
        )}
      </nav>

    </header>
  )
}

export default Header;