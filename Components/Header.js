import React from 'react'

const Header = (props) => {

  return (
    <div className='h-8 bg-green-500 flex items-center justify-between '> 
    <h1>{props.name}</h1>
    <div className='flex gap-5'>

    <h4>About</h4>
    <h4>Career</h4>
    <h4>{props.tech}</h4>
    <h4>Account</h4>
    </div>


      {/* <h1>HEllo</h1>
      <h2>PAGE</h2> */}
    </div>
  )
}

export default Header
