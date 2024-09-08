import { useSearchParams } from 'react-router-dom'
import React from 'react'

const Home = () => {

  const [params, setParams] = useSearchParams()
  
  return (
    <div>Home</div>
  )
}

export default Home