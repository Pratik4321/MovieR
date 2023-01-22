import React from 'react'

const Movies = (props) => {
  return (
    <div className='Movie'>
        <img src={props.img} alt="" />
        <p>{props.title}</p>
        <p>{props.year}</p>
       



    </div>
  )
}

export default Movies 