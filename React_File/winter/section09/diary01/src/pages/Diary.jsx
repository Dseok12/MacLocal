import { useParams } from 'react-router-dom'
import React from 'react'

const Diary = () => {

  const params = useParams()
  console.log(params)

  return (
    <>
      <p>{params.id}번째 일기 입니다.</p>
    </>
  )
}

export default Diary