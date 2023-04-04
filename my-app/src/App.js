import React from 'react'

const App = () => {
  return (
    <>
      <h1>Hello World  {3 + 3} </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dolorem.</p>
      <img src="" alt="" />
      
      <MyName />
    </>
  )
}

// Nested Component
const MyName = () => {
  return (
    <>
      <h1>Muhammad bilal</h1>
    </>
  );
}

export default App
