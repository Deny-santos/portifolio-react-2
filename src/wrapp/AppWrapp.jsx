import React from 'react'

const AppWrapp = (Component, id) => function HOC() {
  return (
    <div className='app__wrapp' id={`${id}`}>
        <Component /> 
    </div>
  )
}

export default AppWrapp